import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Colors, FontSizes, Radii, IconSizes } from '../../theme/colors';

export default function LectureHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Ionicons name="chevron-back" size={IconSizes.lg} color={Colors.text} />
      </TouchableOpacity>

      <Text style={styles.title}>Lecture details</Text>

      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="More options"
      >
        <Ionicons
          name="ellipsis-horizontal"
          size={IconSizes.md}
          color={Colors.text}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: Radii.md,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.text,
  },
});
