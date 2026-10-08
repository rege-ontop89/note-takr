import { StyleSheet, View } from 'react-native';

import { Colors } from '../theme/colors';

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
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
  },

  icon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: Colors.lavender,
    opacity: 0.7,
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    width: '72%',
    height: 13,
    borderRadius: 6,
    backgroundColor: Colors.border,
  },

  course: {
    width: '35%',
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.border,
    marginTop: 8,
  },

  details: {
    flexDirection: 'row',
    marginTop: 9,
    gap: 7,
  },

  detail: {
    width: 42,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },

  detailSmall: {
    width: 30,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },
});
