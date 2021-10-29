import {NgModule} from '@angular/core';
import {MangaRoutingModule} from './manga-routing.module';
import {MangaDetailComponent} from './manga-detail/manga-detail.component';
import {MangaListComponent} from './manga-list/manga-list.component';
import {MangaDetailPlaceholderComponent} from './manga-detail-placeholder/manga-detail-placeholder.component';
import {WebComponentsModule} from '../webComponents/web-components.module';

@NgModule({
  declarations: [
    MangaDetailComponent,
    MangaListComponent,
    MangaDetailPlaceholderComponent,
  ],
  imports: [
    WebComponentsModule,
    MangaRoutingModule,
  ]
})
export class MangaModule { }
