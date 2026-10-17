import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { headerStyles } from "@/styles/explore/explore_header.styles";

export default function ExploreHeader() {
  return (
    <View style={headerStyles.header}>
      <View>
        <Text style={headerStyles.eyebrow}>YOUR COLLECTION</Text>
        <Text style={headerStyles.title}>Password Vault</Text>
        <Text style={headerStyles.subtitle}>
          All your credentials in one place.
        </Text>
      </View>

      <View style={headerStyles.headerIcon}>
        <Ionicons name="lock-closed-outline" size={23} color={COLORS.gold} />
      </View>
    </View>
  );
}
