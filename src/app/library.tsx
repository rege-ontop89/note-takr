import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, router } from 'expo-router';

import LibraryBody from '../components/library/LibraryBody';
import LibrarySearchRow from '../components/library/LibrarySearchRow';
import LibraryTabs, { LibraryTab } from '../components/library/LibraryTabs';
import {
  getLectureCount,
  loadLibrary,
  refreshLibrary,
} from '../data/libraryService';
import { folders } from '../data/mockData';
import { Colors, FontSizes, Spacing } from '../theme/colors';
import { FolderSummary, Lecture } from '../types';

type LoadStatus = 'loading' | 'ready' | 'error';

export default function LibraryScreen() {
  const [tab, setTab] = useState<LibraryTab>('all');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<LoadStatus>('loading');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const refreshCount = useRef(0);
  const queryText = query.trim();

  const showLibrary = useCallback((data: Lecture[]) => {
    setLectures(data);
    setStatus('ready');
  }, []);

  const startLoading = () => {
    setStatus('loading');
    setIsRefreshing(false);
  };

  useEffect(() => {
    const request = loadLibrary();

    request.promise.then(showLibrary);

    return () => request.cancel();
  }, [showLibrary, tab, selectedFolderId]);

  const handleRefresh = () => {
    refreshCount.current += 1;
    setIsRefreshing(true);

    refreshLibrary(refreshCount.current)
      .then(showLibrary)
      .catch(() => setStatus('error'))
      .finally(() => setIsRefreshing(false));
  };

  const handleRetry = () => {
    startLoading();
    loadLibrary().promise.then(showLibrary);
  };

  const handleSelectTab = (nextTab: LibraryTab) => {
    if (nextTab === tab) return;
    startLoading();
    setSelectedFolderId(null);
    setTab(nextTab);
  };

  const handleSelectFolder = (id: string) => {
    startLoading();
    setSelectedFolderId(id);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  const handleBackToFolders = () => {
    startLoading();
    setSelectedFolderId(null);
  };

  const handleOpenLecture = (id: string) => {
    router.push(`/lecture/${id}`);
  };

  const selectedFolder = useMemo(
    () => folders.find((folder) => folder.id === selectedFolderId) ?? null,
    [selectedFolderId],
  );

  const folderSummaries = useMemo<FolderSummary[]>(
    () =>
      folders.map((folder) => ({
        id: folder.id,
        name: folder.name,
        lectureCount: getLectureCount(lectures, folder.name),
      })),
    [lectures],
  );

  const visibleLectures = useMemo(() => {
    const lowerQuery = queryText.toLowerCase();

    const lecturesInTab = lectures.filter((lecture) => {
      if (tab === 'recent') {
        return lecture.date === 'Today' || lecture.date === 'Yesterday';
      }

      if (tab === 'favorites') {
        return lecture.isFavorite;
      }

      if (tab === 'folders') {
        return selectedFolder ? lecture.folder === selectedFolder.name : false;
      }

      return true;
    });

    if (!lowerQuery) return lecturesInTab;

    return lecturesInTab.filter(
      (lecture) =>
        lecture.title.toLowerCase().includes(lowerQuery) ||
        lecture.course.toLowerCase().includes(lowerQuery) ||
        lecture.folder.toLowerCase().includes(lowerQuery),
    );
  }, [lectures, tab, queryText, selectedFolder]);

  const visibleFolders = useMemo(() => {
    const lowerQuery = queryText.toLowerCase();

    if (!lowerQuery) return folderSummaries;

    return folderSummaries.filter((folder) =>
      folder.name.toLowerCase().includes(lowerQuery),
    );
  }, [folderSummaries, queryText]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
      </View>

      <LibrarySearchRow
        query={query}
        onChangeQuery={setQuery}
        onClear={handleClearQuery}
      />

      <LibraryTabs activeTab={tab} onSelectTab={handleSelectTab} />

      <LibraryBody
        isLoading={status === 'loading'}
        isError={status === 'error'}
        tab={tab}
        query={queryText}
        lectures={visibleLectures}
        folders={visibleFolders}
        selectedFolderName={selectedFolder?.name ?? null}
        isRefreshing={isRefreshing}
        onRefresh={handleRefresh}
        onRetry={handleRetry}
        onOpenLecture={handleOpenLecture}
        onSelectFolder={handleSelectFolder}
        onBackToFolders={handleBackToFolders}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: Spacing.xxxl + Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  title: {
    fontSize: FontSizes.title,
    fontWeight: '700',
    color: Colors.text,
  },
});
