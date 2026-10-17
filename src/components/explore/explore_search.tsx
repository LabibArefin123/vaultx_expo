import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";

import { COLORS } from "@/constants/vault";
import { searchStyles } from "@/styles/explore/explore_search.styles";

type ExploreSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function ExploreSearch({
  search,
  onSearchChange,
}: ExploreSearchProps) {
  return (
    <View style={searchStyles.searchBox}>
      <Ionicons name="search-outline" size={20} color={COLORS.secondary} />

      <TextInput
        value={search}
        onChangeText={onSearchChange}
        placeholder="Search passwords..."
        placeholderTextColor={COLORS.muted}
        style={searchStyles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {search.length > 0 && (
        <Pressable onPress={() => onSearchChange("")}>
          <Ionicons name="close-circle" size={19} color={COLORS.muted} />
        </Pressable>
      )}
    </View>
  );
}
