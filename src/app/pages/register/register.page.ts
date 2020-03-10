import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { ProvinceService } from '../../services/province.service';
import { LocationService } from '../../services/location.service';
import { BloodTypeService } from '../../services/blood-type.service';
import { RegisterService } from '../../services/register.service';

import { Observable } from 'rxjs';

import { IBloodType } from '../../models/blood-type';
import { IProvince } from '../../models/province';
import { ILocation } from '../../models/location';
import { User } from '../../models/user';

import { convertToDate } from '../../utils/moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  provinces$: Observable<IProvince[]>;
  bloodTypes$: Observable<IBloodType[]>;
  locations$: Observable<ILocation[]>;

  constructor(
      private alertController: AlertController,
      private formBuilder: FormBuilder,
      private router: Router,
      private provinceService: ProvinceService,
      private bloodTypeService: BloodTypeService,
      private locationService: LocationService,
      private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.initRegisterForm();
    this.getBloodTypes();
    this.getLocations();
    this.getProvinces();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Gracias por unirte!',
      message: 'Es necesario que ingreses para poder usar la aplicación.',
      buttons: [
        {
          text: 'Ingresar',
          handler: () => {
              this.router.navigate(['/']);
          }
        }
      ]
    });

    await alert.present();
  }

  getProvinces() {
    this.provinces$ = this.provinceService.query();
  }

  getLocations() {
      this.locations$ = this.locationService.query();
  }

  getBloodTypes() {
      this.bloodTypes$ = this.bloodTypeService.query();
  }

  private initRegisterForm() {
      this.registerForm = this.formBuilder.group({
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          blood_type_id: ['', Validators.required],
          province_id: ['', Validators.required],
          location_id: ['', Validators.required],
          genre: ['', Validators.required],
          birthday: ['', Validators.required],
          email: ['', Validators.required],
          last_date_donation: ['', Validators.required],
          password: ['', Validators.required],
          confirm_password: ['', Validators.required],
      });
  }
  onSubmit() {
    const user: User = this.registerForm.value;
    user.birthday = convertToDate(user.birthday);
    user.last_date_donation = convertToDate(user.last_date_donation);
    this.registerService.register(user).subscribe(
        () => this.presentAlert(),
        error => console.log('Error:', error)
    );
  }
}
