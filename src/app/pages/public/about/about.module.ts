import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  AboutComponent, UsComponent, TermsConditionsComponent,
  HelpYouComponent
} from './about.index';



@NgModule({
  declarations: [AboutComponent, UsComponent, TermsConditionsComponent, HelpYouComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
