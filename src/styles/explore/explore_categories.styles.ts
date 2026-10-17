
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const categoryStyles = StyleSheet.create({
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
});
