import{ BrowserModule }from'@angular/platform-browser';

import{ BrowserAnimationsModule }from'@angular/platform-browser/animations';

import { DetailComponent } from './detail/detail.component';

import{ NgModule }from'@angular/core';

import{ FormsModule }from'@angular/forms';

import{ HttpClientModule }from'@angular/common/http';

import{ NgZorroAntdModule }from'ng-zorro-antd';

import{ AppComponent }from'./app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondComponent } from './second/second.component';

@NgModule({

declarations:[

  AppComponent,
  DetailComponent,
  SecondComponent

],

imports:[

  BrowserModule,

  FormsModule,

  HttpClientModule,

  BrowserAnimationsModule,

  NgZorroAntdModule.forRoot(),

  AppRoutingModule

],

bootstrap:[AppComponent]

})

export class AppModule { }