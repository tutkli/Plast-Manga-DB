import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HomeRoutes } from './homeRoutes';

const routes: Routes = [
  { path: HomeRoutes.HOME, component: HomeComponent },
  { path: '', redirectTo: HomeRoutes.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule {
}
