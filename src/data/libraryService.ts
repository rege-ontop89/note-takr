import { lectures as lectureStore } from './lectureStore';
import { Lecture } from '../types';

const LOAD_DELAY_MS = 650;
const REFRESH_DELAY_MS = 800;

export type PendingLibrary = {
  promise: Promise<Lecture[]>;
  cancel: () => void;
};

function scheduleLibraryLoad(delayMs: number): PendingLibrary {
  let loadTimer: ReturnType<typeof setTimeout>;

  const promise = new Promise<Lecture[]>((resolve) => {
    loadTimer = setTimeout(() => resolve([...lectureStore]), delayMs);
  });

  return {
    promise,
    cancel: () => clearTimeout(loadTimer),
  };
}

export function getLectureCount(
  lectures: Lecture[],
  folderName: string,
): number {
  return lectures.filter((lecture) => lecture.folder === folderName).length;
}

export function loadLibrary(): PendingLibrary {
  return scheduleLibraryLoad(LOAD_DELAY_MS);
}

export function refreshLibrary(attempt: number): Promise<Lecture[]> {
  return scheduleLibraryLoad(REFRESH_DELAY_MS).promise.then((data) => {
    if (attempt === 1) {
      throw new Error('Could not refresh your library');
    }

    return data;
  });
}
