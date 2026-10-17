import { SafeAreaView } from "react-native-safe-area-context";

import { BiometricLogin } from "@/components/authentication";

export default function BiometricLoginScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F8F7F4" }}
      edges={["top", "bottom"]}
    >
      <BiometricLogin />
    </SafeAreaView>
  );
}
