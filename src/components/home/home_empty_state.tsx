import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { credentialStyles } from "@/styles/home/home_credential.styles";

export default function HomeEmptyState() {
  return (
    <View style={credentialStyles.emptyState}>
      <Ionicons name="folder-open-outline" size={28} color={COLORS.muted} />

      <Text style={credentialStyles.emptyText}>
        No passwords in this category.
      </Text>
    </View>
  );
}
