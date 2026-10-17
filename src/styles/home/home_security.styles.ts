
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const securityStyles = StyleSheet.create({
  securityCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 23,
    padding: 21,
    marginBottom: 27,
  },
  securityTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  securityIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF18",
    alignItems: "center",
    justifyContent: "center",
  },
  securityBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#FFFFFF18",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#5DDAA3",
  },
  securityBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
  securityTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
    marginTop: 23,
  },
  securityDescription: {
    color: "#D4DBED",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },
  securityBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#FFFFFF25",
    marginTop: 21,
    paddingTop: 15,
  },
  securityBottomText: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: "700",
  },
});
