import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { _PUBLIC_ROUTES } from './public.routes';
import { HomeComponent, LoginComponent, RegisterComponent, ArtistsComponent } from './public.index';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ArtistsComponent,
  ],
  imports: [
    CommonModule,
    _PUBLIC_ROUTES
  ],
  exports: [
    PublicComponent,
HomeComponent,
LoginComponent,
RegisterComponent,
ArtistsComponent
  ]
})
export class PublicModule { }
