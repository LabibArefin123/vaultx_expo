import { Text, View } from "react-native";

import { DEMO_CREDENTIALS } from "@/constants/vault";

import FavoritesCredentialCard from "./favorites_credential_card";
import FavoritesEmptyState from "./favorites_empty_state";

import { credentialStyles } from "@/styles/favorites/favorites_credential.styles";

type Credential = (typeof DEMO_CREDENTIALS)[number];

type FavoritesCredentialListProps = {
  credentials: Credential[];
};

export default function FavoritesCredentialList({
  credentials,
}: FavoritesCredentialListProps) {
  return (
    <View>
      <Text style={credentialStyles.sectionTitle}>Your favorites</Text>

      {credentials.length > 0 ? (
        credentials.map((item) => (
          <FavoritesCredentialCard key={item.id} item={item} />
        ))
      ) : (
        <FavoritesEmptyState />
      )}
    </View>
  );
}
