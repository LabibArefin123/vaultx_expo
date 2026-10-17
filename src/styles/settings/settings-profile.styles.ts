import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const profileStyles = StyleSheet.create({
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    padding: 17,
    marginBottom: 27,
  },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: "#FFFFFF20",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 13,
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  profileEmail: {
    color: "#C6CEE0",
    fontSize: 11,
    marginTop: 5,
  },
  profileBadge: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});