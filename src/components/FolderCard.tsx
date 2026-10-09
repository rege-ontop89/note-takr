import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../theme/colors';

type FolderCardProps = {
  name: string;
  lectureCount: number;
  onPress: () => void;
};

export default function FolderCard({
  name,
  lectureCount,
  onPress,
}: FolderCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`Open ${name} folder`}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name="folder-outline"
          size={21}
          color={Colors.text}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.count}>
          {lectureCount} {lectureCount === 1 ? 'lecture' : 'lectures'}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color={Colors.textMuted}
      />
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
    marginRight: 12,
    width: 190,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: Colors.coralLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  content: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },

  count: {
    marginTop: 4,
    fontSize: 11,
    color: Colors.textSecondary,
  },
});
