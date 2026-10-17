
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const categoryStyles = StyleSheet.create({
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
});
