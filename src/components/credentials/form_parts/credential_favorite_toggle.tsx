import { Switch, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { formStyles as styles } from "@/styles/credentials/credential_form.styles";

type CredentialFavoriteToggleProps = {
  favorite: boolean;
  onFavoriteChange: (value: boolean) => void;
};

export function CredentialFavoriteToggle({
  favorite,
  onFavoriteChange,
}: CredentialFavoriteToggleProps) {
  return (
    <View style={styles.favoriteRow}>
      <View>
        <Text style={styles.favoriteTitle}>Add to favorites</Text>

        <Text style={styles.favoriteDescription}>
          Keep this credential easily accessible.
        </Text>
      </View>

      <Switch
        value={favorite}
        onValueChange={onFavoriteChange}
        trackColor={{
          false: COLORS.border,
          true: COLORS.gold,
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}
