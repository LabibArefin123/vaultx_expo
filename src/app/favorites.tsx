import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DEMO_CREDENTIALS } from "@/constants/vault";

import {
  FavoritesHeader,
  FavoritesSummary,
  FavoritesCredentialList,
} from "@/components/favorites";

import { mainStyles } from "@/styles/favorites/favorites_main.styles";

export default function FavoritesScreen() {
  const favorites = DEMO_CREDENTIALS.filter((item) => item.favorite);

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <FavoritesHeader />

        <FavoritesSummary count={favorites.length} />

        <FavoritesCredentialList credentials={favorites} />

        <Text style={mainStyles.footer}>
          VaultX · Your passwords, protected.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
