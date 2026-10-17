import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { toolStyles as styles } from "@/styles/tools/tool_screens.styles";

type ToolScreenHeaderProps = {
  title: string;
  subtitle: string;
};

export function ToolScreenHeader({ title, subtitle }: ToolScreenHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Ionicons name="arrow-back" size={21} color="#242424" />
      </Pressable>

      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
