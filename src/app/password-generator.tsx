import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Crypto from "expo-crypto";
import { useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ToolScreenHeader } from "@/components/tools/tool-screen-header";
import { toolStyles as styles } from "@/styles/tools/tool_screens.styles";

const CHARACTERS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{};:,.?",
};

type CharacterOption = keyof typeof CHARACTERS;

export default function PasswordGeneratorScreen() {
  const [length, setLength] = useState(20);
  const [options, setOptions] = useState<Record<CharacterOption, boolean>>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState("");

  const selectedCharacters = Object.entries(options)
    .filter(([, enabled]) => enabled)
    .map(([key]) => CHARACTERS[key as CharacterOption])
    .join("");

  const toggleOption = (key: CharacterOption) => {
    setOptions((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const generatePassword = async () => {
    if (!selectedCharacters) {
      Alert.alert("Select an option", "Choose at least one character type.");
      return;
    }

    try {
      const randomBytes = await Crypto.getRandomBytesAsync(length);

      const generated = Array.from(randomBytes)
        .map((byte) => selectedCharacters[byte % selectedCharacters.length])
        .join("");

      setPassword(generated);
    } catch {
      Alert.alert("Generation failed", "Please try again.");
    }
  };

  const copyPassword = async () => {
    if (!password) return;

    await Clipboard.setStringAsync(password);
    Alert.alert("Copied", "Password copied to clipboard.");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ToolScreenHeader
          title="Password Generator"
          subtitle="Create a strong, random password"
        />

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Generated password</Text>

          <View style={styles.passwordBox}>
            <Text selectable style={styles.passwordText}>
              {password || "Your password will appear here"}
            </Text>
          </View>

          <Pressable
            onPress={copyPassword}
            disabled={!password}
            style={[
              styles.secondaryButton,
              { marginBottom: 14, opacity: password ? 1 : 0.5 },
            ]}
          >
            <Ionicons name="copy-outline" size={17} color="#80612E" />
            <Text style={styles.secondaryButtonText}>Copy password</Text>
          </Pressable>

          <Pressable onPress={generatePassword} style={styles.primaryButton}>
            <Ionicons name="sparkles-outline" size={18} color="#FFFFFF" />
            <Text style={styles.primaryButtonText}>Generate password</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Password length</Text>
          <Text style={styles.description}>
            Choose how many characters your password should contain.
          </Text>

          <View style={[styles.row, { marginTop: 18 }]}>
            <Pressable
              onPress={() => setLength((value) => Math.max(8, value - 1))}
              style={styles.stepButton}
            >
              <Ionicons name="remove" size={20} color="#80612E" />
            </Pressable>

            <Text style={styles.stepValue}>{length}</Text>

            <Pressable
              onPress={() => setLength((value) => Math.min(64, value + 1))}
              style={styles.stepButton}
            >
              <Ionicons name="add" size={20} color="#80612E" />
            </Pressable>
          </View>

          <Text
            style={[styles.mutedText, { textAlign: "center", marginTop: 10 }]}
          >
            Minimum 8 · Maximum 64 characters
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Character types</Text>
          <Text style={styles.description}>
            Select which characters can be included.
          </Text>

          {(
            [
              ["uppercase", "Uppercase letters (A–Z)"],
              ["lowercase", "Lowercase letters (a–z)"],
              ["numbers", "Numbers (0–9)"],
              ["symbols", "Special symbols (!@#$)"],
            ] as [CharacterOption, string][]
          ).map(([key, label]) => (
            <Pressable
              key={key}
              onPress={() => toggleOption(key)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{label}</Text>

              <View
                style={[
                  styles.optionCheck,
                  options[key] && styles.optionCheckActive,
                ]}
              >
                {options[key] && (
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
