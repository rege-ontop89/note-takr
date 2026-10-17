import EmptyState from '../EmptyState';
import FolderHeader from './FolderHeader';
import FolderList from './FolderList';
import LectureList from './LectureList';
import LibraryListSkeleton from './LibraryListSkeleton';
import { LibraryTab } from './LibraryTabs';
import { FolderSummary, Lecture } from '../../types';

type LibraryBodyProps = {
  isLoading: boolean;
  isError: boolean;
  tab: LibraryTab;
  query: string;
  lectures: Lecture[];
  folders: FolderSummary[];
  selectedFolderName: string | null;
  isRefreshing: boolean;
  onRefresh: () => void;
  onRetry: () => void;
  onOpenLecture: (id: string) => void;
  onSelectFolder: (id: string) => void;
  onBackToFolders: () => void;
};

type EmptyStateCopy = {
  title: string;
  message: string;
};

function getLectureEmptyState(
  tab: LibraryTab,
  isEmptySearch: boolean,
  query: string,
): EmptyStateCopy {
  if (isEmptySearch) {
    return {
      title: 'No results',
      message: `No lectures match "${query}". Try a different search or filter.`,
    };
  }

  if (tab === 'recent') {
    return {
      title: 'No recent lectures',
      message: 'Record a lecture and it will show up here.',
    };
  }

  if (tab === 'favorites') {
    return {
      title: 'No favorites yet',
      message: 'Mark a lecture with a star and it will show up here.',
    };
  }

  return {
    title: 'No lectures yet',
    message: 'Your recorded lectures will appear here.',
  };
}

function getLectureListLabel(tab: LibraryTab, lectureCount: number): string {
  if (tab === 'recent') {
    return 'Recent lectures';
  }

  if (tab === 'favorites') {
    return 'Favorites';
  }

  return `${lectureCount} ${lectureCount === 1 ? 'lecture' : 'lectures'}`;
}

export default function LibraryBody({
  isLoading,
  isError,
  tab,
  query,
  lectures,
  folders,
  selectedFolderName,
  isRefreshing,
  onRefresh,
  onRetry,
  onOpenLecture,
  onSelectFolder,
  onBackToFolders,
}: LibraryBodyProps) {
  if (isLoading) {
    return <LibraryListSkeleton />;
  }

  if (isError) {
    return (
      <EmptyState
        variant="error"
        title="Could not load your library"
        message="Something went wrong while fetching your lectures. Check your connection and try again."
        onRetry={onRetry}
      />
    );
  }

  const isEmptySearch = query.length > 0 && lectures.length === 0;

  if (tab === 'folders' && selectedFolderName) {
    return (
      <LectureList
        lectures={lectures}
        emptyTitle={isEmptySearch ? 'No results' : 'No lectures in this folder'}
        emptyMessage={
          isEmptySearch
            ? `No lectures match "${query}".`
            : 'Start a recording inside this folder to add a lecture.'
        }
        isRefreshing={isRefreshing}
        onRefresh={onRefresh}
        onOpenLecture={onOpenLecture}
        header={
          <FolderHeader
            folderName={selectedFolderName}
            onBack={onBackToFolders}
          />
        }
      />
    );
  }

  if (tab === 'folders') {
    return (
      <FolderList
        folders={folders}
        isRefreshing={isRefreshing}
        onRefresh={onRefresh}
        onSelectFolder={onSelectFolder}
        emptyTitle="No folders found"
        emptyMessage={`Nothing matches "${query}".`}
      />
    );
  }

  const emptyState = getLectureEmptyState(tab, isEmptySearch, query);

  return (
    <LectureList
      lectures={lectures}
      emptyTitle={emptyState.title}
      emptyMessage={emptyState.message}
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      onOpenLecture={onOpenLecture}
      sectionLabel={getLectureListLabel(tab, lectures.length)}
    />
  );
}
