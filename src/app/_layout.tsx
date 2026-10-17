import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "@/constants/vault";
import { initializeDatabase } from "@/database/database";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="vaultx.db" onInit={initializeDatabase}>
      <StatusBar style="dark" backgroundColor={COLORS.background} />

      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.muted,
          tabBarStyle: {
            height: 68,
            paddingTop: 8,
            paddingBottom: 10,
            backgroundColor: COLORS.surface,
            borderTopColor: COLORS.border,
            elevation: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        }}
      >
        {/* Main Bottom Navigation */}

        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="shield-checkmark-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            title: "Vault",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="key-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Hidden Authentication Routes */}

        <Tabs.Screen name="biometric-login" options={{ href: null }} />

        {/* Hidden Credential Routes */}

        <Tabs.Screen name="add-credential" options={{ href: null }} />

        <Tabs.Screen name="credential/[id]" options={{ href: null }} />

        <Tabs.Screen name="edit-credential/[id]" options={{ href: null }} />

        {/* Hidden Utility Routes */}

        <Tabs.Screen name="password-generator" options={{ href: null }} />

        <Tabs.Screen name="security-audit" options={{ href: null }} />

        <Tabs.Screen name="privacy-policy" options={{ href: null }} />

        <Tabs.Screen name="about" options={{ href: null }} />
      </Tabs>
    </SQLiteProvider>
  );
}
