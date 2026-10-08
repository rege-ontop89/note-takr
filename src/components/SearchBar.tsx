import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../theme/colors';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={20}
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
    borderRadius: 16,
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: Colors.text,
  },
});
