
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const searchStyles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    paddingHorizontal: 14,
    height: 51,
    gap: 10,
    marginBottom: 25,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
  },
});
