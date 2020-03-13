import { Injectable } from '@angular/core';
import {Manga, MangaAPI} from '../../models/manga/manga.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MangaSerializerService {

  constructor() { }

  deserialize = (input: MangaAPI): Manga => {
    const output = new Manga();
    output.id = input.mal_id;
    output.title = input.title;
    output.status = input.status;
    output.chapters = input.chapters;
    output.publishing = input.publishing;
    output.rank = input.rank;
    output.score = input.score;
    output.synopsis = input.synopsis;
    output.image = input.image_url;

    return output;
  };

  deserializeList = (input: MangaAPI[]): Manga[] => {
    return input.map((manga: MangaAPI) => this.deserialize(manga));
  }
}
