import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendNotificationPage } from './send-notification.page';
import {ComponentsModule} from '../../components/components.module';
import {CampaignDatesModalPageModule} from '../campaign-dates-modal/campaign-dates-modal.module';

const routes: Routes = [
  {
    path: '',
    component: SendNotificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [SendNotificationPage]
})
export class SendNotificationPageModule {}
