import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Manga } from '../../models/manga/manga.model';
import { MangaResourceService } from '../../resources/manga/manga-resource.service';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private selectedMangaSubject: BehaviorSubject<Manga> = new BehaviorSubject<Manga>(undefined);
  selectedMangaObservable: Observable<Manga> = this.selectedMangaSubject as Observable<Manga>;

  private topMangasSubject: BehaviorSubject<Manga[]> = new BehaviorSubject<Manga[]>(undefined);
  topMangasObservable: Observable<Manga[]> = this.topMangasSubject as Observable<Manga[]>;

  private searchedMangasSubject: BehaviorSubject<Manga[]> = new BehaviorSubject<Manga[]>(undefined);
  searchedMangasObservable: Observable<Manga[]> = this.searchedMangasSubject as Observable<Manga[]>;

  constructor(private mangaResourceService: MangaResourceService) { }

  getTopMangas(page: number = 1): void {
    this.mangaResourceService.getTopMangas(page).subscribe((topMangas: Manga[]) => {
      this.updateTopMangas(topMangas);
    });
  }

  updateTopMangas(topMangas: Manga[]): void {
    this.topMangasSubject.next(topMangas);
  }

  selectManga(id: number): void {
    this.mangaResourceService.getManga(id).subscribe((manga: Manga) => {
      this.updateSelectedManga(manga);
    });
  }

  updateSelectedManga(manga: Manga): void {
    this.selectedMangaSubject.next(manga);
  }

  searchMangas(text: string): void {
    this.mangaResourceService.searchMangas(text)
      .subscribe((mangas: Manga[]) => {
        this.updateSearchedMangas(mangas);
      });
  }

  updateSearchedMangas(mangas: Manga[]): void {
    this.searchedMangasSubject.next(mangas);
  }
}
