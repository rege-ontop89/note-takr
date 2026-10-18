import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors, FontSizes, IconSizes, Radii, Spacing } from '../theme/colors';
import { Lecture } from '../types';

type LectureCardProps = {
  lecture: Lecture;
  onPress: () => void;
};

export default function LectureCard({ lecture, onPress }: LectureCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`Open ${lecture.title}`}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="mic-outline" size={IconSizes.lg} color={Colors.text} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {lecture.title}
        </Text>

        <Text style={styles.course}>{lecture.course}</Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>{lecture.date}</Text>

          <View style={styles.dot} />

          <Text style={styles.detailText}>{lecture.duration}</Text>

          {lecture.hasTranscript && (
            <>
              <View style={styles.dot} />

              <Ionicons
                name="document-text-outline"
                size={IconSizes.sm}
                color={Colors.textSecondary}
              />
            </>
          )}
        </View>
      </View>

      {lecture.isFavorite && (
        <Ionicons name="star" size={IconSizes.sm} color={Colors.coral} />
      )}
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
    padding: Spacing.sm + Spacing.xxs / 2,
    marginBottom: Spacing.sm,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: Radii.md,
    backgroundColor: Colors.lavender,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: FontSizes.md - 1,
    fontWeight: '700',
    color: Colors.text,
  },

  course: {
    marginTop: Spacing.xxs,
    fontSize: FontSizes.sm - 1,
    color: Colors.textSecondary,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs - 1,
  },

  detailText: {
    fontSize: FontSizes.xs - 1,
    color: Colors.textMuted,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: Radii.sm / 4,
    backgroundColor: Colors.textMuted,
    marginHorizontal: Spacing.xxs + 2,
  },
});
