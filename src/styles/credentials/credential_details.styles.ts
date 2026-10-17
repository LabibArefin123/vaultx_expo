import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const screenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    flex: 1,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "800",
  },
  title: {
    color: COLORS.primary,
    fontSize: 21,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 4,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backText: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 14,
  },
  credentialHero: {
    alignItems: "center",
    paddingVertical: 30,
  },
  credentialIcon: {
    width: 72,
    height: 72,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  category: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "700",
    marginTop: 7,
  },
  detailsCard: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 55,
  },
  detailInfo: {
    flex: 1,
    paddingRight: 10,
  },
  label: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 7,
  },
  value: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "600",
  },
  rowActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    padding: 9,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 22,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 11,
  },
  deleteText: {
    color: COLORS.danger,
    fontSize: 13,
    fontWeight: "800",
  },
});