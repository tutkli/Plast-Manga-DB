import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga, MangaAPI } from '../../models/manga/manga.model';
import { GenericHttpService } from '../../services/http/http.service';
import { map } from 'rxjs/operators';
import { MangaSerializerService } from '../../services/manga/manga-serializer.service';

@Injectable({
  providedIn: 'root'
})
export class MangaResourceService {

  constructor(private httpService: GenericHttpService,
              private mangaSerializerService: MangaSerializerService) { }

  getTopMangas(page: number = 1): Observable<Manga[]> {
    return this.httpService.serverRequest('GET', `top/manga/${page}/manga`)
      .pipe(map((result: any) => this.mangaSerializerService.deserializeList(result.top)));
  }

  getManga(id: number): Observable<Manga> {
    return this.httpService.serverRequest('GET', `manga/${id}`)
      .pipe(map((result: MangaAPI) => this.mangaSerializerService.deserialize(result)));
  }

  searchMangas(q: string, page: number = 1): Observable<Manga[]> {
    const params = {
      q,
      page: page.toString()
    };

    return this.httpService.serverRequest('GET', `search/manga`, {params})
      .pipe(map((result: any) => this.mangaSerializerService.deserializeList(result.results)));
  }
}
