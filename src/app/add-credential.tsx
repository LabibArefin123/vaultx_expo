import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import CredentialForm from "@/components/credentials/credential_form";
import { COLORS } from "@/constants/vault";

import { screenStyles } from "@/styles/credentials/credential_details.styles";

export default function AddCredentialScreen() {
  const router = useRouter();

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
          <Text style={screenStyles.title}>Add Credential</Text>
          <Text style={screenStyles.subtitle}>
            Save a new account to your vault.
          </Text>
        </View>
      </View>

      <CredentialForm mode="create" />
    </SafeAreaView>
  );
}
