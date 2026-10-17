import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/vault";
import { useCredentials } from "@/hooks/use_credentials";

import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

export default function CredentialDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { credentials, loading, deleteCredential, toggleFavorite } =
    useCredentials();

  const [showPassword, setShowPassword] = useState(false);

  const credential = credentials.find((item) => item.id === Number(id));

  const copyText = async (value: string) => {
    await Clipboard.setStringAsync(value);
    Alert.alert("Copied", "Information copied to clipboard.");
  };

  const handleDelete = () => {
    if (!credential) return;

    Alert.alert(
      "Delete credential",
      `Are you sure you want to delete ${credential.title}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteCredential(credential.id);
              router.replace("/");
            } catch {
              Alert.alert("Error", "Could not delete this credential.");
            }
          },
        },
      ],
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (!credential) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <Text style={styles.title}>Credential not found</Text>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={21} color={COLORS.primary} />
          </Pressable>

          <Text style={styles.headerTitle}>Credential Details</Text>

          <Pressable
            onPress={() => void toggleFavorite(credential.id)}
            style={styles.backButton}
          >
            <Ionicons
              name={credential.favorite ? "heart" : "heart-outline"}
              size={21}
              color={COLORS.danger}
            />
          </Pressable>
        </View>

        <View style={styles.credentialHero}>
          <View
            style={[
              styles.credentialIcon,
              { backgroundColor: `${credential.color}15` },
            ]}
          >
            <Ionicons
              name={credential.icon as keyof typeof Ionicons.glyphMap}
              size={30}
              color={credential.color}
            />
          </View>

          <Text style={styles.title}>{credential.title}</Text>
          <Text style={styles.category}>{credential.category}</Text>
        </View>

        <View style={styles.detailsCard}>
          <DetailRow
            label="Username / Email"
            value={credential.username || "Not provided"}
            onCopy={() => void copyText(credential.username)}
          />

          <View style={styles.separator} />

          <View style={styles.detailRow}>
            <View style={styles.detailInfo}>
              <Text style={styles.label}>Password</Text>
              <Text style={styles.value}>
                {showPassword ? credential.password : "••••••••••••"}
              </Text>
            </View>

            <View style={styles.rowActions}>
              <Pressable
                onPress={() => setShowPassword((value) => !value)}
                style={styles.actionButton}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={19}
                  color={COLORS.secondary}
                />
              </Pressable>

              <Pressable
                onPress={() => void copyText(credential.password)}
                style={styles.actionButton}
              >
                <Ionicons
                  name="copy-outline"
                  size={18}
                  color={COLORS.secondary}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.separator} />

          <DetailRow
            label="Website"
            value={credential.website || "Not provided"}
            onCopy={() => void copyText(credential.website)}
          />

          <View style={styles.separator} />

          <View style={styles.detailRow}>
            <View style={styles.detailInfo}>
              <Text style={styles.label}>Notes</Text>
              <Text style={styles.value}>
                {credential.notes || "No additional notes"}
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          style={styles.editButton}
          onPress={() =>
            router.push({
              pathname: "/edit-credential/[id]",
              params: { id: String(credential.id) },
            })
          }
        >
          <Ionicons name="create-outline" size={19} color="#FFFFFF" />
          <Text style={styles.buttonText}>Edit Credential</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={19} color={COLORS.danger} />
          <Text style={styles.deleteText}>Delete Credential</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

type DetailRowProps = {
  label: string;
  value: string;
  onCopy: () => void;
};

function DetailRow({ label, value, onCopy }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailInfo}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <Pressable onPress={onCopy} style={styles.actionButton}>
        <Ionicons name="copy-outline" size={18} color={COLORS.secondary} />
      </Pressable>
    </View>
  );
}
