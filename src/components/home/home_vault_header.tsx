import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { credentialStyles } from "@/styles/home/home_credential.styles";

export default function HomeVaultHeader() {
  const router = useRouter();

  return (
    <View style={credentialStyles.sectionHeader}>
      <Text style={credentialStyles.sectionTitle}>Your Vault</Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Pressable onPress={() => router.push("/explore")}>
          <Text style={credentialStyles.viewAll}>View all</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/add-credential")}>
          <Ionicons name="add-circle" size={27} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  );
}
