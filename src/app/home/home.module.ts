import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {WebComponentsModule} from '../webComponents/web-components.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    WebComponentsModule,
  ]
})
export class HomeModule { }
