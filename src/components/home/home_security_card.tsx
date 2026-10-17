import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { securityStyles } from "@/styles/home/home_security.styles";

export default function HomeSecurityCard() {
  return (
    <View style={securityStyles.securityCard}>
      <View style={securityStyles.securityTop}>
        <View style={securityStyles.securityIcon}>
          <Ionicons name="shield-checkmark" size={25} color={COLORS.gold} />
        </View>

        <View style={securityStyles.securityBadge}>
          <View style={securityStyles.onlineDot} />
          <Text style={securityStyles.securityBadgeText}>Protected</Text>
        </View>
      </View>

      <Text style={securityStyles.securityTitle}>
        Your digital life, secured.
      </Text>

      <Text style={securityStyles.securityDescription}>
        Keep your passwords organized in one place.
      </Text>

      <View style={securityStyles.securityBottom}>
        <Text style={securityStyles.securityBottomText}>
          Secure. Organize. Protect.
        </Text>

        <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
      </View>
    </View>
  );
}
