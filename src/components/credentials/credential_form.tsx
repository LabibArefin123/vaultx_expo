import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import { COLORS } from "@/constants/vault";
import { useCredentials } from "@/hooks/use_credentials";

import type { Credential, CredentialInput } from "@/types/credential.types";

import {
  CredentialFormFields,
  CredentialCategoryPicker,
  CredentialFavoriteToggle,
  CredentialSaveButton,
  selectableCategories,
  type SelectableCategory,
} from "@/components/credentials/form_parts";

import { formStyles as styles } from "@/styles/credentials/credential_form.styles";

type CredentialFormProps = {
  mode: "create" | "edit";
  credential?: Credential;
};

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
    credential?.category ?? selectableCategories[0]!,
  );

  const [favorite, setFavorite] = useState(credential?.favorite ?? false);

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
      <CredentialFormFields
        title={title}
        username={username}
        password={password}
        website={website}
        notes={notes}
        onTitleChange={setTitle}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onWebsiteChange={setWebsite}
        onNotesChange={setNotes}
      />

      <CredentialCategoryPicker
        category={category}
        onCategoryChange={setCategory}
      />

      <CredentialFavoriteToggle
        favorite={favorite}
        onFavoriteChange={setFavorite}
      />

      <CredentialSaveButton mode={mode} saving={saving} onPress={handleSave} />
    </ScrollView>
  );
}
