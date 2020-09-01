import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavDashboardComponent } from './components/shared/nav-dashboard/nav-dashboard.component';



// importación de modulos
import { AboutModule } from './pages/public/about/about.module';
import { PublicModule } from './pages/public/public.module';
import { HeaderBaseComponent } from './components/header-base/header-base.component';
import { ServicesModule } from './services/services.module';


// import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NavDashboardComponent,
    HeaderBaseComponent,

  ],
  imports: [
    BrowserModule,
    ServicesModule,
    PublicModule,
    AboutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
