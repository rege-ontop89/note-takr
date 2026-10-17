import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

import {
  Colors,
  FontSizes,
  Spacing,
  Radii,
  IconSizes,
} from '../../theme/colors';
import { lectures } from '../../data/lectureStore';

import LectureHeader from '../../components/lecture-details/LectureHeader';
import LecturePlayer from '../../components/lecture-details/LecturePlayer';
import LectureTranscript from '../../components/lecture-details/LectureTranscript';
import LectureActions from '../../components/lecture-details/LectureActions';

export default function LectureDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const lecture = lectures.find((item) => item.id === id) ?? lectures[0];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <LectureHeader />

        <View style={styles.titleSection}>
          <View style={styles.lectureIcon}>
            <Ionicons
              name="mic"
              size={IconSizes.xl - Spacing.xxs}
              color={Colors.text}
            />
          </View>

          <Text style={styles.title}>{lecture.title}</Text>

          <Text style={styles.course}>{lecture.course}</Text>

          <View style={styles.details}>
            <Text style={styles.detail}>{lecture.date}</Text>

            <View style={styles.dot} />

            <Text style={styles.detail}>{lecture.duration}</Text>

            <View style={styles.dot} />

            <Text style={styles.detail}>{lecture.folder}</Text>
          </View>
        </View>

        <View style={styles.playerSection}>
          <LecturePlayer duration={lecture.duration} />
        </View>

        <LectureTranscript
          hasTranscript={lecture.hasTranscript}
          transcript={lecture.transcript}
        />

        <LectureActions />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xxxl + Spacing.xxs,
    paddingBottom: Spacing.xxxl,
  },
  titleSection: {
    alignItems: 'center',
    marginTop: Spacing.xl + Spacing.xs,
  },
  lectureIcon: {
    width: 64,
    height: 64,
    borderRadius: Radii.xl,
    backgroundColor: Colors.lavender,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: Spacing.md,
    fontSize: FontSizes.xxl - Spacing.xxs / 2,
    lineHeight: FontSizes.xxl + Spacing.xxs,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.text,
  },
  course: {
    marginTop: Spacing.xxs + 2,
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xxs + 1,
  },
  detail: {
    fontSize: FontSizes.xs - 1,
    color: Colors.textMuted,
  },
  dot: {
    width: Spacing.xxs - 1,
    height: Spacing.xxs - 1,
    borderRadius: Spacing.xxs / 2,
    backgroundColor: Colors.textMuted,
    marginHorizontal: Spacing.xxs - 1,
  },
  playerSection: {
    marginTop: Spacing.xl + Spacing.xs,
  },
});
