import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { Manga } from '../../core/models/manga/manga.model';
import { MangaService } from '../../core/services/manga/manga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  searchTextCtrl: FormControl;
  filteredItems: Manga[];

  constructor(private mangaService: MangaService,
              private router: Router) { }

  ngOnInit(): void {
    this.searchTextCtrl = new FormControl();
    this.searchTextCtrl.valueChanges
      .pipe(
        filter((text: string) => text && text.length >= 3),
        debounceTime(400))
      .subscribe((text: string) => {
      this.searchItems(text);
    });

    this.mangaService.searchedMangasObservable.subscribe((mangas: Manga[]) => {
      this.filteredItems = mangas;
    });
  }

  searchItems(text: string): void {
    const searchText = text.toLowerCase();
    this.mangaService.searchMangas(searchText);
  }

  openDetail(manga: Manga) {
    this.mangaService.updateSelectedManga(manga);
    this.router.navigate([`manga/${manga.id}`]);
  }

  clearInput(input: HTMLInputElement) {
    input.value = '';
    this.filteredItems = [];
  }

}
