import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  SettingsHeader,
  SettingsProfile,
  SettingsSections,
  SettingsFooter,
} from "@/components/settings";

import { mainStyles } from "@/styles/settings/main_settings.styles";

export default function SettingsScreen() {
  const [biometric, setBiometric] = useState(false);
  const [autoLock, setAutoLock] = useState(true);
  const [clipboard, setClipboard] = useState(true);

  const previewAlert = (feature: string) => {
    Alert.alert(
      "Coming soon",
      `${feature} will be connected to the VaultX security system in a future implementation.`,
    );
  };

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        <SettingsHeader />

        <SettingsProfile />

        <SettingsSections
          biometric={biometric}
          autoLock={autoLock}
          clipboard={clipboard}
          onBiometricChange={(value) => {
            setBiometric(value);
            previewAlert("Biometric authentication");
          }}
          onAutoLockChange={(value) => {
            setAutoLock(value);
            previewAlert("Automatic lock");
          }}
          onClipboardChange={(value) => {
            setClipboard(value);
            previewAlert("Clipboard protection");
          }}
          onPreview={previewAlert}
        />

        <SettingsFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
