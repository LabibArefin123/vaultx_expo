import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS,
  CATEGORIES,
  DEMO_CREDENTIALS,
  type CredentialCategory,
} from "@/constants/vault";

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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>YOUR COLLECTION</Text>
            <Text style={styles.title}>Password Vault</Text>
            <Text style={styles.subtitle}>
              All your credentials in one place.
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons
              name="lock-closed-outline"
              size={23}
              color={COLORS.gold}
            />
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={COLORS.secondary} />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search passwords..."
            placeholderTextColor={COLORS.muted}
            style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={19} color={COLORS.muted} />
            </Pressable>
          )}
        </View>

        <Text style={styles.filterTitle}>Categories</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {CATEGORIES.map((item) => {
            const active = category === item;

            return (
              <Pressable
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.categoryButton,
                  active && styles.categoryButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    active && styles.categoryTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Saved credentials</Text>
          <Text style={styles.count}>{filteredCredentials.length} items</Text>
        </View>

        {filteredCredentials.length > 0 ? (
          filteredCredentials.map((item) => (
            <View key={item.id} style={styles.credentialCard}>
              <View
                style={[
                  styles.credentialIcon,
                  { backgroundColor: `${item.color}15` },
                ]}
              >
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={23}
                  color={item.color}
                />
              </View>

              <View style={styles.credentialInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.credentialTitle}>{item.title}</Text>

                  {item.favorite && (
                    <Ionicons name="heart" size={14} color={COLORS.danger} />
                  )}
                </View>

                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.website}>{item.website}</Text>
              </View>

              <View style={styles.trailing}>
                <Text style={styles.categoryLabel}>{item.category}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={17}
                  color={COLORS.muted}
                />
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons
                name="search-outline"
                size={28}
                color={COLORS.secondary}
              />
            </View>
            <Text style={styles.emptyTitle}>No credentials found</Text>
            <Text style={styles.emptyDescription}>
              Try another search term or category.
            </Text>
          </View>
        )}

        <View style={styles.notice}>
          <Ionicons
            name="information-circle-outline"
            size={18}
            color={COLORS.gold}
          />
          <Text style={styles.noticeText}>
            These are demonstration entries. Real password storage will be
            implemented separately.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 23,
  },
  eyebrow: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  title: {
    color: COLORS.primary,
    fontSize: 25,
    fontWeight: "800",
    marginTop: 7,
  },
  subtitle: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 5,
  },
  headerIcon: {
    width: 47,
    height: 47,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    paddingHorizontal: 14,
    height: 51,
    gap: 10,
    marginBottom: 25,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
  },
  filterTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 12,
  },
  categoryList: {
    gap: 9,
    paddingBottom: 23,
  },
  categoryButton: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryText: {
    color: COLORS.secondary,
    fontSize: 11,
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
  },
  count: {
    color: COLORS.secondary,
    fontSize: 11,
  },
  credentialCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
  },
  credentialIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  credentialInfo: {
    flex: 1,
    marginLeft: 12,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  credentialTitle: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "800",
  },
  username: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 4,
  },
  website: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 3,
  },
  trailing: {
    alignItems: "flex-end",
    gap: 10,
  },
  categoryLabel: {
    color: COLORS.primaryLight,
    backgroundColor: "#EEF1FA",
    fontSize: 9,
    fontWeight: "700",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  emptyState: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    alignItems: "center",
    padding: 30,
  },
  emptyIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 13,
  },
  emptyDescription: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 6,
  },
  notice: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    backgroundColor: COLORS.goldLight,
    padding: 13,
    borderRadius: 13,
    marginTop: 15,
  },
  noticeText: {
    flex: 1,
    color: COLORS.secondary,
    fontSize: 10,
    lineHeight: 16,
  },
});
