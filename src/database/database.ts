import type { SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(
  db: SQLiteDatabase,
): Promise<void> {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS credentials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      username TEXT NOT NULL DEFAULT '',
      password TEXT NOT NULL,
      website TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL,
      notes TEXT NOT NULL DEFAULT '',
      favorite INTEGER NOT NULL DEFAULT 0,
      icon TEXT NOT NULL DEFAULT 'key-outline',
      color TEXT NOT NULL DEFAULT '#5269C8',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_credentials_category
    ON credentials(category);

    CREATE INDEX IF NOT EXISTS idx_credentials_favorite
    ON credentials(favorite);
  `);
}