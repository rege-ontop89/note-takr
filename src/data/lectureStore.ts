import { Lecture } from '../types';
import { mockLectures } from './mockData';

export const lectures: Lecture[] = [...mockLectures];

export function addLecture(lecture: Lecture) {
  lectures.unshift(lecture);
}