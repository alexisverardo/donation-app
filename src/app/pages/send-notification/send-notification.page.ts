import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import {ICampaign} from './ICampaign';
import {Observable} from 'rxjs';
import {IBloodType} from '../../models/blood-type';
import {BloodTypeService} from '../../services/blood-type.service';
import {NotificationService} from '../../services/notification.service';
import {Router} from '@angular/router';
import {ITest} from '../test/test.page';
import {CampaignDatesModalPage, IDateCampaign} from '../campaign-dates-modal/campaign-dates-modal.page';
import { OverlayEventDetail } from '@ionic/core';
import {AlertService} from '../../services/alert.service';
import {ILocation} from '../../models/location';
import {HospitalService} from '../../services/hospital.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.page.html',
  styleUrls: ['./send-notification.page.scss'],
})
export class SendNotificationPage implements OnInit {
  campaignForm: FormGroup;
  quantity =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  bloodTypes$: Observable<IBloodType[]>;
  bloods: number[] = [];
  del: boolean;
  campaign: ICampaign;
  dates: IDateCampaign[];
  hospitals$: Observable<IHospital[]>;
  constructor(
      private formBuilder: FormBuilder,
      private bloodTypeService: BloodTypeService,
      private notificationService: NotificationService,
      private alertController: AlertController,
      private router: Router,
      public modalController: ModalController,
      private alertService: AlertService,
      private hospitalService: HospitalService
  ) {
  }

  ngOnInit() {
    this.getBloodTypes();
    this.getHospitals();
    this.initCampaignForm();
  }

  getHospitals() {
    this.hospitals$ = this.hospitalService.get();
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: CampaignDatesModalPage
    });
    modal.onDidDismiss().then((dataReturned: OverlayEventDetail) => {
      if (!dataReturned.data) {
        this.datesFailAlert();
      } else {
        this.dates = dataReturned.data;
        this.datesOkAlert();
      }
    });
    return  await modal.present();
  }

  getBloodTypes() {
    this.bloodTypes$ = this.bloodTypeService.query();
  }

  onSubmit() {
    this.campaignForm.controls['blood_type_id'].setValue(this.bloods);
    this.campaignForm.controls['date_donations'].setValue(this.dates);
    if (!this.campaignForm.valid) {
      this.alertService.simpleAlert(
          'Solicitud de campaña',
          'Es necesario que complete todos los campos.',
          ['Entendido']
      );
      return;
    }
    this.campaign = this.campaignForm.value;
    this.notificationService.send(this.campaign).subscribe(
        () => this.presentAlert(),
        error => console.log('Error:', error)
    );
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Solicitud enviada!',
      message: '.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  async datesOkAlert() {
    const alert = await this.alertController.create({
      header: 'Fechas cargadas',
      message: '',
      buttons: [
        {
          text: 'Aceptar',
        }
      ]
    });

    await alert.present();
  }


  async datesFailAlert() {
    const alert = await this.alertController.create({
      header: 'No se cargo ninguna fecha',
      message: '',
      buttons: [
        {
          text: 'Aceptar',
        }
      ]
    });

    await alert.present();
  }



  private initCampaignForm() {
    this.campaignForm = this.formBuilder.group({
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          blood_type_id: ['', Validators.required],
          qty_donants: ['', Validators.required],
          date_donations: ['', Validators.required],
          hospital_id: ['', Validators.required],
    });
  }

  selectBlood(id: number) {
    this.del = false;
    if (this.bloods.length !== 0) {
      this.bloods.forEach((item, index) => {
        if (item === id) {
          this.bloods.splice(index, 1);
          this.del = true;
          return;
        }
      });
    }
    if (!this.del) {
      this.bloods.push(id);
    }
  }
}

export interface IHospital {
  name: string;
  location_id: number;
  id?: number;
}
