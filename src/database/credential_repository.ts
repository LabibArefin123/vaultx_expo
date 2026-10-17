import type { SQLiteDatabase } from "expo-sqlite";

import type {
  Credential,
  CredentialInput,
} from "@/types/credential.types";

type CredentialRow = {
  id: number;
  title: string;
  username: string;
  password: string;
  website: string;
  category: Credential["category"];
  notes: string;
  favorite: number;
  icon: string;
  color: string;
  created_at: string;
  updated_at: string;
};

function mapCredential(row: CredentialRow): Credential {
  return {
    id: row.id,
    title: row.title,
    username: row.username,
    password: row.password,
    website: row.website,
    category: row.category,
    notes: row.notes,
    favorite: Boolean(row.favorite),
    icon: row.icon,
    color: row.color,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getCredentials(
  db: SQLiteDatabase,
): Promise<Credential[]> {
  const rows = await db.getAllAsync<CredentialRow>(
    `SELECT * FROM credentials ORDER BY updated_at DESC`,
  );

  return rows.map(mapCredential);
}

export async function getCredentialById(
  db: SQLiteDatabase,
  id: number,
): Promise<Credential | null> {
  const row = await db.getFirstAsync<CredentialRow>(
    `SELECT * FROM credentials WHERE id = ?`,
    id,
  );

  return row ? mapCredential(row) : null;
}

export async function addCredential(
  db: SQLiteDatabase,
  data: CredentialInput,
): Promise<Credential> {
  const now = new Date().toISOString();

  const result = await db.runAsync(
    `INSERT INTO credentials (
      title,
      username,
      password,
      website,
      category,
      notes,
      favorite,
      icon,
      color,
      created_at,
      updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    data.title.trim(),
    data.username.trim(),
    data.password,
    data.website.trim(),
    data.category,
    data.notes.trim(),
    data.favorite ? 1 : 0,
    data.icon,
    data.color,
    now,
    now,
  );

  const credential = await getCredentialById(
    db,
    result.lastInsertRowId,
  );

  if (!credential) {
    throw new Error("Could not retrieve the saved credential.");
  }

  return credential;
}

export async function updateCredential(
  db: SQLiteDatabase,
  id: number,
  data: CredentialInput,
): Promise<Credential> {
  const now = new Date().toISOString();

  const result = await db.runAsync(
    `UPDATE credentials SET
      title = ?,
      username = ?,
      password = ?,
      website = ?,
      category = ?,
      notes = ?,
      favorite = ?,
      icon = ?,
      color = ?,
      updated_at = ?
    WHERE id = ?`,
    data.title.trim(),
    data.username.trim(),
    data.password,
    data.website.trim(),
    data.category,
    data.notes.trim(),
    data.favorite ? 1 : 0,
    data.icon,
    data.color,
    now,
    id,
  );

  if (result.changes === 0) {
    throw new Error("Credential not found.");
  }

  const credential = await getCredentialById(db, id);

  if (!credential) {
    throw new Error("Could not retrieve the updated credential.");
  }

  return credential;
}

export async function deleteCredential(
  db: SQLiteDatabase,
  id: number,
): Promise<void> {
  await db.runAsync(
    `DELETE FROM credentials WHERE id = ?`,
    id,
  );
}

export async function toggleCredentialFavorite(
  db: SQLiteDatabase,
  id: number,
): Promise<Credential> {
  await db.runAsync(
    `UPDATE credentials
     SET favorite = CASE WHEN favorite = 1 THEN 0 ELSE 1 END,
         updated_at = ?
     WHERE id = ?`,
    new Date().toISOString(),
    id,
  );

  const credential = await getCredentialById(db, id);

  if (!credential) {
    throw new Error("Credential not found.");
  }

  return credential;
}