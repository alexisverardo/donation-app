import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {FCM} from '@ionic-native/fcm/ngx';
import {ITokenWS, SaveTokenService} from './save-token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  token: ITokenWS;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    private saveTokenService: SaveTokenService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.onTokenRefresh().subscribe(data => {
        console.log(data);
      });
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log('Received in background');
          this.router.navigate(['/alert', data]);
        } else {
          console.log('Received in foreground');
          console.log('APPDATA');
          console.log(data)
          this.router.navigate(['/alert', data]);
        }
      });
    });
  }
}
