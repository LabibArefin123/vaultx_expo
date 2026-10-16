import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS,
  CATEGORIES,
  DEMO_CREDENTIALS,
  type CredentialCategory,
} from "@/constants/vault";

export default function HomeScreen() {
  const router = useRouter();
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back</Text>
            <Text style={styles.brand}>VaultX</Text>
          </View>

          <Pressable
            style={styles.profileButton}
            onPress={() => router.push("/settings")}
          >
            <Ionicons name="person-outline" size={21} color={COLORS.primary} />
          </Pressable>
        </View>

        <View style={styles.securityCard}>
          <View style={styles.securityTop}>
            <View style={styles.securityIcon}>
              <Ionicons name="shield-checkmark" size={25} color={COLORS.gold} />
            </View>

            <View style={styles.securityBadge}>
              <View style={styles.onlineDot} />
              <Text style={styles.securityBadgeText}>Protected</Text>
            </View>
          </View>

          <Text style={styles.securityTitle}>Your digital life, secured.</Text>
          <Text style={styles.securityDescription}>
            Keep your passwords organized in one place.
          </Text>

          <View style={styles.securityBottom}>
            <Text style={styles.securityBottomText}>
              Secure. Organize. Protect.
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Vault</Text>
          <Pressable onPress={() => router.push("/explore")}>
            <Text style={styles.viewAll}>View all</Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: "#E9EEFF" }]}>
              <Ionicons name="key-outline" size={20} color="#5269C8" />
            </View>
            <Text style={styles.statNumber}>{DEMO_CREDENTIALS.length}</Text>
            <Text style={styles.statLabel}>Saved items</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: "#FCEDEB" }]}>
              <Ionicons name="heart-outline" size={20} color="#E36B70" />
            </View>
            <Text style={styles.statNumber}>
              {DEMO_CREDENTIALS.filter((item) => item.favorite).length}
            </Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: "#E5F5EE" }]}>
              <Ionicons name="folder-outline" size={20} color="#15966A" />
            </View>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;

            return (
              <Pressable
                key={category}
                onPress={() => setSelectedCategory(category)}
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
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent passwords</Text>
          <Pressable onPress={() => router.push("/explore")}>
            <Text style={styles.viewAll}>See all</Text>
          </Pressable>
        </View>

        {credentials.length > 0 ? (
          credentials.map((item) => (
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
                <Text style={styles.credentialTitle}>{item.title}</Text>
                <Text style={styles.credentialUsername}>{item.username}</Text>
              </View>

              {item.favorite && (
                <Ionicons name="heart" size={17} color={COLORS.danger} />
              )}

              <Ionicons
                name="chevron-forward"
                size={18}
                color={COLORS.muted}
                style={styles.chevron}
              />
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons
              name="folder-open-outline"
              size={28}
              color={COLORS.muted}
            />
            <Text style={styles.emptyText}>No passwords in this category.</Text>
          </View>
        )}

        <Pressable
          style={styles.generatorButton}
          onPress={() => router.push("/settings")}
        >
          <View style={styles.generatorIcon}>
            <Ionicons name="shuffle-outline" size={22} color={COLORS.gold} />
          </View>

          <View style={styles.generatorInfo}>
            <Text style={styles.generatorTitle}>Password Generator</Text>
            <Text style={styles.generatorDescription}>
              Create strong and unique passwords
            </Text>
          </View>

          <Ionicons name="arrow-forward" size={19} color={COLORS.primary} />
        </Pressable>

        <Text style={styles.footerText}>
          VaultX · Your passwords, protected.
        </Text>
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
    paddingTop: 12,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  greeting: {
    color: COLORS.secondary,
    fontSize: 13,
  },
  brand: {
    color: COLORS.primary,
    fontSize: 27,
    fontWeight: "800",
    marginTop: 2,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  securityCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 23,
    padding: 21,
    marginBottom: 27,
  },
  securityTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  securityIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF18",
    alignItems: "center",
    justifyContent: "center",
  },
  securityBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#FFFFFF18",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#5DDAA3",
  },
  securityBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
  securityTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
    marginTop: 23,
  },
  securityDescription: {
    color: "#D4DBED",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },
  securityBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#FFFFFF25",
    marginTop: 21,
    paddingTop: 15,
  },
  securityBottomText: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: "700",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
    marginTop: 3,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "800",
  },
  viewAll: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 27,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 17,
    padding: 13,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statIcon: {
    width: 35,
    height: 35,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  statNumber: {
    color: COLORS.text,
    fontSize: 21,
    fontWeight: "800",
  },
  statLabel: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
  categoryList: {
    gap: 9,
    paddingBottom: 22,
  },
  categoryButton: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryText: {
    color: COLORS.secondary,
    fontSize: 12,
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  credentialCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  credentialIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  credentialInfo: {
    flex: 1,
    marginLeft: 12,
  },
  credentialTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "700",
  },
  credentialUsername: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  chevron: {
    marginLeft: 9,
  },
  emptyState: {
    alignItems: "center",
    padding: 25,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
  },
  emptyText: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 9,
  },
  generatorButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.goldLight,
    borderRadius: 17,
    padding: 15,
    marginTop: 17,
  },
  generatorIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  generatorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  generatorTitle: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: "800",
  },
  generatorDescription: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 25,
  },
});
