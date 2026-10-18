import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import EmptyState from '../EmptyState';
import FolderCard from '../FolderCard';
import { Colors, FontSizes, Spacing } from '../../theme/colors';
import { FolderSummary } from '../../types';

type FolderListProps = {
  folders: FolderSummary[];
  isRefreshing: boolean;
  onRefresh: () => void;
  onSelectFolder: (id: string) => void;
  emptyTitle: string;
  emptyMessage: string;
};

export default function FolderList({
  folders,
  isRefreshing,
  onRefresh,
  onSelectFolder,
  emptyTitle,
  emptyMessage,
}: FolderListProps) {
  const folderCountLabel = `${folders.length} ${
    folders.length === 1 ? 'folder' : 'folders'
  }`;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor={Colors.coral}
          colors={[Colors.coral]}
        />
      }
      contentContainerStyle={styles.content}
    >
      <Text style={styles.sectionLabel}>{folderCountLabel}</Text>

      {folders.length === 0 ? (
        <EmptyState title={emptyTitle} message={emptyMessage} />
      ) : (
        <FlatList
          data={folders}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FolderCard
              name={item.name}
              lectureCount={item.lectureCount}
              onPress={() => onSelectFolder(item.id)}
            />
          )}
          contentContainerStyle={styles.row}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xxl,
  },
  sectionLabel: {
    fontSize: FontSizes.sm - 1,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },
  row: {
    alignItems: 'center',
  },
});
