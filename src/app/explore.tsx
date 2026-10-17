import { useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS,
  DEMO_CREDENTIALS,
  type CredentialCategory,
} from "@/constants/vault";

import {
  ExploreHeader,
  ExploreSearch,
  ExploreCategories,
  ExploreCredentialList,
  ExploreNotice,
} from "@/components/explore";

import { mainStyles } from "@/styles/explore/explore_main.styles";

export default function VaultScreen() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CredentialCategory>("All");

  const filteredCredentials = useMemo(() => {
    return DEMO_CREDENTIALS.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.username.toLowerCase().includes(searchText) ||
        item.website.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <ExploreHeader />

        <ExploreSearch search={search} onSearchChange={setSearch} />

        <ExploreCategories category={category} onCategoryChange={setCategory} />

        <ExploreCredentialList credentials={filteredCredentials} />

        <ExploreNotice />
      </ScrollView>
    </SafeAreaView>
  );
}
