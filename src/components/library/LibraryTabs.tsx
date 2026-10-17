import { ComponentProps } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Colors,
  FontSizes,
  IconSizes,
  Radii,
  Spacing,
} from '../../theme/colors';

export type LibraryTab = 'all' | 'recent' | 'favorites' | 'folders';

type IconName = ComponentProps<typeof Ionicons>['name'];

type TabConfig = {
  key: LibraryTab;
  label: string;
  icon: IconName;
};

const TABS: TabConfig[] = [
  { key: 'all', label: 'All', icon: 'albums-outline' },
  { key: 'recent', label: 'Recent', icon: 'time-outline' },
  { key: 'favorites', label: 'Favorites', icon: 'star-outline' },
  { key: 'folders', label: 'Folders', icon: 'folder-outline' },
];

type LibraryTabsProps = {
  activeTab: LibraryTab;
  onSelectTab: (tab: LibraryTab) => void;
};

export default function LibraryTabs({
  activeTab,
  onSelectTab,
}: LibraryTabsProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tabItem) => {
        const isActive = activeTab === tabItem.key;

        return (
          <TouchableOpacity
            key={tabItem.key}
            style={[styles.tab, isActive && styles.tabActive]}
            onPress={() => onSelectTab(tabItem.key)}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel={`${tabItem.label} filter`}
            accessibilityState={{ selected: isActive }}
          >
            <Ionicons
              name={tabItem.icon}
              size={IconSizes.md - 3}
              color={isActive ? Colors.white : Colors.textSecondary}
            />

            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tabItem.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md,
    marginBottom: Spacing.xxs,
  },
  tab: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.md,
    paddingHorizontal: Spacing.sm + Spacing.xxs / 2,
    marginRight: Spacing.xs + 1,
    gap: Spacing.xxs + 2,
  },
  tabActive: {
    backgroundColor: Colors.coral,
    borderColor: Colors.coral,
  },
  label: {
    fontSize: FontSizes.sm - 1,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  labelActive: {
    color: Colors.white,
  },
});
