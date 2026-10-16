import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/vault";

type SettingRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

function SettingRow({
  icon,
  title,
  description,
  value,
  onValueChange,
}: SettingRowProps) {
  return (
    <View style={styles.settingRow}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={20} color={COLORS.primary} />
      </View>

      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#D9DEE8",
          true: COLORS.primaryLight,
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

export default function SettingsScreen() {
  const [biometric, setBiometric] = useState(false);
  const [autoLock, setAutoLock] = useState(true);
  const [clipboard, setClipboard] = useState(true);

  const previewAlert = (feature: string) => {
    Alert.alert(
      "Coming soon",
      `${feature} will be connected to the VaultX security system in a future implementation.`,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>PREFERENCES</Text>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>
              Customize your VaultX experience.
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="settings-outline" size={23} color={COLORS.gold} />
          </View>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={26} color={COLORS.gold} />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>VaultX User</Text>
            <Text style={styles.profileEmail}>Your private password vault</Text>
          </View>

          <View style={styles.profileBadge}>
            <Ionicons
              name="shield-checkmark"
              size={16}
              color={COLORS.success}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Security</Text>

        <View style={styles.settingsCard}>
          <SettingRow
            icon="finger-print-outline"
            title="Biometric Authentication"
            description="Unlock using fingerprint or Face ID"
            value={biometric}
            onValueChange={(value) => {
              setBiometric(value);
              previewAlert("Biometric authentication");
            }}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="lock-closed-outline"
            title="Automatic Lock"
            description="Lock your vault when inactive"
            value={autoLock}
            onValueChange={(value) => {
              setAutoLock(value);
              previewAlert("Automatic lock");
            }}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="copy-outline"
            title="Clipboard Protection"
            description="Manage copied password behavior"
            value={clipboard}
            onValueChange={(value) => {
              setClipboard(value);
              previewAlert("Clipboard protection");
            }}
          />
        </View>

        <Text style={styles.sectionTitle}>Password Tools</Text>

        <View style={styles.settingsCard}>
          <Pressable
            style={styles.actionRow}
            onPress={() => previewAlert("Password generator")}
          >
            <View style={styles.settingIcon}>
              <Ionicons
                name="shuffle-outline"
                size={20}
                color={COLORS.primary}
              />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Password Generator</Text>
              <Text style={styles.settingDescription}>
                Generate strong passwords
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
          </Pressable>

          <View style={styles.separator} />

          <Pressable
            style={styles.actionRow}
            onPress={() => previewAlert("Security audit")}
          >
            <View style={styles.settingIcon}>
              <Ionicons
                name="analytics-outline"
                size={20}
                color={COLORS.primary}
              />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Security Audit</Text>
              <Text style={styles.settingDescription}>
                Review your password security
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>About</Text>

        <View style={styles.settingsCard}>
          <Pressable
            style={styles.actionRow}
            onPress={() => previewAlert("Privacy policy")}
          >
            <View style={styles.settingIcon}>
              <Ionicons
                name="shield-outline"
                size={20}
                color={COLORS.primary}
              />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Privacy Policy</Text>
              <Text style={styles.settingDescription}>
                Learn how your data is protected
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
          </Pressable>

          <View style={styles.separator} />

          <Pressable
            style={styles.actionRow}
            onPress={() => previewAlert("About VaultX")}
          >
            <View style={styles.settingIcon}>
              <Ionicons
                name="information-circle-outline"
                size={20}
                color={COLORS.primary}
              />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>About VaultX</Text>
              <Text style={styles.settingDescription}>Version 1.0.0</Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
          </Pressable>
        </View>

        <Text style={styles.brand}>VaultX</Text>
        <Text style={styles.tagline}>Secure. Organize. Protect.</Text>
        <Text style={styles.footer}>Made with care · Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 23,
  },
  eyebrow: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  title: {
    color: COLORS.primary,
    fontSize: 25,
    fontWeight: "800",
    marginTop: 7,
  },
  subtitle: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 5,
  },
  headerIcon: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    padding: 17,
    marginBottom: 27,
  },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: "#FFFFFF20",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 13,
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  profileEmail: {
    color: "#C6CEE0",
    fontSize: 11,
    marginTop: 5,
  },
  profileBadge: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 12,
  },
  settingsCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 13,
    marginBottom: 25,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  settingIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    backgroundColor: "#EEF1FA",
    alignItems: "center",
    justifyContent: "center",
  },
  settingInfo: {
    flex: 1,
    marginLeft: 11,
    marginRight: 8,
  },
  settingTitle: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "700",
  },
  settingDescription: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  brand: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 3,
  },
  tagline: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 5,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 10,
    textAlign: "center",
    marginTop: 9,
  },
});
