import { Pressable, ScrollView, Text, View } from "react-native";

import { CATEGORIES, COLORS, type CredentialCategory } from "@/constants/vault";

import { categoryStyles } from "@/styles/explore/explore_categories.styles";

type ExploreCategoriesProps = {
  category: CredentialCategory;
  onCategoryChange: (value: CredentialCategory) => void;
};

export default function ExploreCategories({
  category,
  onCategoryChange,
}: ExploreCategoriesProps) {
  return (
    <View>
      <Text style={categoryStyles.filterTitle}>Categories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={categoryStyles.categoryList}
      >
        {CATEGORIES.map((item) => {
          const active = category === item;

          return (
            <Pressable
              key={item}
              onPress={() => onCategoryChange(item)}
              style={[
                categoryStyles.categoryButton,
                active && categoryStyles.categoryButtonActive,
              ]}
            >
              <Text
                style={[
                  categoryStyles.categoryText,
                  active && categoryStyles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
