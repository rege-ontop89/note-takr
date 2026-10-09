import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../theme/colors';
import { Lecture } from '../types';

type LectureCardProps = {
  lecture: Lecture;
  onPress: () => void;
};

export default function LectureCard({
  lecture,
  onPress,
}: LectureCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`Open ${lecture.title}`}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name="mic-outline"
          size={22}
          color={Colors.text}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {lecture.title}
        </Text>

        <Text style={styles.course}>
          {lecture.course}
        </Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>
            {lecture.date}
          </Text>

          <View style={styles.dot} />

          <Text style={styles.detailText}>
            {lecture.duration}
          </Text>

          {lecture.hasTranscript && (
            <>
              <View style={styles.dot} />

              <Ionicons
                name="document-text-outline"
                size={14}
                color={Colors.textSecondary}
              />
            </>
          )}
        </View>
      </View>

      {lecture.isFavorite && (
        <Ionicons
          name="star"
          size={17}
          color={Colors.coral}
        />
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
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: Colors.lavender,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },

  course: {
    marginTop: 4,
    fontSize: 13,
    color: Colors.textSecondary,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  detailText: {
    fontSize: 11,
    color: Colors.textMuted,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: Colors.textMuted,
    marginHorizontal: 6,
  },
});
