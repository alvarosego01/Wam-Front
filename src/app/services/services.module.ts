import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserService, SearchService } from './services.index';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    // UserService
  ],

  providers: [
    UserService,
    SearchService,
  ]
})
export class ServicesModule { }
