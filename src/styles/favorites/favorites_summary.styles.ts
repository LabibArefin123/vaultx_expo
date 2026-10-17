
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const summaryStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 21,
    marginBottom: 27,
  },
  number: {
    color: COLORS.gold,
    fontSize: 34,
    fontWeight: "800",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
  },
  description: {
    color: "#C6CEE0",
    fontSize: 11,
    marginTop: 7,
  },
});
