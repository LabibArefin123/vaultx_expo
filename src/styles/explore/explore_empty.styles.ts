
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const emptyStyles = StyleSheet.create({
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
});
