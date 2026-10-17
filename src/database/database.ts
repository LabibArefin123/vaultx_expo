import type { SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(db: SQLiteDatabase): Promise<void> {
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
  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS user_profile (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    name TEXT NOT NULL DEFAULT 'VaultX User',
    email TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  INSERT OR IGNORE INTO user_profile (
    id,
    name,
    email,
    created_at,
    updated_at
  )
  VALUES (
    1,
    'VaultX User',
    '',
    datetime('now'),
    datetime('now')
  );
`);
  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS biometric_settings (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    enabled INTEGER NOT NULL DEFAULT 0,
    authentication_type TEXT,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  INSERT OR IGNORE INTO biometric_settings (id, enabled)
  VALUES (1, 0);
`);
}
