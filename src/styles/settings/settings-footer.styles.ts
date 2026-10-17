import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const footerStyles = StyleSheet.create({
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