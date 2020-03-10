import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {ICampaign} from '../send-notification/ICampaign';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {
  campaign: ICampaign;

  constructor(
      private route: ActivatedRoute,
      private notificationService: NotificationService,
      public alertController: AlertController,
      private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.notificationService.show(params.get('id')).subscribe(
          (res: ICampaign) => {
            this.campaign = res;
          }
      );
    });
  }

  accept(id) {
    this.notificationService.accept(id).subscribe(
      res => {
        this.presentAlert();
      }
    );
  }

  delete(id) {
    this.notificationService.delete(id).subscribe(
        (res) => {
          this.router.navigate(['/alert'])
              .then(() => {
                window.location.reload();
              });
        }
    );
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Gracias por ayudar',
      message: 'Estas salvando 3 vidas',
      buttons:  [{
        text: 'Aceptar',
        role: 'accept',
        handler: (blah) => {
          this.router.navigate(['/alert'])
              .then(() => {
                window.location.reload();
              });
        }
      }]
    });

    await alert.present();
  }

}
