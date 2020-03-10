import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'mitos', loadChildren: './pages/mitos/mitos.module#MitosPageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
  { path: 'donor', loadChildren: './pages/donor/donor.module#DonorPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'can-donate', loadChildren: './pages/can-donate/can-donate.module#CanDonatePageModule' },
  { path: 'cant-donate', loadChildren: './pages/cant-donate/cant-donate.module#CantDonatePageModule' },
  { path: 'send-notification', loadChildren: './pages/send-notification/send-notification.module#SendNotificationPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'personal', loadChildren: './pages/personal/personal.module#PersonalPageModule' },
  { path: 'campaign-dates-modal', loadChildren: './pages/campaign-dates-modal/campaign-dates-modal.module#CampaignDatesModalPageModule' },
  { path: 'campaigns/:id', loadChildren: './pages/campaigns/campaigns.module#CampaignsPageModule' },
  { path: 'who-can', loadChildren: './pages/who-can/who-can.module#WhoCanPageModule' },
  { path: 'how-do-it', loadChildren: './pages/how-do-it/how-do-it.module#HowDoItPageModule' },
  { path: 'why-do-it', loadChildren: './pages/why-do-it/why-do-it.module#WhyDoItPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
