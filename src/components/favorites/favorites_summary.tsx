import { Text, View } from "react-native";

import { summaryStyles } from "@/styles/favorites/favorites_summary.styles";

type FavoritesSummaryProps = {
  count: number;
};

export default function FavoritesSummary({ count }: FavoritesSummaryProps) {
  return (
    <View style={summaryStyles.container}>
      <Text style={summaryStyles.number}>{count}</Text>
      <Text style={summaryStyles.label}>Favorite credentials</Text>
      <Text style={summaryStyles.description}>
        Keep your frequently used accounts close.
      </Text>
    </View>
  );
}
