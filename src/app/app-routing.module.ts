import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'donor', loadChildren: './pages/donor/donor.module#DonorPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'can-donate', loadChildren: './pages/can-donate/can-donate.module#CanDonatePageModule' },
  { path: 'cant-donate', loadChildren: './pages/cant-donate/cant-donate.module#CantDonatePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
