import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { CATEGORIES, COLORS, type CredentialCategory } from "@/constants/vault";

import { useCredentials } from "@/hooks/use_credentials";

import type { Credential, CredentialInput } from "@/types/credential.types";

import { formStyles as styles } from "@/styles/credentials/credential_form.styles";

type CredentialFormProps = {
  mode: "create" | "edit";
  credential?: Credential;
};

type SelectableCategory = Exclude<CredentialCategory, "All">;

const categories = CATEGORIES.filter(
  (category): category is SelectableCategory => category !== "All",
);

export default function CredentialForm({
  mode,
  credential,
}: CredentialFormProps) {
  const router = useRouter();

  const { addCredential, updateCredential } = useCredentials();

  const [title, setTitle] = useState(credential?.title ?? "");
  const [username, setUsername] = useState(credential?.username ?? "");
  const [password, setPassword] = useState(credential?.password ?? "");
  const [website, setWebsite] = useState(credential?.website ?? "");
  const [notes, setNotes] = useState(credential?.notes ?? "");

  const [category, setCategory] = useState<SelectableCategory>(
    credential?.category ?? categories[0]!,
  );

  const [favorite, setFavorite] = useState(credential?.favorite ?? false);

  const [showPassword, setShowPassword] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Missing title", "Please enter a credential title.");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Missing password", "Please enter a password.");
      return;
    }

    if (!category) {
      Alert.alert("Missing category", "Please select a category.");
      return;
    }

    const data: CredentialInput = {
      title: title.trim(),
      username: username.trim(),
      password,
      website: website.trim(),
      category,
      notes: notes.trim(),
      favorite,
      icon: credential?.icon ?? "key-outline",
      color: credential?.color ?? COLORS.primary,
    };

    try {
      setSaving(true);

      const saved =
        mode === "edit" && credential
          ? await updateCredential(credential.id, data)
          : await addCredential(data);

      router.replace({
        pathname: "/credential/[id]",
        params: {
          id: String(saved.id),
        },
      });
    } catch (error) {
      console.error("Credential save error:", error);

      Alert.alert(
        "Unable to save",
        "Something went wrong while saving your credential. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.content}
    >
      <View style={styles.field}>
        <Text style={styles.label}>Credential title *</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Google Account"
          placeholderTextColor={COLORS.muted}
          value={title}
          onChangeText={setTitle}
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
          onChangeText={setUsername}
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
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Pressable
            onPress={() => setShowPassword((value) => !value)}
            style={styles.passwordToggle}
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
          onChangeText={setWebsite}
          autoCapitalize="none"
          keyboardType="url"
          autoCorrect={false}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Category</Text>

        <View style={styles.categoryList}>
          {categories.map((item) => {
            const active = category === item;

            return (
              <Pressable
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.categoryButton,
                  active && styles.categoryButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    active && styles.categoryTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Notes</Text>

        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Additional information..."
          placeholderTextColor={COLORS.muted}
          value={notes}
          onChangeText={setNotes}
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.favoriteRow}>
        <View>
          <Text style={styles.favoriteTitle}>Add to favorites</Text>

          <Text style={styles.favoriteDescription}>
            Keep this credential easily accessible.
          </Text>
        </View>

        <Switch
          value={favorite}
          onValueChange={setFavorite}
          trackColor={{
            false: COLORS.border,
            true: COLORS.gold,
          }}
          thumbColor="#FFFFFF"
        />
      </View>

      <Pressable
        style={[styles.saveButton, saving && styles.saveButtonDisabled]}
        onPress={handleSave}
        disabled={saving}
      >
        {saving ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <>
            <Ionicons
              name="checkmark-circle-outline"
              size={19}
              color="#FFFFFF"
            />

            <Text style={styles.saveButtonText}>
              {mode === "edit" ? "Save Changes" : "Save Credential"}
            </Text>
          </>
        )}
      </Pressable>
    </ScrollView>
  );
}
