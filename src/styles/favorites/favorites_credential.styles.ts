
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const credentialStyles = StyleSheet.create({
  sectionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 14,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "800",
  },
  username: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  website: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 3,
  },
});
