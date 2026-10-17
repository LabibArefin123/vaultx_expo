import { Pressable, ScrollView, Text, View } from "react-native";

import { CATEGORIES, type CredentialCategory } from "@/constants/vault";

import { categoryStyles } from "@/styles/home/home_categories.styles";

type HomeCategoriesProps = {
  selectedCategory: CredentialCategory;
  onCategoryChange: (value: CredentialCategory) => void;
};

export default function HomeCategories({
  selectedCategory,
  onCategoryChange,
}: HomeCategoriesProps) {
  return (
    <View>
      <View style={categoryStyles.sectionHeader}>
        <Text style={categoryStyles.sectionTitle}>Categories</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={categoryStyles.categoryList}
      >
        {CATEGORIES.map((category) => {
          const active = selectedCategory === category;

          return (
            <Pressable
              key={category}
              onPress={() => onCategoryChange(category)}
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
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
