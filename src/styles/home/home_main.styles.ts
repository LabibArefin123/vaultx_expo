
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const mainStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 25,
  },
});
