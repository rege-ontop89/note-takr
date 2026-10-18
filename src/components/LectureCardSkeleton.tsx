import { StyleSheet, View } from 'react-native';

import { Colors, Radii, SkeletonSizes, Spacing } from '../theme/colors';
export default function LectureCardSkeleton() {
  return (
    <View style={styles.card}>
      <View style={styles.icon} />

      <View style={styles.content}>
        <View style={styles.title} />
        <View style={styles.course} />

        <View style={styles.details}>
          <View style={styles.detail} />
          <View style={styles.detailSmall} />
        </View>
      </View>
    </View>
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
    padding: Spacing.sm + Spacing.xxs / 2,
    marginBottom: Spacing.sm,
  },

  icon: {
    width: 46,
    height: 46,
    borderRadius: Radii.md,
    backgroundColor: Colors.lavender,
    opacity: 0.7,
  },

  content: {
    flex: 1,
    marginLeft: Spacing.sm,
  },

  title: {
    width: '72%',
    height: 13,
    borderRadius: Radii.sm - 2,
    backgroundColor: Colors.border,
  },

  course: {
    width: '35%',
    height: 10,
    borderRadius: Radii.sm - 3,
    backgroundColor: Colors.border,
    marginTop: Spacing.xs,
  },

  details: {
    flexDirection: 'row',
    marginTop: Spacing.xs + 1,
    gap: Spacing.xxs + 3,
  },

  detail: {
    width: SkeletonSizes.detail,
    height: 8,
    borderRadius: Radii.sm / 2,
    backgroundColor: Colors.border,
  },

  detailSmall: {
    width: SkeletonSizes.detailSmall,
    height: 8,
    borderRadius: Radii.sm / 2,
    backgroundColor: Colors.border,
  },
});
