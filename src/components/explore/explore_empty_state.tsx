import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { emptyStyles } from "@/styles/explore/explore_empty.styles";

export default function ExploreEmptyState() {
  return (
    <View style={emptyStyles.emptyState}>
      <View style={emptyStyles.emptyIcon}>
        <Ionicons name="search-outline" size={28} color={COLORS.secondary} />
      </View>

      <Text style={emptyStyles.emptyTitle}>No credentials found</Text>

      <Text style={emptyStyles.emptyDescription}>
        Try another search term or category.
      </Text>
    </View>
  );
}
