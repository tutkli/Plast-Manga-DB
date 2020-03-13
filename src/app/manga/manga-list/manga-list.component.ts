import { Component, OnDestroy, OnInit } from '@angular/core';
import { MangaService } from '../../core/services/manga/manga.service';
import { Manga } from '../../core/models/manga/manga.model';
import { TableDataSource } from '../../core/models/table/table-data-source';
import { MangaColumns } from '../../core/models/manga/mangaColumns';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent implements OnInit, OnDestroy {

  mangas: Manga[] = [];
  mangaDataSource: TableDataSource;
  mangaColumns = MangaColumns;
  displayedColumns = [
    MangaColumns.IMAGE,
    MangaColumns.RANK,
    MangaColumns.SCORE,
    MangaColumns.TITLE
  ];
  private page = 1;
  private onDestroyNotifier: Subject<void> = new Subject();

  constructor(private mangaService: MangaService,
              private router: Router) { }

  ngOnInit(): void {
    this.mangaService.topMangasObservable
      .pipe(takeUntil(this.onDestroyNotifier))
      .subscribe((mangas: Manga[]) => {
        if (!mangas) {
          this.mangaService.getTopMangas();
          return;
        }
        this.mangas.push(...mangas);
        this.updateMangaDataSource();
    });
  }

  ngOnDestroy(): void {
    this.onDestroyNotifier.next();
    this.onDestroyNotifier.complete();
  }

  updateMangaDataSource(): void {
    this.mangaDataSource = new TableDataSource(this.mangas);
  }

  openDetail(manga: Manga): void {
    this.mangaService.selectManga(manga.id);
    this.router.navigate([`manga/${manga.id}`]);
  }

  onScroll(): void {
    this.page++;
    this.mangaService.getTopMangas(this.page);
  }

}
