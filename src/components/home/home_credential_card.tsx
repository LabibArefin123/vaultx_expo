import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS, DEMO_CREDENTIALS } from "@/constants/vault";

import { credentialStyles } from "@/styles/home/home_credential.styles";

type Credential = (typeof DEMO_CREDENTIALS)[number];

type HomeCredentialCardProps = {
  item: Credential;
};

export default function HomeCredentialCard({ item }: HomeCredentialCardProps) {
  return (
    <View style={credentialStyles.credentialCard}>
      <View
        style={[
          credentialStyles.credentialIcon,
          { backgroundColor: `${item.color}15` },
        ]}
      >
        <Ionicons
          name={item.icon as keyof typeof Ionicons.glyphMap}
          size={23}
          color={item.color}
        />
      </View>

      <View style={credentialStyles.credentialInfo}>
        <Text style={credentialStyles.credentialTitle}>{item.title}</Text>

        <Text style={credentialStyles.credentialUsername}>{item.username}</Text>
      </View>

      {item.favorite && (
        <Ionicons name="heart" size={17} color={COLORS.danger} />
      )}

      <Ionicons
        name="chevron-forward"
        size={18}
        color={COLORS.muted}
        style={credentialStyles.chevron}
      />
    </View>
  );
}
