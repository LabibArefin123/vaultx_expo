
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const statsStyles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 27,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 17,
    padding: 13,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statIcon: {
    width: 35,
    height: 35,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  statNumber: {
    color: COLORS.text,
    fontSize: 21,
    fontWeight: "800",
  },
  statLabel: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
});
