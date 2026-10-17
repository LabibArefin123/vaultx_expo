import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { headerStyles } from "@/styles/home/home_header.styles";

export default function HomeHeader() {
  const router = useRouter();

  return (
    <View style={headerStyles.header}>
      <View>
        <Text style={headerStyles.greeting}>Welcome back</Text>
        <Text style={headerStyles.brand}>VaultX</Text>
      </View>

      <Pressable
        style={headerStyles.profileButton}
        onPress={() => router.push("/settings")}
      >
        <Ionicons name="person-outline" size={21} color={COLORS.primary} />
      </Pressable>
    </View>
  );
}
