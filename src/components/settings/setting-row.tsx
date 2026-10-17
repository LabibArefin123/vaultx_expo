import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { rowStyles } from "@/styles/settings/settings-row.styles";

type SettingRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

type SettingActionProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
};

export function SettingRow({
  icon,
  title,
  description,
  value,
  onValueChange,
}: SettingRowProps) {
  return (
    <View style={rowStyles.settingRow}>
      <View style={rowStyles.settingIcon}>
        <Ionicons name={icon} size={20} color={COLORS.primary} />
      </View>

      <View style={rowStyles.settingInfo}>
        <Text style={rowStyles.settingTitle}>{title}</Text>
        <Text style={rowStyles.settingDescription}>{description}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#D9DEE8",
          true: COLORS.primaryLight,
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

export function SettingAction({
  icon,
  title,
  description,
  onPress,
}: SettingActionProps) {
  return (
    <Pressable
      style={rowStyles.actionRow}
      onPress={onPress}
      accessibilityRole="button"
    >
      <View style={rowStyles.settingIcon}>
        <Ionicons name={icon} size={20} color={COLORS.primary} />
      </View>

      <View style={rowStyles.settingInfo}>
        <Text style={rowStyles.settingTitle}>{title}</Text>
        <Text style={rowStyles.settingDescription}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
    </Pressable>
  );
}

export function SettingsSeparator() {
  return <View style={rowStyles.separator} />;
}
