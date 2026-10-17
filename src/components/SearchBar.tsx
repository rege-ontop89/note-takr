import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import { Colors, FontSizes, IconSizes, Radii, Spacing } from '../theme/colors';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={IconSizes.md}
        color={Colors.textSecondary}
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search lectures..."
        placeholderTextColor={Colors.textMuted}
        returnKeyType="search"
        accessibilityLabel="Search lectures"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.lg,
    paddingHorizontal: Spacing.sm + Spacing.xxs - 1,
  },

  input: {
    flex: 1,
    marginLeft: Spacing.xs + 2,
    fontSize: FontSizes.sm,
    color: Colors.text,
  },
});
