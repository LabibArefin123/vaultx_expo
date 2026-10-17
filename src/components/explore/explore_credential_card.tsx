import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import type { Credential } from "@/types/credential.types";

import { credentialStyles } from "@/styles/explore/explore_credential.styles";

type ExploreCredentialCardProps = {
  item: Credential;
};

export default function ExploreCredentialCard({
  item,
}: ExploreCredentialCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/credential/[id]",
      params: {
        id: String(item.id),
      },
    });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={credentialStyles.credentialCard}
      accessibilityRole="button"
      accessibilityLabel={`Open ${item.title}`}
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
        <View style={credentialStyles.nameRow}>
          <Text style={credentialStyles.credentialTitle} numberOfLines={1}>
            {item.title}
          </Text>

          {item.favorite && (
            <Ionicons name="heart" size={14} color={COLORS.danger} />
          )}
        </View>

        <Text style={credentialStyles.username} numberOfLines={1}>
          {item.username || "No username"}
        </Text>

        <Text style={credentialStyles.website} numberOfLines={1}>
          {item.website || "No website"}
        </Text>
      </View>

      <View style={credentialStyles.trailing}>
        <Text style={credentialStyles.categoryLabel}>{item.category}</Text>

        <Ionicons name="chevron-forward" size={17} color={COLORS.muted} />
      </View>
    </Pressable>
  );
}
