import { Text, View } from "react-native";

import type { Credential } from "@/types/credential.types";

import ExploreCredentialCard from "@/components/explore/explore_credential_card";
import ExploreEmptyState from "@/components/explore/explore_empty_state";

import { credentialStyles } from "@/styles/explore/explore_credential.styles";

type ExploreCredentialListProps = {
  credentials: Credential[];
};

export default function ExploreCredentialList({
  credentials,
}: ExploreCredentialListProps) {
  return (
    <View>
      <View style={credentialStyles.listHeader}>
        <Text style={credentialStyles.sectionTitle}>Saved credentials</Text>

        <Text style={credentialStyles.count}>
          {credentials.length} {credentials.length === 1 ? "item" : "items"}
        </Text>
      </View>

      {credentials.length > 0 ? (
        credentials.map((item) => (
          <ExploreCredentialCard key={item.id} item={item} />
        ))
      ) : (
        <ExploreEmptyState />
      )}
    </View>
  );
}
