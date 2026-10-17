
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const emptyStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 30,
  },
  title: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 12,
  },
  description: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 6,
    textAlign: "center",
  },
});
