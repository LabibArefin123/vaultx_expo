import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import CredentialForm from "@/components/credentials/credential_form";
import { COLORS } from "@/constants/vault";
import { useCredentials } from "@/hooks/use_credentials";

import { screenStyles } from "@/styles/credentials/credential_details.styles";

export default function EditCredentialScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { credentials, loading } = useCredentials();

  const credential = credentials.find((item) => item.id === Number(id));

  if (loading) {
    return (
      <SafeAreaView style={screenStyles.safeArea}>
        <View style={screenStyles.center}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (!credential) {
    return (
      <SafeAreaView style={screenStyles.safeArea}>
        <View style={screenStyles.center}>
          <Text style={screenStyles.title}>Credential not found</Text>

          <Pressable onPress={() => router.back()}>
            <Text style={screenStyles.backText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.header}>
        <Pressable
          onPress={() => router.back()}
          style={screenStyles.backButton}
        >
          <Ionicons name="arrow-back" size={21} color={COLORS.primary} />
        </Pressable>

        <View style={screenStyles.headerInfo}>
          <Text style={screenStyles.title}>Edit Credential</Text>
          <Text style={screenStyles.subtitle}>
            Update your saved account information.
          </Text>
        </View>
      </View>

      <CredentialForm mode="edit" credential={credential} />
    </SafeAreaView>
  );
}
