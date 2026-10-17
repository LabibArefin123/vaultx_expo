import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

type CredentialHeroProps = {
  title: string;
  category: string;
  icon: string;
  color: string;
};

export function CredentialHero({
  title,
  category,
  icon,
  color,
}: CredentialHeroProps) {
  return (
    <View style={styles.credentialHero}>
      <View style={[styles.credentialIcon, { backgroundColor: `${color}15` }]}>
        <Ionicons
          name={icon as keyof typeof Ionicons.glyphMap}
          size={30}
          color={color}
        />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
}
