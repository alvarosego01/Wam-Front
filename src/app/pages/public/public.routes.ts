import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public.index';



// LoginVerifyGuard


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },

    { path: '**', component: HomeComponent },
    { path: '', component: HomeComponent }
];



export const _PUBLIC_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );