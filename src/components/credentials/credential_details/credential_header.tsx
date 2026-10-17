import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

type CredentialHeaderProps = {
  favorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
};

export function CredentialHeader({
  favorite,
  onBack,
  onToggleFavorite,
}: CredentialHeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={21} color={COLORS.primary} />
      </Pressable>

      <Text style={styles.headerTitle}>Credential Details</Text>

      <Pressable onPress={onToggleFavorite} style={styles.backButton}>
        <Ionicons
          name={favorite ? "heart" : "heart-outline"}
          size={21}
          color={COLORS.danger}
        />
      </Pressable>
    </View>
  );
}
