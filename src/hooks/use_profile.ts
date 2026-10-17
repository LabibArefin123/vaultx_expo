import { useCallback, useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";

import type {
  ProfileInput,
  UserProfile,
} from "@/types/profile.types";

export function useProfile() {
  const db = useSQLiteContext();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);

      const result = await db.getFirstAsync<UserProfile>(
        "SELECT * FROM user_profile WHERE id = 1",
      );

      setProfile(result ?? null);
    } catch (error) {
      console.error("Profile loading error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [db]);

  const updateProfile = useCallback(
    async (data: ProfileInput) => {
      try {
        setSaving(true);

        await db.runAsync(
          `UPDATE user_profile
           SET name = ?, email = ?, updated_at = ?
           WHERE id = 1`,
          data.name.trim(),
          data.email.trim(),
          new Date().toISOString(),
        );

        await loadProfile();
      } catch (error) {
        console.error("Profile update error:", error);
        throw error;
      } finally {
        setSaving(false);
      }
    },
    [db, loadProfile],
  );

  useEffect(() => {
    loadProfile().catch(() => {});
  }, [loadProfile]);

  return {
    profile,
    loading,
    saving,
    loadProfile,
    updateProfile,
  };
}