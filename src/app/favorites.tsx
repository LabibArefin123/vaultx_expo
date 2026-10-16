import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, DEMO_CREDENTIALS } from "@/constants/vault";

export default function FavoritesScreen() {
  const favorites = DEMO_CREDENTIALS.filter((item) => item.favorite);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>QUICK ACCESS</Text>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.subtitle}>Your most important accounts.</Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="heart" size={22} color={COLORS.danger} />
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{favorites.length}</Text>
          <Text style={styles.summaryLabel}>Favorite credentials</Text>
          <Text style={styles.summaryDescription}>
            Keep your frequently used accounts close.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Your favorites</Text>

        {favorites.map((item) => (
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
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.website}>{item.website}</Text>
            </View>

            <Ionicons name="heart" size={19} color={COLORS.danger} />
          </View>
        ))}

        {favorites.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={30} color={COLORS.muted} />
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyDescription}>
              Your favorite credentials will appear here.
            </Text>
          </View>
        )}

        <Text style={styles.footer}>VaultX · Your passwords, protected.</Text>
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
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 21,
    marginBottom: 27,
  },
  summaryNumber: {
    color: COLORS.gold,
    fontSize: 34,
    fontWeight: "800",
  },
  summaryLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
  },
  summaryDescription: {
    color: "#C6CEE0",
    fontSize: 11,
    marginTop: 7,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 14,
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
  credentialTitle: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "800",
  },
  username: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  website: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 3,
  },
  emptyState: {
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 30,
  },
  emptyTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 12,
  },
  emptyDescription: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 6,
    textAlign: "center",
  },
  footer: {
    color: COLORS.muted,
    fontSize: 10,
    textAlign: "center",
    marginTop: 28,
  },
});
