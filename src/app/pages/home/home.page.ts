import { Component, OnInit } from '@angular/core';
import {FCM} from '@ionic-native/fcm/ngx';
import {SaveTokenService} from '../../save-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  logoHeight = 150;
  logoWidth = 125;
  constructor(private fcm: FCM, private saveTokenService: SaveTokenService) { }
  ngOnInit() {
    this.fcm.getToken().then(data => {
      console.log(('token: ' +  data));
      // this.token.token = data;
      this.saveTokenService.storeTokenWS({token: data}).subscribe(
          res => {
            console.log('RES : ' , res);
          },
          error => {
            console.log('ERROR : ', error);
          }
      );
    });
  }

}
