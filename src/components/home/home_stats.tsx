import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { DEMO_CREDENTIALS } from "@/constants/vault";
import { statsStyles } from "@/styles/home/home_stats.styles";

export default function HomeStats() {
  const favoriteCount = DEMO_CREDENTIALS.filter((item) => item.favorite).length;

  const categoriesCount = 5;

  return (
    <View style={statsStyles.statsRow}>
      <View style={statsStyles.statCard}>
        <View style={[statsStyles.statIcon, { backgroundColor: "#E9EEFF" }]}>
          <Ionicons name="key-outline" size={20} color="#5269C8" />
        </View>

        <Text style={statsStyles.statNumber}>{DEMO_CREDENTIALS.length}</Text>

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
