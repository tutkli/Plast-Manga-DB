export class Manga {
  id: number;
  title: string;
  status: string;
  chapters: number;
  publishing: boolean;
  rank: number;
  score: number;
  synopsis: string;
  image: string;
}

export interface MangaAPI {
  mal_id: number;
  title: string;
  status: string;
  chapters: number;
  publishing: boolean;
  rank: number;
  score: number;
  synopsis: string;
  image_url: string;
}
