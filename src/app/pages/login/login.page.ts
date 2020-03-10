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

  constructor(
      private loginServices: LoginService,
      private formBuilder: FormBuilder,
      public alertController: AlertController,
      private router: Router
  ) { }

    loginForm: FormGroup;

  ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

    login() {
      if (!this.loginForm.valid) {
        return;
      }

      this.loginServices.login(this.loginForm.value).subscribe(
          data => {
              this.router.navigate(['/home']);
              },
          error => {
              this.presentAlert();
          }
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
