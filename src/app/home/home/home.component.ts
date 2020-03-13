import { Component, OnDestroy, OnInit } from '@angular/core';
import { MangaService } from '../../core/services/manga/manga.service';
import { Manga } from '../../core/models/manga/manga.model';
import { NavBarService } from '../../core/services/nav-bar/nav-bar.service';
import { Router } from '@angular/router';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  topMangas: Manga[];
  private onDestroyNotifier: Subject<void> = new Subject();

  constructor(private mangaService: MangaService,
              private navBarService: NavBarService,
              private router: Router) { }

  ngOnInit(): void {
    this.mangaService.getTopMangas();
    this.navBarService.setHomeActive(true);

    this.mangaService.topMangasObservable
      .pipe(takeUntil(this.onDestroyNotifier))
      .subscribe((topMangas: Manga[]) => {
      this.topMangas = topMangas;
    });
  }

  ngOnDestroy(): void {
    this.onDestroyNotifier.next();
    this.onDestroyNotifier.complete();
    this.navBarService.setHomeActive(false);
  }

  openDetail(manga: Manga): void {
    this.mangaService.selectManga(manga.id);
    this.router.navigate([`manga/${manga.id}`]);
  }

}
