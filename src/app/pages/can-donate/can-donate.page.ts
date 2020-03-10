import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, NavController} from '@ionic/angular';

@Component({
  selector: 'app-can-donate',
  templateUrl: './can-donate.page.html',
  styleUrls: ['./can-donate.page.scss'],
})
export class CanDonatePage implements OnInit {
  @ViewChild('slide') slide: IonSlides;

  slides = [
    {
      img: '/assets/img/can-donate/check-list.svg',
      text: 'Puedes ser donante cuando:'
    },
    {
      img: '/assets/img/can-donate/id.svg',
      text: 'Tienes tu documento de identidad.'
    },
    {
      img: '/assets/img/can-donate/people.svg',
      text: 'Tienes entre 18-65 años'
    },
    {
      img: '/assets/img/can-donate/sleep.svg',
      text: 'Haber dormido al menos 5 horas antes de donar.'
    },
    {
      img: '/assets/img/can-donate/balance.svg',
      text: 'Pesar mas de 50 kilos'
    },
    {
      img: '/assets/img/can-donate/eat.svg',
      text: 'Has comido en las ultimas 5 horas'
    },
    {
      img: '/assets/img/can-donate/blood-bag.svg',
      text: 'Has dejado pasar entre donaciones: 3 meses para hombres y 4 meses para mujeres'
    }
  ];

  constructor(private navCtrl: NavController) { }


  ngOnInit() {
    this.slide.ionSlideReachEnd.subscribe(
        () => console.log('Slider End')
    );
  }

  onClick() {
    this.navCtrl.navigateBack('/donor');
  }
}
