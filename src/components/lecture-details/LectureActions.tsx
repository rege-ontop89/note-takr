import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Colors,
  FontSizes,
  Spacing,
  Radii,
  IconSizes,
} from '../../theme/colors';

export default function LectureActions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Edit lecture"
      >
        <Ionicons
          name="create-outline"
          size={IconSizes.sm + 3}
          color={Colors.text}
        />
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Move lecture"
      >
        <Ionicons
          name="folder-outline"
          size={IconSizes.sm + 3}
          color={Colors.text}
        />
        <Text style={styles.text}>Move</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        accessibilityRole="button"
        accessibilityLabel="Delete lecture"
      >
        <Ionicons
          name="trash-outline"
          size={IconSizes.sm + 3}
          color={Colors.coral}
        />
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Spacing.xs,
    marginTop: Spacing.lg,
  },
  button: {
    flex: 1,
    minHeight: 48,
    borderRadius: Radii.md + 3,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xxs + 2,
  },
  text: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    color: Colors.text,
  },
  deleteButton: {
    borderColor: Colors.coralLight,
  },
  deleteText: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    color: Colors.coral,
  },
});
