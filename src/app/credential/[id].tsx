import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCredentials } from "@/hooks/use_credentials";

import {
  CredentialActions,
  CredentialDetailsCard,
  CredentialHeader,
  CredentialHero,
  CredentialStatus,
} from "@/components/credentials/credential_details";

import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

export default function CredentialDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { credentials, loading, deleteCredential, toggleFavorite } =
    useCredentials();

  const [showPassword, setShowPassword] = useState(false);

  const credential = credentials.find((item) => item.id === Number(id));

  const copyText = async (value: string) => {
    if (!value) return;

    try {
      await Clipboard.setStringAsync(value);
      Alert.alert("Copied", "Information copied to clipboard.");
    } catch {
      Alert.alert("Error", "Could not copy information.");
    }
  };

  const handleDelete = () => {
    if (!credential) return;

    Alert.alert(
      "Delete credential",
      `Are you sure you want to delete ${credential.title}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
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

  if (loading || !credential) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <CredentialStatus loading={loading} onBack={() => router.back()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CredentialHeader
          favorite={credential.favorite}
          onBack={() => router.back()}
          onToggleFavorite={() => {
            void toggleFavorite(credential.id);
          }}
        />

        <CredentialHero
          title={credential.title}
          category={credential.category}
          icon={credential.icon}
          color={credential.color}
        />

        <CredentialDetailsCard
          username={credential.username}
          password={credential.password}
          website={credential.website}
          notes={credential.notes}
          showPassword={showPassword}
          onTogglePassword={() => {
            setShowPassword((value) => !value);
          }}
          onCopy={(value) => {
            void copyText(value);
          }}
        />

        <CredentialActions
          onEdit={() =>
            router.push({
              pathname: "/edit-credential/[id]",
              params: { id: String(credential.id) },
            })
          }
          onDelete={handleDelete}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
