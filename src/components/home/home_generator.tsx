import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { generatorStyles } from "@/styles/home/home_generator.styles";

export default function HomeGenerator() {
  const router = useRouter();

  return (
    <Pressable
      style={generatorStyles.generatorButton}
      onPress={() => router.push("/settings")}
    >
      <View style={generatorStyles.generatorIcon}>
        <Ionicons name="shuffle-outline" size={22} color={COLORS.gold} />
      </View>

      <View style={generatorStyles.generatorInfo}>
        <Text style={generatorStyles.generatorTitle}>Password Generator</Text>

        <Text style={generatorStyles.generatorDescription}>
          Create strong and unique passwords
        </Text>
      </View>

      <Ionicons name="arrow-forward" size={19} color={COLORS.primary} />
    </Pressable>
  );
}
