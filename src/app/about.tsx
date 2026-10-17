import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ToolScreenHeader } from "@/components/tools/tool-screen-header";
import { toolStyles as styles } from "@/styles/tools/tool_screens.styles";

const FEATURES = [
  {
    icon: "key-outline" as const,
    title: "Password Management",
    description: "Keep account credentials organized in one place.",
  },
  {
    icon: "shuffle-outline" as const,
    title: "Password Generator",
    description: "Create random passwords with customizable options.",
  },
  {
    icon: "analytics-outline" as const,
    title: "Security Audit",
    description: "Review weak, reused, and less complex passwords.",
  },
  {
    icon: "heart-outline" as const,
    title: "Favorites",
    description: "Quickly access your most frequently used credentials.",
  },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ToolScreenHeader
          title="About VaultX"
          subtitle="Get to know your password manager"
        />

        <View
          style={[styles.card, { alignItems: "center", paddingVertical: 30 }]}
        >
          <View
            style={{
              width: 76,
              height: 76,
              borderRadius: 24,
              backgroundColor: "#F6F0E4",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Ionicons name="shield-checkmark" size={39} color="#B08A45" />
          </View>

          <Text style={{ fontSize: 26, fontWeight: "900", color: "#242424" }}>
            VaultX
          </Text>

          <Text style={[styles.description, { marginTop: 7 }]}>
            Your personal password manager
          </Text>

          <View
            style={{
              backgroundColor: "#F6F3ED",
              paddingHorizontal: 15,
              paddingVertical: 7,
              borderRadius: 20,
              marginTop: 17,
            }}
          >
            <Text style={{ color: "#80612E", fontSize: 12, fontWeight: "800" }}>
              VERSION 1.0.0
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Our purpose</Text>
          <Text style={styles.paragraph}>
            VaultX is designed to make password management simple and organized.
            It brings your saved credentials, password generation, favorites,
            and security reviews together in one application.
          </Text>

          <Text style={styles.cardTitle}>What you can do</Text>

          {FEATURES.map((feature, index) => (
            <View key={feature.title}>
              <View style={styles.finding}>
                <View style={styles.findingIcon}>
                  <Ionicons name={feature.icon} size={19} color="#B08A45" />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.findingTitle}>{feature.title}</Text>
                  <Text style={styles.findingDescription}>
                    {feature.description}
                  </Text>
                </View>
              </View>

              {index !== FEATURES.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Built with care</Text>
          <Text style={styles.paragraph}>
            VaultX is built with Expo, React Native, TypeScript, and SQLite. The
            application is designed for Android and iOS.
          </Text>

          <Text style={styles.mutedText}>
            © 2026 VaultX. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
