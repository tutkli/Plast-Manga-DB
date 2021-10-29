import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SearchEngineComponent} from './components/search-engine/search-engine.component';
import {LanguageSelectorComponent} from './components/language-selector/language-selector.component';
import {RouterOutletComponent} from './components/router-outlet/router-outlet.component';
import {CoreModule, FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const COMPONENTS = [
  NavBarComponent,
  SearchEngineComponent,
  LanguageSelectorComponent,
  RouterOutletComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    InfiniteScrollModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...COMPONENTS,
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ]
})
export class WebComponentsModule { }
