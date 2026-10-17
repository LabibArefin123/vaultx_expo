import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Pressable, Text, View } from "react-native";

import { biometricStyles as styles } from "@/styles/authentication/biometric-login.styles";

type BiometricType = "face" | "fingerprint" | "unknown";

type BiometricRecord = {
  enabled: number;
  authentication_type: string | null;
};

export function BiometricLogin() {
  const db = useSQLiteContext();
  const router = useRouter();

  const [biometricType, setBiometricType] = useState<BiometricType>("unknown");

  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);

  useEffect(() => {
    const initializeBiometrics = async () => {
      try {
        const result = await db.getFirstAsync<BiometricRecord>(
          `SELECT enabled, authentication_type
           FROM biometric_settings
           WHERE id = 1`,
        );

        setEnabled(result?.enabled === 1);

        const hardwareAvailable = await LocalAuthentication.hasHardwareAsync();

        const enrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hardwareAvailable || !enrolled) {
          setBiometricType("unknown");
          return;
        }

        const types =
          await LocalAuthentication.supportedAuthenticationTypesAsync();

        if (
          types.includes(
            LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
          )
        ) {
          setBiometricType("face");
        } else if (
          types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
        ) {
          setBiometricType("fingerprint");
        }
      } catch {
        Alert.alert(
          "Authentication unavailable",
          "Unable to initialize biometric authentication.",
        );
      } finally {
        setLoading(false);
      }
    };

    initializeBiometrics();
  }, [db]);

  const handleBiometricLogin = async () => {
    if (biometricType === "unknown") {
      Alert.alert(
        "Biometrics unavailable",
        "Please configure Face ID or fingerprint authentication on your device.",
      );
      return;
    }

    if (!enabled) {
      Alert.alert(
        "Biometric login disabled",
        "Please enable biometric authentication from Settings first.",
      );
      return;
    }

    try {
      setAuthenticating(true);

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to unlock VaultX",
        cancelLabel: "Cancel",
        fallbackLabel: "Use device passcode",
        disableDeviceFallback: false,
        biometricsSecurityLevel: "strong",
      });

      if (!result.success) {
        if (result.error !== "user_cancel") {
          Alert.alert(
            "Authentication failed",
            "Your identity could not be verified. Please try again.",
          );
        }

        return;
      }

      router.replace("/");
    } catch {
      Alert.alert(
        "Something went wrong",
        "Unable to complete biometric authentication.",
      );
    } finally {
      setAuthenticating(false);
    }
  };

  const handleEnableBiometrics = async () => {
    try {
      setAuthenticating(true);

      const hardware = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hardware || !enrolled) {
        Alert.alert(
          "Setup required",
          "Please enroll your fingerprint or Face ID in your device settings first.",
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Verify your identity to enable VaultX biometrics",
        cancelLabel: "Cancel",
        disableDeviceFallback: true,
        biometricsSecurityLevel: "strong",
      });

      if (!result.success) {
        Alert.alert(
          "Verification failed",
          "Biometric authentication was not completed.",
        );
        return;
      }

      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      const method = types.includes(
        LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
      )
        ? "face"
        : "fingerprint";

      await db.runAsync(
        `UPDATE biometric_settings
         SET enabled = 1,
             authentication_type = ?,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = 1`,
        method,
      );

      setEnabled(true);

      Alert.alert(
        "Biometrics enabled",
        "Your biometric login preference has been saved.",
      );
    } catch {
      Alert.alert("Setup failed", "Unable to save your biometric settings.");
    } finally {
      setAuthenticating(false);
    }
  };

  const isFace = biometricType === "face";

  const iconName = isFace ? "scan-outline" : "finger-print-outline";

  const title = isFace ? "Welcome Back" : "Secure Your Vault";

  const subtitle = isFace
    ? "Use Face ID to securely access your passwords."
    : "Use your fingerprint to securely access your passwords.";

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#B08A45" />
        <Text style={styles.loadingText}>
          Preparing secure authentication...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logo}>
          <Ionicons name="shield-checkmark" size={30} color="#B08A45" />
        </View>

        <Text style={styles.brand}>VaultX</Text>

        <Text style={styles.tagline}>SECURE. ORGANIZE. PROTECT.</Text>
      </View>

      <View style={styles.authSection}>
        <View style={styles.biometricCircle}>
          <Ionicons name={iconName} size={76} color="#B08A45" />
        </View>

        <Text style={styles.title}>
          {enabled ? title : "Enable Biometric Login"}
        </Text>

        <Text style={styles.subtitle}>
          {enabled
            ? subtitle
            : "Activate fingerprint or Face ID authentication for convenient and secure access."}
        </Text>

        <View style={styles.status}>
          <View
            style={[
              styles.statusDot,
              {
                backgroundColor:
                  biometricType === "unknown" ? "#D97706" : "#22A06B",
              },
            ]}
          />

          <Text style={styles.statusText}>
            {biometricType === "unknown"
              ? "Biometric hardware unavailable"
              : `${isFace ? "Face recognition" : "Fingerprint"} detected`}
          </Text>
        </View>

        <Pressable
          style={[styles.authButton, authenticating && styles.disabledButton]}
          onPress={enabled ? handleBiometricLogin : handleEnableBiometrics}
          disabled={authenticating || biometricType === "unknown"}
        >
          {authenticating ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons name={iconName} size={22} color="#FFFFFF" />

              <Text style={styles.authButtonText}>
                {enabled ? "Unlock My Vault" : "Enable Biometrics"}
              </Text>
            </>
          )}
        </Pressable>

        <Pressable
          style={styles.passwordButton}
          onPress={() => router.replace("/settings")}
        >
          <Ionicons name="settings-outline" size={17} color="#B08A45" />

          <Text style={styles.passwordButtonText}>Biometric Settings</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Ionicons name="lock-closed" size={14} color="#999999" />

        <Text style={styles.footerText}>
          Protected by your device's secure authentication
        </Text>
      </View>
    </View>
  );
}
