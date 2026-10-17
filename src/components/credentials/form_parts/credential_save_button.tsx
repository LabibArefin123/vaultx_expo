import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Pressable, Text } from "react-native";

import { formStyles as styles } from "@/styles/credentials/credential_form.styles";

type CredentialSaveButtonProps = {
  mode: "create" | "edit";
  saving: boolean;
  onPress: () => void;
};

export function CredentialSaveButton({
  mode,
  saving,
  onPress,
}: CredentialSaveButtonProps) {
  return (
    <Pressable
      style={[styles.saveButton, saving && styles.saveButtonDisabled]}
      onPress={onPress}
      disabled={saving}
      accessibilityRole="button"
    >
      {saving ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <>
          <Ionicons name="checkmark-circle-outline" size={19} color="#FFFFFF" />

          <Text style={styles.saveButtonText}>
            {mode === "edit" ? "Save Changes" : "Save Credential"}
          </Text>
        </>
      )}
    </Pressable>
  );
}
