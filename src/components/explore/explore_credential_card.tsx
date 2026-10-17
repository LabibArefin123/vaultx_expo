import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS, DEMO_CREDENTIALS } from "@/constants/vault";

import { credentialStyles } from "@/styles/explore/explore_credential.styles";

type Credential = (typeof DEMO_CREDENTIALS)[number];

type ExploreCredentialCardProps = {
  item: Credential;
};

export default function ExploreCredentialCard({
  item,
}: ExploreCredentialCardProps) {
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
        <View style={credentialStyles.nameRow}>
          <Text style={credentialStyles.credentialTitle}>{item.title}</Text>

          {item.favorite && (
            <Ionicons name="heart" size={14} color={COLORS.danger} />
          )}
        </View>

        <Text style={credentialStyles.username}>{item.username}</Text>

        <Text style={credentialStyles.website}>{item.website}</Text>
      </View>

      <View style={credentialStyles.trailing}>
        <Text style={credentialStyles.categoryLabel}>{item.category}</Text>

        <Ionicons name="chevron-forward" size={17} color={COLORS.muted} />
      </View>
    </View>
  );
}
