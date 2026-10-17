import { Pressable, Text, View } from "react-native";

import { CATEGORIES, type CredentialCategory } from "@/constants/vault";
import { formStyles as styles } from "@/styles/credentials/credential_form.styles";

export type SelectableCategory = Exclude<CredentialCategory, "All">;

export const selectableCategories = CATEGORIES.filter(
  (category): category is SelectableCategory => category !== "All",
);

type CredentialCategoryPickerProps = {
  category: SelectableCategory;
  onCategoryChange: (category: SelectableCategory) => void;
};

export function CredentialCategoryPicker({
  category,
  onCategoryChange,
}: CredentialCategoryPickerProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryList}>
        {selectableCategories.map((item) => {
          const active = category === item;

          return (
            <Pressable
              key={item}
              onPress={() => onCategoryChange(item)}
              style={[
                styles.categoryButton,
                active && styles.categoryButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  active && styles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
