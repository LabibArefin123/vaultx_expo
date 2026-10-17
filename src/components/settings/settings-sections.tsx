import { View, Text } from "react-native";

import {
  SettingAction,
  SettingRow,
  SettingsSeparator,
} from "@/components/settings/setting-row";
import { COLORS } from "@/constants/vault";
import { styles } from "@/styles/settings/setting_components.styles";

type SettingsSectionsProps = {
  biometric: boolean;
  autoLock: boolean;
  clipboard: boolean;
  onBiometricChange: (value: boolean) => void;
  onAutoLockChange: (value: boolean) => void;
  onClipboardChange: (value: boolean) => void;
  onPreview: (feature: string) => void;
};

function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.settingsCard}>{children}</View>
    </>
  );
}

export default function SettingsSections({
  biometric,
  autoLock,
  clipboard,
  onBiometricChange,
  onAutoLockChange,
  onClipboardChange,
  onPreview,
}: SettingsSectionsProps) {
  return (
    <>
      <SettingsSection title="Security">
        <SettingRow
          icon="finger-print-outline"
          title="Biometric Authentication"
          description="Unlock using fingerprint or Face ID"
          value={biometric}
          onValueChange={onBiometricChange}
        />

        <SettingsSeparator />

        <SettingRow
          icon="lock-closed-outline"
          title="Automatic Lock"
          description="Lock your vault when inactive"
          value={autoLock}
          onValueChange={onAutoLockChange}
        />

        <SettingsSeparator />

        <SettingRow
          icon="copy-outline"
          title="Clipboard Protection"
          description="Manage copied password behavior"
          value={clipboard}
          onValueChange={onClipboardChange}
        />
      </SettingsSection>

      <SettingsSection title="Password Tools">
        <SettingAction
          icon="shuffle-outline"
          title="Password Generator"
          description="Generate strong passwords"
          onPress={() => onPreview("Password generator")}
        />

        <SettingsSeparator />

        <SettingAction
          icon="analytics-outline"
          title="Security Audit"
          description="Review your password security"
          onPress={() => onPreview("Security audit")}
        />
      </SettingsSection>

      <SettingsSection title="About">
        <SettingAction
          icon="shield-outline"
          title="Privacy Policy"
          description="Learn how your data is protected"
          onPress={() => onPreview("Privacy policy")}
        />

        <SettingsSeparator />

        <SettingAction
          icon="information-circle-outline"
          title="About VaultX"
          description="Version 1.0.0"
          onPress={() => onPreview("About VaultX")}
        />
      </SettingsSection>
    </>
  );
}
