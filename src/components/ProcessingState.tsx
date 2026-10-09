import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../theme/colors';

type ProcessingStateProps = {
  title?: string;
  message?: string;
};

export default function ProcessingState({
  title = 'Processing recording...',
  message = 'We are preparing your transcript and saving your lecture.',
}: ProcessingStateProps) {
  return (
    <View
      style={styles.container}
      accessibilityRole="progressbar"
      accessibilityLabel={title}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name="document-text-outline"
          size={30}
          color={Colors.text}
        />
      </View>

      <ActivityIndicator
        size="small"
        color={Colors.coral}
        style={styles.spinner}
      />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 45,
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: Colors.lavender,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spinner: {
    marginTop: 18,
  },

  title: {
    marginTop: 13,
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
  },

  message: {
    marginTop: 7,
    fontSize: 13,
    lineHeight: 19,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
