import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, IonItemSliding} from '@ionic/angular';
import {NotificationService} from '../../services/notification.service';
import {ICampaign} from '../send-notification/ICampaign';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  logoHeight = 150;
  logoWidth = 125;
  data: any;
  campaigns: ICampaign[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('first_name')) {
      this.presentAlert();
    }
    this.getCampaigns();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertCustomCss',
      header: '!Sos mi tipo!',
      subHeader: 'Se solicitan ' + this.route.snapshot.paramMap.get('qty_donants')
          + ' dadores de sangre tipo/s' + this.route.snapshot.paramMap.get('bloods')
          + ' para ' + this.route.snapshot.paramMap.get('first_name')
          + ' ' + this.route.snapshot.paramMap.get('last_name')
          + ' en el ' + this.route.snapshot.paramMap.get('hospital_id'),
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ver',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ],
    });

    await alert.present();
  }

  getCampaigns() {
    this.notificationService.get().subscribe(
        (res: ICampaign[]) => {
          this.campaigns = res;
        }
    );
  }

  openButtons(itemSlide: IonItemSliding) {
    itemSlide.closeOpened();
  }

  openNotify(id) {
    this.router.navigate(['/campaigns', id]);
  }

  delete(id) {
    this.notificationService.delete(id).subscribe(
        (res) => {
          this.ngOnInit();
        }
    );
  }
}
