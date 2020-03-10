import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logoHeight = 150;
  logoWidth = 125;
  loginForm: FormGroup;
  redirectTo = '/home';

  constructor(
      private loginServices: LoginService,
      private formBuilder: FormBuilder,
      public alertController: AlertController,
      private router: Router
  ) {
      this.redirectIfAuthenticated();
  }

  async redirectIfAuthenticated() {
      if (await this.loginServices.isAuthenticated()) {
          this.router.navigate([this.redirectTo]);
      }
  }

  ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          identity: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

    login() {
      if (!this.loginForm.valid) {
        return;
      }

      this.loginServices.login(this.loginForm.value).subscribe(
          data => this.router.navigate([this.redirectTo]),
          error => this.presentAlert()
      );
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Usuario o Clave incorrecto.',
            message: 'Asegurese de haber introducido sus datos correctamente',
            buttons: ['Aceptar']
        });

        await alert.present();
    }
}
