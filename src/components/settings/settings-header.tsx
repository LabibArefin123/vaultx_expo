import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";

import { headerStyles } from "@/styles/settings/header_setting.styles";
import { footerStyles } from "@/styles/settings/settings-footer.styles";

export function SettingsHeader() {
  return (
    <View style={headerStyles.header}>
      <View>
        <Text style={headerStyles.eyebrow}>PREFERENCES</Text>

        <Text style={headerStyles.title}>Settings</Text>

        <Text style={headerStyles.subtitle}>
          Customize your VaultX experience.
        </Text>
      </View>

      <View style={headerStyles.headerIcon}>
        <Ionicons name="settings-outline" size={23} color={COLORS.gold} />
      </View>
    </View>
  );
}

export function SettingsFooter() {
  return (
    <View>
      <Text style={footerStyles.brand}>VaultX</Text>

      <Text style={footerStyles.tagline}>Secure. Organize. Protect.</Text>

      <Text style={footerStyles.footer}>Made with care · Version 1.0.0</Text>
    </View>
  );
}
