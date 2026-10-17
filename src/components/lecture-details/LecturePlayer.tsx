import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Colors,
  FontSizes,
  Spacing,
  Radii,
  IconSizes,
} from '../../theme/colors';

type LecturePlayerProps = {
  duration: string;
};

export default function LecturePlayer({ duration }: LecturePlayerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.playButton}
          accessibilityRole="button"
          accessibilityLabel="Play lecture"
        >
          <Ionicons name="play" size={IconSizes.md} color={Colors.white} />
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.title}>Lecture recording</Text>
          <Text style={styles.time}>00:00 / {duration}</Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View style={styles.progress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.xl,
    padding: Spacing.md,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: Radii.lg,
    backgroundColor: Colors.coral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginLeft: Spacing.sm,
  },
  title: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.text,
  },
  time: {
    marginTop: Spacing.xxs,
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  progressTrack: {
    height: 6,
    borderRadius: Radii.sm / 2,
    backgroundColor: Colors.border,
    marginTop: Spacing.md,
    overflow: 'hidden',
  },
  progress: {
    width: '35%',
    height: '100%',
    borderRadius: Radii.sm / 2,
    backgroundColor: Colors.coral,
  },
});
