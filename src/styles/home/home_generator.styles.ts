
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/vault";

export const generatorStyles = StyleSheet.create({
  generatorButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.goldLight,
    borderRadius: 17,
    padding: 15,
    marginTop: 17,
  },
  generatorIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  generatorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  generatorTitle: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: "800",
  },
  generatorDescription: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
});
