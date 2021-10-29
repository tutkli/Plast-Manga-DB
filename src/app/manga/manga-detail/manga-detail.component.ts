import {Component, OnDestroy, OnInit} from '@angular/core';
import {MangaService} from '../../core/services/manga/manga.service';
import {Manga} from '../../core/models/manga/manga.model';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {first, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.scss']
})
export class MangaDetailComponent implements OnInit, OnDestroy {

  manga: Manga;
  private onDestroyNotifier: Subject<void> = new Subject();

  constructor(private mangaService: MangaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mangaService.selectedMangaObservable
      .pipe(takeUntil(this.onDestroyNotifier))
      .subscribe((manga: Manga) => {
        this.manga = manga;
        if (!manga) {
          this.activatedRoute.url
            .pipe(first())
            .subscribe((urlSegment: UrlSegment[]) => {
            this.mangaService.selectManga(parseInt(urlSegment[0].path, 10));
          });
        }
    });
  }

  ngOnDestroy(): void {
    this.onDestroyNotifier.next();
    this.onDestroyNotifier.complete();
    this.mangaService.updateSelectedManga(null);
  }

}
