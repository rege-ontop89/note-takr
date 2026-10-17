import { StyleSheet, View } from 'react-native';

import LectureCardSkeleton from '../LectureCardSkeleton';
import { Spacing } from '../../theme/colors';

const SKELETON_COUNT = 3;

export default function LibraryListSkeleton() {
  return (
    <View style={styles.content}>
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <LectureCardSkeleton key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xxl,
  },
});
