import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";

import {
  addCredential as insertCredential,
  deleteCredential as removeCredential,
  getCredentials,
  toggleCredentialFavorite,
  updateCredential as saveCredentialChanges,
} from "@/database/credential_repository";

import type {
  Credential,
  CredentialInput,
} from "@/types/credential.types";

export function useCredentials() {
  const db = useSQLiteContext();

  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);

      const result = await getCredentials(db);

      setCredentials(result);
    } finally {
      setLoading(false);
    }
  }, [db]);

  useFocusEffect(
    useCallback(() => {
      void refresh();
    }, [refresh]),
  );

  const addCredential = useCallback(
    async (data: CredentialInput) => {
      const result = await insertCredential(db, data);

      await refresh();

      return result;
    },
    [db, refresh],
  );

  const updateCredential = useCallback(
    async (id: number, data: CredentialInput) => {
      const result = await saveCredentialChanges(db, id, data);

      await refresh();

      return result;
    },
    [db, refresh],
  );

  const deleteCredential = useCallback(
    async (id: number) => {
      await removeCredential(db, id);

      await refresh();
    },
    [db, refresh],
  );

  const toggleFavorite = useCallback(
    async (id: number) => {
      const result = await toggleCredentialFavorite(db, id);

      await refresh();

      return result;
    },
    [db, refresh],
  );

  return {
    credentials,
    loading,
    refresh,
    addCredential,
    updateCredential,
    deleteCredential,
    toggleFavorite,
  };
}