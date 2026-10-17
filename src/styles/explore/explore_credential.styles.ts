
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const credentialStyles = StyleSheet.create({
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
  },
  count: {
    color: COLORS.secondary,
    fontSize: 11,
  },
  credentialCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 13,
    marginBottom: 10,
  },
  credentialIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  credentialInfo: {
    flex: 1,
    marginLeft: 12,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  credentialTitle: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "800",
  },
  username: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 4,
  },
  website: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 3,
  },
  trailing: {
    alignItems: "flex-end",
    gap: 10,
  },
  categoryLabel: {
    color: COLORS.primaryLight,
    backgroundColor: "#EEF1FA",
    fontSize: 9,
    fontWeight: "700",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
