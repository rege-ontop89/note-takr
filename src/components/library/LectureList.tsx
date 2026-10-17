import { ReactNode } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text } from 'react-native';

import EmptyState from '../EmptyState';
import LectureCard from '../LectureCard';
import { Colors, FontSizes, Spacing } from '../../theme/colors';
import { Lecture } from '../../types';

type LectureListProps = {
  lectures: Lecture[];
  emptyTitle: string;
  emptyMessage: string;
  isRefreshing: boolean;
  onRefresh: () => void;
  onOpenLecture: (id: string) => void;
  header?: ReactNode;
  sectionLabel?: string;
};

export default function LectureList({
  lectures,
  emptyTitle,
  emptyMessage,
  isRefreshing,
  onRefresh,
  onOpenLecture,
  header,
  sectionLabel,
}: LectureListProps) {
  const listHeader = (
    <>
      {header}

      {sectionLabel ? (
        <Text style={styles.sectionLabel}>{sectionLabel}</Text>
      ) : null}
    </>
  );

  return (
    <FlatList
      data={lectures}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <LectureCard lecture={item} onPress={() => onOpenLecture(item.id)} />
      )}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor={Colors.coral}
          colors={[Colors.coral]}
        />
      }
      ListHeaderComponent={listHeader}
      ListEmptyComponent={
        <EmptyState title={emptyTitle} message={emptyMessage} />
      }
    />
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
});
