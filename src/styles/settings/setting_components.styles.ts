
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const styles = StyleSheet.create({
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
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    padding: 17,
    marginBottom: 27,
  },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: "#FFFFFF20",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 13,
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  profileEmail: {
    color: "#C6CEE0",
    fontSize: 11,
    marginTop: 5,
  },
  profileBadge: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 12,
  },
  settingsCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 13,
    marginBottom: 25,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  settingIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    backgroundColor: "#EEF1FA",
    alignItems: "center",
    justifyContent: "center",
  },
  settingInfo: {
    flex: 1,
    marginLeft: 11,
    marginRight: 8,
  },
  settingTitle: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "700",
  },
  settingDescription: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  brand: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 3,
  },
  tagline: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 5,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 10,
    textAlign: "center",
    marginTop: 9,
  },
});
