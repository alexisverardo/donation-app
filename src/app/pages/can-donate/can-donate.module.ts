import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CanDonatePage } from './can-donate.page';
import {HeaderComponent} from '../../components/header/header.component';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CanDonatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [CanDonatePage]
})
export class CanDonatePageModule {}
