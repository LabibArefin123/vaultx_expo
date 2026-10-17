import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const sectionStyles = StyleSheet.create({
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
});