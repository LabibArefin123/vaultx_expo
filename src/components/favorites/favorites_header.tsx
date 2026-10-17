import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { headerStyles } from "@/styles/favorites/favorites_header.styles";

export default function FavoritesHeader() {
  return (
    <View style={headerStyles.container}>
      <View>
        <Text style={headerStyles.eyebrow}>QUICK ACCESS</Text>
        <Text style={headerStyles.title}>Favorites</Text>
        <Text style={headerStyles.subtitle}>Your most important accounts.</Text>
      </View>

      <View style={headerStyles.headerIcon}>
        <Ionicons name="heart" size={22} color={COLORS.danger} />
      </View>
    </View>
  );
}
