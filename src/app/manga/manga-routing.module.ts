import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaRoutes } from './mangaRoutes';
import { RouterOutletComponent } from '../webComponents/router-outlet/router-outlet.component';

const routes: Routes = [
  { path: `${MangaRoutes.MANGA}`,
    component: RouterOutletComponent,
    children: [
      { path: `${MangaRoutes.LIST}`, component: MangaListComponent },
      { path: `${MangaRoutes.DETAIL}`, component: MangaDetailComponent },
      { path: '', redirectTo: `${MangaRoutes.LIST}`, pathMatch: 'full' }
  ]},
  { path: '', redirectTo: `${MangaRoutes.MANGA}`, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MangaRoutingModule {
}
