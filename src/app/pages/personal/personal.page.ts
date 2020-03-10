import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { IProvince } from '../../models/province';
import { IBloodType } from '../../models/blood-type';
import { ILocation } from '../../models/location';

import { AlertController } from '@ionic/angular';
import { ProvinceService } from '../../services/province.service';
import { BloodTypeService } from '../../services/blood-type.service';
import { LocationService } from '../../services/location.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user';
import { Donor } from '../../models/donor';

import { convertToDate } from '../../utils/moment';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.page.html',
    styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
    registerForm: FormGroup;
    provinces$: Observable<IProvince[]>;
    bloodTypes$: Observable<IBloodType[]>;
    locations: ILocation[];
    user: User;
    donor: Donor;
    redirectTo = '/home';

    constructor(
        private alertController: AlertController,
        private alertService: AlertService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private provinceService: ProvinceService,
        private bloodTypeService: BloodTypeService,
        private locationService: LocationService,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.initRegisterForm();
        this.getBloodTypes();
        this.getProvinces();

        this.user = new User(
            this.route.snapshot.paramMap.get('username'),
            this.route.snapshot.paramMap.get('password'),
            this.route.snapshot.paramMap.get('email')
        );

        this.registerForm.patchValue({blood_type_id: parseInt(this.route.snapshot.paramMap.get('blood_type_id'), 10)});
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Gracias por unirte!',
            message: 'Sos Mi Tipo Una App que Salva Vidas.',
            buttons: [
                {
                    text: 'Ir a inicio',
                    handler: () => {
                        this.router.navigate([this.redirectTo]);
                    }
                }
            ]
        });

        await alert.present();
    }

    getProvinces() {
        this.provinces$ = this.provinceService.query();
    }

    getLocations(event) {
        const province_id = event.target.value;
        console.log(province_id);
        this.locations = [];
        this.provinceService.locationsByProvince(province_id).subscribe(
            (data: ILocation[]) => this.locations = data
        );
    }

    getBloodTypes() {
        this.bloodTypes$ = this.bloodTypeService.query();
    }

    private initRegisterForm() {
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            location_id: ['', Validators.required],
            blood_type_id: ['', Validators.required],
            genre: ['', Validators.required],
            birthday: ['', Validators.required],
            phone: [''],
            // last_date_donation: ['', Validators.required],
        });
    }

    onSubmit() {
        if (!this.registerForm.valid) {
            this.alertService.simpleAlert(
                'Datos Personales',
                'Es necesario que complete todos los campos.',
                ['Entendido']
            );

            return;
        }

        this.donor = this.registerForm.value;
        this.donor.birthday = convertToDate(this.donor.birthday);

        const fullUser = { user: this.user, donor: this.donor };

        this.loginService.register(fullUser).subscribe(
            (data) => this.presentAlert(),
            error => console.log('Error:', error)
        );
    }
}

