import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HomeModule} from './home/home.module';
import {MangaModule} from './manga/manga.module';
import {HomeRoutingModule} from './home/home-routing.module';
import {MangaRoutingModule} from './manga/manga-routing.module';
import {WebComponentsModule} from './webComponents/web-components.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    MangaRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    MangaModule,
    WebComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'es',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
