import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import type { Credential } from "@/types/credential.types";

import { statsStyles } from "@/styles/home/home_stats.styles";

type HomeStatsProps = {
  credentials: Credential[];
};

export default function HomeStats({ credentials }: HomeStatsProps) {
  const favoriteCount = credentials.filter((item) => item.favorite).length;

  const categoriesCount = new Set(credentials.map((item) => item.category))
    .size;

  return (
    <View style={statsStyles.statsRow}>
      <View style={statsStyles.statCard}>
        <View style={[statsStyles.statIcon, { backgroundColor: "#E9EEFF" }]}>
          <Ionicons name="key-outline" size={20} color="#5269C8" />
        </View>

        <Text style={statsStyles.statNumber}>{credentials.length}</Text>
        <Text style={statsStyles.statLabel}>Saved items</Text>
      </View>

      <View style={statsStyles.statCard}>
        <View style={[statsStyles.statIcon, { backgroundColor: "#FCEDEB" }]}>
          <Ionicons name="heart-outline" size={20} color="#E36B70" />
        </View>

        <Text style={statsStyles.statNumber}>{favoriteCount}</Text>
        <Text style={statsStyles.statLabel}>Favorites</Text>
      </View>

      <View style={statsStyles.statCard}>
        <View style={[statsStyles.statIcon, { backgroundColor: "#E5F5EE" }]}>
          <Ionicons name="folder-outline" size={20} color="#15966A" />
        </View>

        <Text style={statsStyles.statNumber}>{categoriesCount}</Text>
        <Text style={statsStyles.statLabel}>Categories</Text>
      </View>
    </View>
  );
}
