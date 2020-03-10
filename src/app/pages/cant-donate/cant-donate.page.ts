import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cant-donate',
  templateUrl: './cant-donate.page.html',
  styleUrls: ['./cant-donate.page.scss'],
})
export class CantDonatePage implements OnInit {

  slides = [
    {
      img: '/assets/img/cant-donate/check-list-wrong.svg',
      text: 'NO Puedes ser donante cuando:'
    },
    {
      img: '/assets/img/cant-donate/heart.svg',
      text: 'Has tenido relaciones sexuales con una persona diferente a la habitual en los ultimos 8 meses.'
    },
    {
      img: '/assets/img/cant-donate/pills.svg',
      text: 'Has tomado antibioticos en los ultimos 7 dias.'
    },
    {
      img: '/assets/img/cant-donate/tattoo.svg',
      text: 'Te has realizado un tatuaje en los ultimos 8 meses.'
    },
    {
      img: '/assets/img/cant-donate/beer.svg',
      text: 'Has consumido alcohol o estupefacientes en las ultimas 12 horas. '
    },
    {
      img: '/assets/img/cant-donate/pregnant.svg',
      text: 'Te encuentras embarazada o tuviste un parto en los ultimos 6 meses'
    }

  ];

  constructor(private navCtrl: NavController) { }


  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/donor');
  }

}
