import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { emptyStyles } from "@/styles/favorites/favorites_empty.styles";

export default function FavoritesEmptyState() {
  return (
    <View style={emptyStyles.container}>
      <Ionicons name="heart-outline" size={30} color={COLORS.muted} />

      <Text style={emptyStyles.title}>No favorites yet</Text>

      <Text style={emptyStyles.description}>
        Your favorite credentials will appear here.
      </Text>
    </View>
  );
}
