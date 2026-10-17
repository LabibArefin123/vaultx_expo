import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { DEMO_CREDENTIALS } from "@/constants/vault";

import HomeCredentialCard from "@/components/home/home_credential_card";
import HomeEmptyState from "@/components/home/home_empty_state";

import { credentialStyles } from "@/styles/home/home_credential.styles";

type Credential = (typeof DEMO_CREDENTIALS)[number];

type HomeCredentialListProps = {
  credentials: Credential[];
};

export default function HomeCredentialList({
  credentials,
}: HomeCredentialListProps) {
  const router = useRouter();

  return (
    <View>
      <View style={credentialStyles.sectionHeader}>
        <Text style={credentialStyles.sectionTitle}>Recent passwords</Text>

        <Pressable onPress={() => router.push("/explore")}>
          <Text style={credentialStyles.viewAll}>See all</Text>
        </Pressable>
      </View>

      {credentials.length > 0 ? (
        credentials.map((item) => (
          <HomeCredentialCard key={item.id} item={item} />
        ))
      ) : (
        <HomeEmptyState />
      )}
    </View>
  );
}
