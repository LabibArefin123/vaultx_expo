
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const mainStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 30,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 10,
    textAlign: "center",
    marginTop: 28,
  },
});
