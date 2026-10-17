
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const credentialStyles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
    marginTop: 3,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "800",
  },
  viewAll: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: "700",
  },
  credentialCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  credentialIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  credentialInfo: {
    flex: 1,
    marginLeft: 12,
  },
  credentialTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "700",
  },
  credentialUsername: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  chevron: {
    marginLeft: 9,
  },
  emptyState: {
    alignItems: "center",
    padding: 25,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
  },
  emptyText: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 9,
  },
});
