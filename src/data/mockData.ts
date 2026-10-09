import { Lecture } from '../types';

export const mockLectures: Lecture[] = [
  {
    id: '1',
    title: 'Introduction to Software Engineering',
    course: 'SEN 301',
    date: 'Today',
    duration: '48 min',
    hasTranscript: true,
    isFavorite: true,
    folder: 'Software Engineering',
    transcript:
      'Software engineering is the systematic approach to the development, operation, maintenance, and retirement of software. In this lecture, we discuss software processes, requirements, design, implementation, testing, and maintenance.',
  },
  {
    id: '2',
    title: 'Database Management Systems',
    course: 'SEN 305',
    date: 'Yesterday',
    duration: '52 min',
    hasTranscript: true,
    isFavorite: false,
    folder: 'Database',
    transcript:
      'A database management system provides a structured way to store, organize, retrieve, and manage data. We examine relational databases, tables, keys, relationships, and SQL queries.',
  },
  {
    id: '3',
    title: 'Software Quality Assurance',
    course: 'SEN 304',
    date: 'Sep 29',
    duration: '41 min',
    hasTranscript: true,
    isFavorite: true,
    folder: 'Software Engineering',
    transcript:
      'Software quality assurance focuses on ensuring that software products and development processes meet defined quality standards. Testing, verification, validation, and reviews are important parts of quality assurance.',
  },
  {
    id: '4',
    title: 'Computer Networks',
    course: 'CSE 302',
    date: 'Sep 27',
    duration: '36 min',
    hasTranscript: false,
    isFavorite: false,
    folder: 'Networking',
    transcript: '',
  },
];

export const folders = [
  {
    id: '1',
    name: 'Software Engineering',
    lectureCount: 2,
  },
  {
    id: '2',
    name: 'Database',
    lectureCount: 1,
  },
  {
    id: '3',
    name: 'Networking',
    lectureCount: 1,
  },
];
