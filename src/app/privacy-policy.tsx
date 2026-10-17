import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ToolScreenHeader } from "@/components/tools/tool-screen-header";
import { toolStyles as styles } from "@/styles/tools/tool_screens.styles";

function PrivacySection({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <View style={{ marginBottom: 22 }}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.paragraph}>{children}</Text>
    </View>
  );
}

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ToolScreenHeader
          title="Privacy Policy"
          subtitle="Your privacy matters to VaultX"
        />

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons
              name="shield-checkmark-outline"
              size={27}
              color="#B08A45"
            />
            <Text style={[styles.cardTitle, { marginBottom: 0 }]}>
              Your privacy, your control
            </Text>
          </View>

          <Text style={[styles.paragraph, { marginTop: 13, marginBottom: 0 }]}>
            This page explains how VaultX handles information stored in the
            application. Please read it before saving sensitive information.
          </Text>
        </View>

        <View style={styles.card}>
          <PrivacySection title="1. Information stored">
            VaultX stores the information you enter, such as account titles,
            usernames, passwords, website addresses, categories, notes, and
            favorite preferences. Your profile information may also be stored.
          </PrivacySection>

          <PrivacySection title="2. Where your data is stored">
            In the current app implementation, vault records are stored in the
            application's local SQLite database. This does not mean your
            database is automatically encrypted or protected against access to
            the device's application files.
          </PrivacySection>

          <PrivacySection title="3. Data sharing">
            VaultX does not currently provide a cloud synchronization service in
            this implementation. No promise of server-side storage, end-to-end
            encryption, or third-party data handling should be assumed unless
            those features are separately implemented.
          </PrivacySection>

          <PrivacySection title="4. Clipboard usage">
            When you copy a password, it is placed on your device clipboard.
            Other applications with clipboard access may be able to read
            clipboard contents. Avoid leaving sensitive passwords copied.
          </PrivacySection>

          <PrivacySection title="5. Device security">
            Keep your device updated and protected with a secure screen lock.
            Anyone who gains access to your unlocked device or application data
            may be able to access locally stored information.
          </PrivacySection>

          <PrivacySection title="6. Your responsibility">
            Use unique passwords, protect your device, and do not share your
            vault with other people. Before using VaultX for real credentials,
            verify that the production build includes appropriate database
            encryption and secure key management.
          </PrivacySection>

          <PrivacySection title="7. Policy updates">
            This policy may be updated as VaultX gains new features. The
            application should display the latest policy whenever its data
            handling practices change.
          </PrivacySection>

          <Text style={styles.mutedText}>
            VaultX Privacy Policy · Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
