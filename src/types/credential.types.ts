import type { CredentialCategory } from "@/constants/vault";

export type Credential = {
  id: number;
  title: string;
  username: string;
  password: string;
  website: string;
  category: Exclude<CredentialCategory, "All">;
  notes: string;
  favorite: boolean;
  icon: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type CredentialInput = {
  title: string;
  username: string;
  password: string;
  website: string;
  category: Exclude<CredentialCategory, "All">;
  notes: string;
  favorite: boolean;
  icon: string;
  color: string;
};
