import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { formStyles as styles } from "@/styles/credentials/credential_form.styles";

type CredentialFormFieldsProps = {
  title: string;
  username: string;
  password: string;
  website: string;
  notes: string;
  onTitleChange: (value: string) => void;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onWebsiteChange: (value: string) => void;
  onNotesChange: (value: string) => void;
};

export function CredentialFormFields({
  title,
  username,
  password,
  website,
  notes,
  onTitleChange,
  onUsernameChange,
  onPasswordChange,
  onWebsiteChange,
  onNotesChange,
}: CredentialFormFieldsProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <View style={styles.field}>
        <Text style={styles.label}>Credential title *</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Google Account"
          placeholderTextColor={COLORS.muted}
          value={title}
          onChangeText={onTitleChange}
          autoCapitalize="words"
          returnKeyType="next"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Username / Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter username or email"
          placeholderTextColor={COLORS.muted}
          value={username}
          onChangeText={onUsernameChange}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Password *</Text>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password"
            placeholderTextColor={COLORS.muted}
            value={password}
            onChangeText={onPasswordChange}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Pressable
            onPress={() => setShowPassword((value) => !value)}
            style={styles.passwordToggle}
            accessibilityRole="button"
            accessibilityLabel={
              showPassword ? "Hide password" : "Show password"
            }
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={21}
              color={COLORS.secondary}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Website</Text>

        <TextInput
          style={styles.input}
          placeholder="https://example.com"
          placeholderTextColor={COLORS.muted}
          value={website}
          onChangeText={onWebsiteChange}
          autoCapitalize="none"
          keyboardType="url"
          autoCorrect={false}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Notes</Text>

        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Additional information..."
          placeholderTextColor={COLORS.muted}
          value={notes}
          onChangeText={onNotesChange}
          multiline
          textAlignVertical="top"
        />
      </View>
    </>
  );
}
