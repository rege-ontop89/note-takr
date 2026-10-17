import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, FontSizes, Spacing, Radii, IconSizes } from '../theme/colors';

type StateVariant = 'empty' | 'error' | 'processing' | 'success';

type EmptyStateProps = {
  variant?: StateVariant;
  title: string;
  message: string;
  onRetry?: () => void;
};

const stateConfig = {
  empty: {
    icon: 'document-text-outline',
    iconColor: Colors.text,
    iconBackground: Colors.lavender,
  },
  error: {
    icon: 'alert-circle-outline',
    iconColor: Colors.coral,
    iconBackground: Colors.coralLight,
  },
  processing: {
    icon: 'document-text-outline',
    iconColor: Colors.text,
    iconBackground: Colors.lavender,
  },
  success: {
    icon: 'checkmark-circle-outline',
    iconColor: Colors.text,
    iconBackground: Colors.lavender,
  },
} as const;

export default function EmptyState({
  variant = 'empty',
  title,
  message,
  onRetry,
}: EmptyStateProps) {
  const config = stateConfig[variant];

  return (
    <View
      style={styles.container}
      accessibilityRole={variant === 'processing' ? 'progressbar' : undefined}
      accessibilityLabel={variant === 'processing' ? title : undefined}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: config.iconBackground },
        ]}
      >
        {variant === 'processing' ? (
          <ActivityIndicator size="large" color={Colors.coral} />
        ) : (
          <Ionicons
            name={config.icon}
            size={IconSizes.xl}
            color={config.iconColor}
          />
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.message}>{message}</Text>

      {variant === 'error' && onRetry && (
        <TouchableOpacity
          style={styles.retryButton}
          onPress={onRetry}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Try again"
        >
          <Ionicons
            name="refresh-outline"
            size={IconSizes.sm}
            color={Colors.white}
          />
          <Text style={styles.retryText}>Try again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxxl,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: Radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  title: {
    marginTop: Spacing.xs,
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
  },
  message: {
    marginTop: Spacing.xs,
    fontSize: FontSizes.sm,
    lineHeight: FontSizes.xl,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
  retryButton: {
    marginTop: Spacing.md,
    minHeight: 44,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radii.md,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xs,
  },
  retryText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.white,
  },
});
