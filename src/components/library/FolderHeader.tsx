import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Colors,
  FontSizes,
  IconSizes,
  Radii,
  Spacing,
} from '../../theme/colors';

type FolderHeaderProps = {
  folderName: string;
  onBack: () => void;
};

export default function FolderHeader({
  folderName,
  onBack,
}: FolderHeaderProps) {
  return (
    <View>
      <TouchableOpacity
        style={styles.back}
        onPress={onBack}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel="Back to all folders"
      >
        <Ionicons name="arrow-back" size={IconSizes.sm} color={Colors.text} />

        <Text style={styles.backText}>All folders</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{folderName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    minHeight: 44,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.md,
    paddingHorizontal: Spacing.sm + Spacing.xxs / 2,
    gap: Spacing.xxs + 2,
  },
  backText: {
    fontSize: FontSizes.sm - 1,
    fontWeight: '600',
    color: Colors.text,
  },
  title: {
    marginTop: Spacing.md,
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.text,
  },
});
