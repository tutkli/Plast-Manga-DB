import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './home/home/home.component';
import {
  MatAutocompleteModule, MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatRippleModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { NavBarComponent } from './webComponents/nav-bar/nav-bar.component';
import { HomeModule } from './home/home.module';
import { SearchEngineComponent } from './webComponents/search-engine/search-engine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MangaModule } from './manga/manga.module';
import { MangaDetailComponent} from './manga/manga-detail/manga-detail.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { MangaRoutingModule } from './manga/manga-routing.module';
import { LanguageSelectorComponent } from './webComponents/language-selector/language-selector.component';
import { MangaListComponent } from './manga/manga-list/manga-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MangaDetailPlaceholderComponent } from './manga/manga-detail-placeholder/manga-detail-placeholder.component';
import { RouterOutletComponent } from './webComponents/router-outlet/router-outlet.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SearchEngineComponent,
    MangaDetailComponent,
    LanguageSelectorComponent,
    MangaListComponent,
    MangaDetailPlaceholderComponent,
    RouterOutletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    MangaRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    HomeModule,
    MangaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MatToolbarModule,
    MatCardModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
