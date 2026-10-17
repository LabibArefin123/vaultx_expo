
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const rowStyles = StyleSheet.create({
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  settingIcon: {
    width: 41,
    height: 41,
    borderRadius: 13,
    backgroundColor: "#EEF1FA",
    alignItems: "center",
    justifyContent: "center",
  },
  settingInfo: {
    flex: 1,
    minWidth: 0,
    marginLeft: 11,
    marginRight: 8,
  },
  settingTitle: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "700",
  },
  settingDescription: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
  },
});
