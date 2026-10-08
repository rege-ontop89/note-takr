import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import { Colors } from '../../theme/colors';
import { lectures } from '../../data/lectureStore';

export default function LectureDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const lecture =
    lectures.find((item) => item.id === id) ??
    lectures[0];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.text}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Lecture details</Text>

          <TouchableOpacity
            style={styles.moreButton}
            accessibilityRole="button"
            accessibilityLabel="More options"
          >
            <Ionicons
              name="ellipsis-horizontal"
              size={22}
              color={Colors.text}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleSection}>
          <View style={styles.lectureIcon}>
            <Ionicons
              name="mic"
              size={25}
              color={Colors.text}
            />
          </View>

          <Text style={styles.title}>{lecture.title}</Text>

          <Text style={styles.course}>{lecture.course}</Text>

          <View style={styles.details}>
            <Text style={styles.detail}>{lecture.date}</Text>

            <View style={styles.dot} />

            <Text style={styles.detail}>
              {lecture.duration}
            </Text>

            <View style={styles.dot} />

            <Text style={styles.detail}>
              {lecture.folder}
            </Text>
          </View>
        </View>

        <View style={styles.player}>
          <View style={styles.playerTop}>
            <TouchableOpacity
              style={styles.playButton}
              accessibilityRole="button"
              accessibilityLabel="Play lecture"
            >
              <Ionicons
                name="play"
                size={20}
                color={Colors.white}
              />
            </TouchableOpacity>

            <View style={styles.playerInfo}>
              <Text style={styles.playerTitle}>
                Lecture recording
              </Text>
              <Text style={styles.playerTime}>
                00:00 / {lecture.duration}
              </Text>
            </View>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progress} />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Transcript</Text>

          {lecture.hasTranscript && (
            <Ionicons
              name="document-text-outline"
              size={20}
              color={Colors.textSecondary}
            />
          )}
        </View>

        {lecture.hasTranscript ? (
          <View style={styles.transcriptCard}>
            <Text style={styles.transcript}>
              {lecture.transcript}
            </Text>
          </View>
        ) : (
          <View style={styles.emptyTranscript}>
            <Ionicons
              name="document-text-outline"
              size={28}
              color={Colors.textSecondary}
            />

            <Text style={styles.emptyTitle}>
              No transcript yet
            </Text>

            <Text style={styles.emptyText}>
              This lecture does not have a transcript.
            </Text>
          </View>
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            accessibilityRole="button"
            accessibilityLabel="Edit lecture"
          >
            <Ionicons
              name="create-outline"
              size={19}
              color={Colors.text}
            />
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            accessibilityRole="button"
            accessibilityLabel="Move lecture"
          >
            <Ionicons
              name="folder-outline"
              size={19}
              color={Colors.text}
            />
            <Text style={styles.actionText}>Move</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.deleteButton]}
            accessibilityRole="button"
            accessibilityLabel="Delete lecture"
          >
            <Ionicons
              name="trash-outline"
              size={19}
              color={Colors.coral}
            />
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },

  moreButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleSection: {
    alignItems: 'center',
    marginTop: 28,
  },

  lectureIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: Colors.lavender,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 16,
    fontSize: 22,
    lineHeight: 29,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.text,
  },

  course: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.textSecondary,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },

  detail: {
    fontSize: 11,
    color: Colors.textMuted,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: Colors.textMuted,
    marginHorizontal: 7,
  },

  player: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: 17,
    marginTop: 28,
  },

  playerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  playButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: Colors.coral,
    alignItems: 'center',
    justifyContent: 'center',
  },

  playerInfo: {
    marginLeft: 13,
  },

  playerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },

  playerTime: {
    marginTop: 4,
    fontSize: 11,
    color: Colors.textSecondary,
  },

  progressTrack: {
    height: 6,
    borderRadius: 4,
    backgroundColor: Colors.border,
    marginTop: 17,
    overflow: 'hidden',
  },

  progress: {
    width: '35%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: Colors.coral,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },

  transcriptCard: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 17,
  },

  transcript: {
    fontSize: 14,
    lineHeight: 23,
    color: Colors.text,
  },

  emptyTranscript: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 28,
  },

  emptyTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },

  emptyText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: Colors.textSecondary,
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },

  actionButton: {
    flex: 1,
    height: 48,
    borderRadius: 15,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
  },

  deleteButton: {
    borderColor: Colors.coralLight,
  },

  deleteText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.coral,
  },
});
