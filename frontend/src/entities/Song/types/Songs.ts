export interface Song {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  key: string; 
  imgPath: string | null;
  tabFilePath: string;
  textAndChords: string;
  videoLessonUrl: string;
}
