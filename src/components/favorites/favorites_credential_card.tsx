import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { useCredentials } from "@/hooks/use_credentials";

import type { Credential } from "@/types/credential.types";

import { credentialStyles } from "@/styles/favorites/favorites_credential.styles";

type FavoritesCredentialCardProps = {
  item: Credential;
};

export default function FavoritesCredentialCard({
  item,
}: FavoritesCredentialCardProps) {
  const router = useRouter();
  const { updateCredential } = useCredentials();

  const handleOpen = () => {
    router.push({
      pathname: "/credential/[id]",
      params: {
        id: String(item.id),
      },
    });
  };

  const handleRemoveFavorite = async () => {
    try {
      await updateCredential(item.id, {
        title: item.title,
        username: item.username,
        password: item.password,
        website: item.website,
        category: item.category,
        notes: item.notes ?? "",
        favorite: false,
        icon: item.icon,
        color: item.color,
      });
    } catch (error) {
      console.error("Remove favorite error:", error);

      Alert.alert(
        "Unable to update",
        "Could not remove this credential from favorites.",
      );
    }
  };

  return (
    <Pressable
      style={credentialStyles.card}
      onPress={handleOpen}
      accessibilityRole="button"
      accessibilityLabel={`Open ${item.title}`}
    >
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
        <Text style={credentialStyles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={credentialStyles.username} numberOfLines={1}>
          {item.username || "No username"}
        </Text>

        <Text style={credentialStyles.website} numberOfLines={1}>
          {item.website || "No website"}
        </Text>
      </View>

      <Pressable
        onPress={(event) => {
          event.stopPropagation();
          handleRemoveFavorite();
        }}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel={`Remove ${item.title} from favorites`}
      >
        <Ionicons name="heart" size={19} color={COLORS.danger} />
      </Pressable>
    </Pressable>
  );
}
