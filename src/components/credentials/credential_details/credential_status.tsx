import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

type CredentialStatusProps = {
  loading?: boolean;
  onBack?: () => void;
};

export function CredentialStatus({
  loading = false,
  onBack,
}: CredentialStatusProps) {
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Credential not found</Text>

      <Pressable onPress={onBack}>
        <Text style={styles.backText}>Go back</Text>
      </Pressable>
    </View>
  );
}
