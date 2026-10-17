import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { screenStyles as styles } from "@/styles/credentials/credential_details.styles";

type CredentialDetailsCardProps = {
  username: string;
  password: string;
  website: string;
  notes: string;
  showPassword: boolean;
  onTogglePassword: () => void;
  onCopy: (value: string) => void;
};

type DetailRowProps = {
  label: string;
  value: string;
  onCopy: () => void;
};

function DetailRow({ label, value, onCopy }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailInfo}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <Pressable onPress={onCopy} style={styles.actionButton}>
        <Ionicons name="copy-outline" size={18} color={COLORS.secondary} />
      </Pressable>
    </View>
  );
}

export function CredentialDetailsCard({
  username,
  password,
  website,
  notes,
  showPassword,
  onTogglePassword,
  onCopy,
}: CredentialDetailsCardProps) {
  return (
    <View style={styles.detailsCard}>
      <DetailRow
        label="Username / Email"
        value={username || "Not provided"}
        onCopy={() => onCopy(username)}
      />

      <View style={styles.separator} />

      <View style={styles.detailRow}>
        <View style={styles.detailInfo}>
          <Text style={styles.label}>Password</Text>
          <Text style={styles.value}>
            {showPassword ? password : "••••••••••••"}
          </Text>
        </View>

        <View style={styles.rowActions}>
          <Pressable onPress={onTogglePassword} style={styles.actionButton}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={19}
              color={COLORS.secondary}
            />
          </Pressable>

          <Pressable
            onPress={() => onCopy(password)}
            style={styles.actionButton}
          >
            <Ionicons name="copy-outline" size={18} color={COLORS.secondary} />
          </Pressable>
        </View>
      </View>

      <View style={styles.separator} />

      <DetailRow
        label="Website"
        value={website || "Not provided"}
        onCopy={() => onCopy(website)}
      />

      <View style={styles.separator} />

      <View style={styles.detailRow}>
        <View style={styles.detailInfo}>
          <Text style={styles.label}>Notes</Text>
          <Text style={styles.value}>{notes || "No additional notes"}</Text>
        </View>
      </View>
    </View>
  );
}
