import { SettingRow } from "@/components/settings/setting-row";

type BiometricSettingProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function BiometricSetting({
  value,
  onValueChange,
}: BiometricSettingProps) {
  return (
    <SettingRow
      icon="finger-print-outline"
      title="Biometric Authentication"
      description="Unlock using fingerprint or Face ID"
      value={value}
      onValueChange={onValueChange}
    />
  );
}
