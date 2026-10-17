
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  greeting: {
    color: COLORS.secondary,
    fontSize: 13,
  },
  brand: {
    color: COLORS.primary,
    fontSize: 27,
    fontWeight: "800",
    marginTop: 2,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
