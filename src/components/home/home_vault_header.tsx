import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { credentialStyles } from "@/styles/home/home_credential.styles";

export default function HomeVaultHeader() {
  const router = useRouter();

  return (
    <View style={credentialStyles.sectionHeader}>
      <Text style={credentialStyles.sectionTitle}>Your Vault</Text>

      <Pressable onPress={() => router.push("/explore")}>
        <Text style={credentialStyles.viewAll}>View all</Text>
      </Pressable>
    </View>
  );
}
