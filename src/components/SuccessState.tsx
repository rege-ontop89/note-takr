import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../theme/colors';

type SuccessStateProps = {
  title?: string;
  message?: string;
};

export default function SuccessState({
  title = 'All done!',
  message = 'Your lecture has been saved successfully.',
}: SuccessStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="checkmark"
          size={34}
          color={Colors.text}
        />
      </View>

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

  title: {
    marginTop: 15,
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
