import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import type { Credential } from "@/types/credential.types";

import { credentialStyles } from "@/styles/home/home_credential.styles";

type HomeCredentialCardProps = {
  item: Credential;
};

export default function HomeCredentialCard({ item }: HomeCredentialCardProps) {
  const router = useRouter();

  return (
    <Pressable
      style={credentialStyles.credentialCard}
      onPress={() =>
        router.push({
          pathname: "/credential/[id]",
          params: { id: String(item.id) },
        })
      }
    >
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
    </Pressable>
  );
}
