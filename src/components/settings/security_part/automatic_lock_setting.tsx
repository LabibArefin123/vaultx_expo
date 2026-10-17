import { SettingRow } from "@/components/settings/setting-row";

type AutomaticLockSettingProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function AutomaticLockSetting({
  value,
  onValueChange,
}: AutomaticLockSettingProps) {
  return (
    <SettingRow
      icon="lock-closed-outline"
      title="Automatic Lock"
      description="Lock your vault when inactive"
      value={value}
      onValueChange={onValueChange}
    />
  );
}
