import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ToolScreenHeader } from "@/components/tools/tool-screen-header";
import { useCredentials } from "@/hooks/use_credentials";
import { toolStyles as styles } from "@/styles/tools/tool_screens.styles";

export default function SecurityAuditScreen() {
  const { credentials, loading } = useCredentials();

  const audit = useMemo(() => {
    const weak = credentials.filter(
      (item) => (item.password ?? "").length < 12,
    );

    const missingVariety = credentials.filter((item) => {
      const password = item.password ?? "";

      return !(
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^a-zA-Z0-9]/.test(password)
      );
    });

    const passwordCounts = new Map<string, number>();

    credentials.forEach((item) => {
      const password = item.password ?? "";
      if (password) {
        passwordCounts.set(password, (passwordCounts.get(password) ?? 0) + 1);
      }
    });

    const reusedPasswords = [...passwordCounts.values()]
      .filter((count) => count > 1)
      .reduce((total, count) => total + count, 0);

    const totalIssues = new Set([
      ...weak.map((item) => item.id),
      ...missingVariety.map((item) => item.id),
      ...credentials
        .filter((item) => {
          const password = item.password ?? "";
          return password && (passwordCounts.get(password) ?? 0) > 1;
        })
        .map((item) => item.id),
    ]).size;

    const score = credentials.length
      ? Math.max(
          0,
          Math.round(
            ((credentials.length - totalIssues) / credentials.length) * 100,
          ),
        )
      : 0;

    return {
      total: credentials.length,
      weak: weak.length,
      missingVariety: missingVariety.length,
      reusedPasswords,
      totalIssues,
      score,
    };
  }, [credentials]);

  if (loading) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={[styles.content, { flex: 1, justifyContent: "center" }]}>
          <ActivityIndicator size="large" color="#B08A45" />
          <Text
            style={[styles.description, { textAlign: "center", marginTop: 12 }]}
          >
            Checking your vault...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ToolScreenHeader
          title="Security Audit"
          subtitle="Review the security of your saved credentials"
        />

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Vault security score</Text>
          <Text style={styles.score}>{audit.score}%</Text>
          <Text style={styles.description}>
            {audit.total === 0
              ? "Add credentials to start reviewing your vault security."
              : audit.totalIssues === 0
                ? "No issues were found in the checks currently available."
                : `${audit.totalIssues} credential${audit.totalIssues === 1 ? "" : "s"} need attention.`}
          </Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Saved credentials</Text>
            <Text style={styles.valueText}>{audit.total}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Security findings</Text>
          <Text style={styles.description}>
            These checks run against the credentials stored in your vault.
          </Text>

          <View style={styles.finding}>
            <View style={styles.findingIcon}>
              <Ionicons name="alert-circle-outline" size={19} color="#C47A35" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.findingTitle}>Short passwords</Text>
              <Text style={styles.findingDescription}>
                {audit.weak} password(s) contain fewer than 12 characters.
              </Text>
            </View>
            <Text style={styles.valueText}>{audit.weak}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.finding}>
            <View style={styles.findingIcon}>
              <Ionicons name="text-outline" size={19} color="#C47A35" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.findingTitle}>Limited character variety</Text>
              <Text style={styles.findingDescription}>
                {audit.missingVariety} password(s) are missing one or more
                character types.
              </Text>
            </View>
            <Text style={styles.valueText}>{audit.missingVariety}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.finding}>
            <View style={styles.findingIcon}>
              <Ionicons name="copy-outline" size={19} color="#C47A35" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.findingTitle}>Reused passwords</Text>
              <Text style={styles.findingDescription}>
                {audit.reusedPasswords} credential(s) use a password shared with
                another saved credential.
              </Text>
            </View>
            <Text style={styles.valueText}>{audit.reusedPasswords}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Security recommendations</Text>
          <Text style={styles.paragraph}>
            Use a unique password for every account. Prefer passwords of at
            least 12 characters with a mix of uppercase, lowercase, numbers, and
            symbols.
          </Text>
          <Text style={styles.paragraph}>
            Consider changing weak or reused passwords on the original websites
            and services. VaultX cannot change those passwords for you.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
