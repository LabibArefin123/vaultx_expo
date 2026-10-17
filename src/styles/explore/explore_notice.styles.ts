
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const noticeStyles = StyleSheet.create({
  notice: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    backgroundColor: COLORS.goldLight,
    padding: 13,
    borderRadius: 13,
    marginTop: 15,
  },
  noticeText: {
    flex: 1,
    color: COLORS.secondary,
    fontSize: 10,
    lineHeight: 16,
  },
});
