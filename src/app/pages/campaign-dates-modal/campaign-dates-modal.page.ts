import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {init} from 'protractor/built/launcher';

export interface IDateCampaign {
  initDate: string | Date;
  endDate: string | Date;
  id: number;
}

@Component({
  selector: 'app-campaign-dates-modal',
  templateUrl: './campaign-dates-modal.page.html',
  styleUrls: ['./campaign-dates-modal.page.scss'],
})

export class CampaignDatesModalPage implements OnInit {
  complete: boolean;
  dates: IDateCampaign[] = [
    {
      initDate: '',
      endDate: '',
      id: 1
    }
  ];
  constructor(private modalController: ModalController,  private alertController: AlertController) {
  }
  ngOnInit() {
  }

  async closeModal() {
    const onClosedData = false;
    await this.modalController.dismiss(onClosedData);
  }

  async acceptModal() {
    this.complete = true;
    this.dates.forEach((item: IDateCampaign, index) => {
      if (item.initDate === '' || item.endDate === '') {
        this.presentAlert();
        this.complete = false;
      }
    });
    if (this.complete) {
      const onAcceptData = this.dates;
      await this.modalController.dismiss(onAcceptData);
    }
  }

  addDate() {
    if (this.dates.length < 3) {
      this.dates.push({
        initDate: '',
        endDate: '',
        id: this.dates[this.dates.length - 1].id + 1
      });
    }

  }

  storeDateInit(date, id) {
    this.dates.forEach((item, index) => {
      if (item.id === id) {
        item.initDate = date.detail.value;
        return;
      }
    });
  }

  storeDateEnd(date, id) {
    this.dates.forEach((item, index) => {
      if (item.id === id) {
        item.endDate = date.detail.value;
        return;
      }
    });
  }

  deleteDate(id: number) {
    this.dates.forEach((item, index) => {
      if (item.id === id) {
        this.dates.splice(index, 1);
        return;
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: '',
      buttons: [
        {
          text: 'Aceptar',
        }
      ]
    });

    await alert.present();
  }

}
