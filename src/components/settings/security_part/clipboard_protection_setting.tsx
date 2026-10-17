import { SettingRow } from "@/components/settings/setting-row";

type ClipboardProtectionSettingProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function ClipboardProtectionSetting({
  value,
  onValueChange,
}: ClipboardProtectionSettingProps) {
  return (
    <SettingRow
      icon="copy-outline"
      title="Clipboard Protection"
      description="Manage copied password behavior"
      value={value}
      onValueChange={onValueChange}
    />
  );
}
