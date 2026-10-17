import { useMemo, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DEMO_CREDENTIALS, type CredentialCategory } from "@/constants/vault";

import {
  HomeCategories,
  HomeCredentialList,
  HomeGenerator,
  HomeHeader,
  HomeSecurityCard,
  HomeStats,
  HomeVaultHeader,
} from "@/components/home";

import { mainStyles } from "@/styles/home/home_main.styles";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<CredentialCategory>("All");

  const credentials = useMemo(() => {
    if (selectedCategory === "All") {
      return DEMO_CREDENTIALS.slice(0, 4);
    }

    return DEMO_CREDENTIALS.filter(
      (item) => item.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <HomeHeader />

        <HomeSecurityCard />

        <HomeVaultHeader />

        <HomeStats />

        <HomeCategories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <HomeCredentialList credentials={credentials} />

        <HomeGenerator />

        <Text style={mainStyles.footerText}>
          VaultX · Your passwords, protected.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
