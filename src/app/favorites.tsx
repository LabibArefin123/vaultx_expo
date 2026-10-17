import { ActivityIndicator, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/vault";
import { useCredentials } from "@/hooks/use_credentials";

import {
  FavoritesHeader,
  FavoritesSummary,
  FavoritesCredentialList,
} from "@/components/favorites";

import { mainStyles } from "@/styles/favorites/favorites_main.styles";

export default function FavoritesScreen() {
  const { credentials, loading } = useCredentials();

  const favorites = credentials.filter((item) => item.favorite);

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <FavoritesHeader />

        <FavoritesSummary count={favorites.length} />

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.gold} />
        ) : (
          <FavoritesCredentialList credentials={favorites} />
        )}

        <Text style={mainStyles.footer}>
          VaultX · Your passwords, protected.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
