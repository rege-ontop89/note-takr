import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import EmptyState from '../EmptyState';
import {
  Colors,
  FontSizes,
  Spacing,
  Radii,
  IconSizes,
} from '../../theme/colors';

type LectureTranscriptProps = {
  hasTranscript: boolean;
  transcript: string;
};

export default function LectureTranscript({
  hasTranscript,
  transcript,
}: LectureTranscriptProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Transcript</Text>

        {hasTranscript && (
          <Ionicons
            name="document-text-outline"
            size={IconSizes.md}
            color={Colors.textSecondary}
          />
        )}
      </View>

      {hasTranscript ? (
        <View style={styles.card}>
          <Text style={styles.transcript}>{transcript}</Text>
        </View>
      ) : (
        <View style={styles.emptyCard}>
          <EmptyState
            title="No transcript yet"
            message="This lecture does not have a transcript."
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.text,
  },
  card: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.lg,
    padding: Spacing.md,
  },
  transcript: {
    fontSize: FontSizes.sm,
    lineHeight: FontSizes.xxl - 1,
    color: Colors.text,
  },
  emptyCard: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.lg,
    overflow: 'hidden',
  },
});
