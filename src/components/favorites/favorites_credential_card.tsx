import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS, DEMO_CREDENTIALS } from "@/constants/vault";
import { credentialStyles } from "@/styles/favorites/favorites_credential.styles";

type Credential = (typeof DEMO_CREDENTIALS)[number];

type FavoritesCredentialCardProps = {
  item: Credential;
};

export default function FavoritesCredentialCard({
  item,
}: FavoritesCredentialCardProps) {
  return (
    <View style={credentialStyles.card}>
      <View
        style={[credentialStyles.icon, { backgroundColor: `${item.color}15` }]}
      >
        <Ionicons
          name={item.icon as keyof typeof Ionicons.glyphMap}
          size={23}
          color={item.color}
        />
      </View>

      <View style={credentialStyles.info}>
        <Text style={credentialStyles.title}>{item.title}</Text>
        <Text style={credentialStyles.username}>{item.username}</Text>
        <Text style={credentialStyles.website}>{item.website}</Text>
      </View>

      <Ionicons name="heart" size={19} color={COLORS.danger} />
    </View>
  );
}
