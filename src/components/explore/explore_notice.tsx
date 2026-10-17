import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { noticeStyles } from "@/styles/explore/explore_notice.styles";

export default function ExploreNotice() {
  return (
    <View style={noticeStyles.notice}>
      <Ionicons
        name="information-circle-outline"
        size={18}
        color={COLORS.gold}
      />

      <Text style={noticeStyles.noticeText}>
        These are demonstration entries. Real password storage will be
        implemented separately.
      </Text>
    </View>
  );
}
