import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { type CredentialCategory } from "@/constants/vault";

import {
  HomeCategories,
  HomeCredentialList,
  HomeGenerator,
  HomeHeader,
  HomeSecurityCard,
  HomeStats,
  HomeVaultHeader,
} from "@/components/home";

import { useCredentials } from "@/hooks/use_credentials";
import { mainStyles } from "@/styles/home/home_main.styles";
import { COLORS } from "@/constants/vault";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<CredentialCategory>("All");

  const { credentials, loading } = useCredentials();

  const filteredCredentials = useMemo(() => {
    if (selectedCategory === "All") {
      return credentials.slice(0, 4);
    }

    return credentials.filter((item) => item.category === selectedCategory);
  }, [credentials, selectedCategory]);

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <HomeHeader />

        <HomeSecurityCard />

        <HomeVaultHeader />

        {loading ? (
          <View style={{ paddingVertical: 30 }}>
            <ActivityIndicator color={COLORS.primary} />
          </View>
        ) : (
          <>
            <HomeStats credentials={credentials} />

            <HomeCategories
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <HomeCredentialList credentials={filteredCredentials} />
          </>
        )}

        <HomeGenerator />

        <Text style={mainStyles.footerText}>
          VaultX · Your passwords, protected.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
