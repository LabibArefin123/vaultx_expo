import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, type CredentialCategory } from "@/constants/vault";
import { useCredentials } from "@/hooks/use_credentials";

import {
  ExploreHeader,
  ExploreSearch,
  ExploreCategories,
  ExploreCredentialList,
} from "@/components/explore";

import { mainStyles } from "@/styles/explore/explore_main.styles";

export default function VaultScreen() {
  const { credentials, loading } = useCredentials();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CredentialCategory>("All");

  const filteredCredentials = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return credentials.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;

      const matchesSearch =
        !searchText ||
        item.title.toLowerCase().includes(searchText) ||
        item.username.toLowerCase().includes(searchText) ||
        item.website.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText) ||
        (item.notes ?? "").toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [credentials, category, search]);

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <ExploreHeader />

        <ExploreSearch search={search} onSearchChange={setSearch} />

        <ExploreCategories category={category} onCategoryChange={setCategory} />

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.gold} />
        ) : (
          <ExploreCredentialList credentials={filteredCredentials} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
