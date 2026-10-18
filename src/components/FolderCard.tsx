import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, FontSizes, IconSizes, Radii, Spacing } from '../theme/colors';

type FolderCardProps = {
  name: string;
  lectureCount: number;
  onPress: () => void;
};

export default function FolderCard({
  name,
  lectureCount,
  onPress,
}: FolderCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`Open ${name} folder`}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name="folder-outline"
          size={IconSizes.md}
          color={Colors.text}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.count}>
          {lectureCount} {lectureCount === 1 ? 'lecture' : 'lectures'}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={IconSizes.sm}
        color={Colors.textMuted}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.lg,
    padding: Spacing.sm,
    marginRight: Spacing.sm,
    width: 190,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: Radii.md,
    backgroundColor: Colors.coralLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xs,
  },

  content: {
    flex: 1,
  },

  name: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.text,
  },

  count: {
    marginTop: Spacing.xxs,
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
});
