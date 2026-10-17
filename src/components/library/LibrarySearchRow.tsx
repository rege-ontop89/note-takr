import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SearchBar from '../SearchBar';
import { Colors, IconSizes, Radii, Spacing } from '../../theme/colors';

type LibrarySearchRowProps = {
  query: string;
  onChangeQuery: (text: string) => void;
  onClear: () => void;
};

export default function LibrarySearchRow({
  query,
  onChangeQuery,
  onClear,
}: LibrarySearchRowProps) {
  const hasQuery = query.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <SearchBar value={query} onChangeText={onChangeQuery} />
      </View>

      {hasQuery && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={onClear}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
        >
          <Ionicons
            name="close"
            size={IconSizes.md - 2}
            color={Colors.textSecondary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md + 2,
  },
  field: {
    flex: 1,
  },
  clearButton: {
    width: 44,
    height: 44,
    borderRadius: Radii.md,
    marginLeft: Spacing.xs,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
