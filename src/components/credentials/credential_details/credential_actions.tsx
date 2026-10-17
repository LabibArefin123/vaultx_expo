import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

type CredentialActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

export function CredentialActions({
  onEdit,
  onDelete,
}: CredentialActionsProps) {
  return (
    <View>
      <Pressable style={styles.editButton} onPress={onEdit}>
        <Ionicons name="create-outline" size={19} color="#FFFFFF" />
        <Text style={styles.buttonText}>Edit Credential</Text>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={onDelete}>
        <Ionicons name="trash-outline" size={19} color={COLORS.danger} />
        <Text style={styles.deleteText}>Delete Credential</Text>
      </Pressable>
    </View>
  );
}
