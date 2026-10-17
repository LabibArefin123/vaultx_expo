import { Text, View } from "react-native";

import { DEMO_CREDENTIALS } from "@/constants/vault";

import ExploreCredentialCard from "@/components/explore/explore_credential_card";
import ExploreEmptyState from "@/components/explore/explore_empty_state";

import { credentialStyles } from "@/styles/explore/explore_credential.styles";

type Credential = (typeof DEMO_CREDENTIALS)[number];

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

        <Text style={credentialStyles.count}>{credentials.length} items</Text>
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
