export const COLORS = {
  background: "#F6F7FB",
  surface: "#FFFFFF",
  primary: "#172554",
  primaryLight: "#253B75",
  gold: "#D6A84F",
  goldLight: "#F8EED9",
  text: "#172033",
  secondary: "#7A8498",
  muted: "#A5ADBA",
  border: "#E8EBF1",
  success: "#15966A",
  danger: "#E05252",
  overlay: "#101A35",
};

export type CredentialCategory =
  | "All"
  | "Personal"
  | "Work"
  | "Social"
  | "Finance"
  | "Shopping";

export type Credential = {
  id: string;
  title: string;
  username: string;
  website: string;
  category: Exclude<CredentialCategory, "All">;
  icon: string;
  color: string;
  favorite: boolean;
  updatedAt: string;
};

export const CATEGORIES: CredentialCategory[] = [
  "All",
  "Personal",
  "Work",
  "Social",
  "Finance",
  "Shopping",
];

// Demonstration records only. Do not put real passwords here.
export const DEMO_CREDENTIALS: Credential[] = [
  {
    id: "1",
    title: "Google",
    username: "hello@example.com",
    website: "google.com",
    category: "Personal",
    icon: "logo-google",
    color: "#4285F4",
    favorite: true,
    updatedAt: "Today",
  },
  {
    id: "2",
    title: "GitHub",
    username: "developer@example.com",
    website: "github.com",
    category: "Work",
    icon: "logo-github",
    color: "#24292F",
    favorite: true,
    updatedAt: "Yesterday",
  },
  {
    id: "3",
    title: "Facebook",
    username: "hello@example.com",
    website: "facebook.com",
    category: "Social",
    icon: "logo-facebook",
    color: "#1877F2",
    favorite: false,
    updatedAt: "2 days ago",
  },
  {
    id: "4",
    title: "Dropbox",
    username: "work@example.com",
    website: "dropbox.com",
    category: "Work",
    icon: "cloud-outline",
    color: "#0061FF",
    favorite: false,
    updatedAt: "3 days ago",
  },
  {
    id: "5",
    title: "Amazon",
    username: "shop@example.com",
    website: "amazon.com",
    category: "Shopping",
    icon: "cart-outline",
    color: "#F59E0B",
    favorite: false,
    updatedAt: "Last week",
  },
  {
    id: "6",
    title: "PayPal",
    username: "payment@example.com",
    website: "paypal.com",
    category: "Finance",
    icon: "wallet-outline",
    color: "#003087",
    favorite: true,
    updatedAt: "Last week",
  },
];