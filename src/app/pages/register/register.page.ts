import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { AlertService } from '../../services/alert.service';
import { BloodTypeService } from '../../services/blood-type.service';
import { IBloodType } from '../../models/blood-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  bloodTypes$: Observable<IBloodType[]>;

  constructor(
      private alertController: AlertController,
      private alertService: AlertService,
      private formBuilder: FormBuilder,
      private router: Router,
      private bloodTypeService: BloodTypeService,
  ) { }

  ngOnInit() {
    this.initRegisterForm();
    this.getBloodTypes();
  }

  getBloodTypes() {
    this.bloodTypes$ = this.bloodTypeService.query();
  }

  private initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      blood_type_id: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      this.alertService.simpleAlert(
          'Registro de usuario',
          'Es necesario que complete todos los campos.',
          ['Entendido']
      );
      return;
    }

    this.router.navigate(['/personal', this.registerForm.value]);
  }
}
