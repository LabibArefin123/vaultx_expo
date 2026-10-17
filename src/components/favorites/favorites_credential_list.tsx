import { Text, View } from "react-native";

import type { Credential } from "@/types/credential.types";

import FavoritesCredentialCard from "./favorites_credential_card";
import FavoritesEmptyState from "./favorites_empty_state";

import { credentialStyles } from "@/styles/favorites/favorites_credential.styles";

type FavoritesCredentialListProps = {
  credentials: Credential[];
};

export default function FavoritesCredentialList({
  credentials,
}: FavoritesCredentialListProps) {
  return (
    <View>
      <View style={credentialStyles.listHeader}>
        <Text style={credentialStyles.sectionTitle}>Your favorites</Text>

        <Text style={credentialStyles.count}>
          {credentials.length} {credentials.length === 1 ? "item" : "items"}
        </Text>
      </View>

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
