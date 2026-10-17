import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { COLORS } from "@/constants/vault";
import { useProfile } from "@/hooks/use_profile";

import { profileStyles as styles } from "@/styles/settings/settings_profile.styles";

export function SettingsProfile() {
  const { profile, loading, saving, updateProfile } = useProfile();

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openEditor = () => {
    setName(profile?.name ?? "");
    setEmail(profile?.email ?? "");
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Name required", "Please enter your profile name.");
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    try {
      await updateProfile({
        name,
        email,
      });

      setModalVisible(false);
      Alert.alert("Profile updated", "Your profile has been saved.");
    } catch {
      Alert.alert(
        "Unable to update",
        "Something went wrong while saving your profile.",
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.gold} />
      </View>
    );
  }

  return (
    <>
      <Pressable
        style={styles.profileCard}
        onPress={openEditor}
        accessibilityRole="button"
        accessibilityLabel="Edit your profile"
      >
        <View style={styles.avatar}>
          <Ionicons name="person" size={26} color={COLORS.gold} />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileName} numberOfLines={1}>
            {profile?.name || "VaultX User"}
          </Text>

          <Text style={styles.profileEmail} numberOfLines={1}>
            {profile?.email || "Your private password vault"}
          </Text>
        </View>

        <View style={styles.profileBadge}>
          <Ionicons name="shield-checkmark" size={16} color={COLORS.success} />
        </View>

        <View style={styles.editButton}>
          <Ionicons name="create-outline" size={18} color={COLORS.secondary} />
        </View>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Edit Profile</Text>

              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
                disabled={saving}
              >
                <Ionicons name="close" size={19} color={COLORS.secondary} />
              </Pressable>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Full name</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor={COLORS.muted}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                returnKeyType="next"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Email address</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={COLORS.muted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
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

                  <Text style={styles.saveButtonText}>Save Profile</Text>
                </>
              )}
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}
