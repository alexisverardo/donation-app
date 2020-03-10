import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitos',
  templateUrl: './mitos.page.html',
  styleUrls: ['./mitos.page.scss'],
})
export class MitosPage implements OnInit {

  Myths: IMyths[] = [
    {
      title: 'Las personas con TATUAJES NO pueden donar sangre.',
      status: 'FALSO',
      icon: '/assets/client.png',
      content: 'Las personas con tatuajes SI pueden donar sangre, siempre que hayan pasado mas de 8 meses desde el último tatuaje.'
    },
    {
      title: 'Las personas con diabetes NO pueden donar sangre.',
      status: 'FALSO',
      icon: '/assets/sugar-blood-level.png',
      content: 'Las personas con diabetes y que se encuentran en tratamiento con medicamentos SI pueden donar sangre.'
    },
    {
      title: 'Las personas que consumen marihuana NO pueden donar sangre.',
      status: 'FALSO',
      icon: '/assets/marijuana.png',
      content: 'Las personas que consumieron marihuana hace más de 12 horas SI pueden donar sangre.'
    },
    {
      title: 'Las personas hipertensas NO pueden donar sangre.',
      status: 'FALSO',
      icon: '/assets/stethoscope.png',
      content: 'Las personas con hipertensión SI pueden donar sangre, siempre que tengan su presión dentro de los rangos aceptables para la donación.'
    },
    {
      title: 'Las personas que consumieron alcohol NO pueden donar sangre.',
      status: 'FALSO',
      icon: '/assets/beer.png',
      content: 'Las personas que consumieron alcohol hace más de 12 horas SI pueden donar sangre.'
    },
    {
      title: 'Las personas deben estar en ayuna para donar sangre.',
      status: 'FALSO',
      icon: '/assets/burger.png',
      content: 'Las personas debe haber comido en las últimas 5 HORAS antes de donar.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface IMyths {
  title: string;
  status: string;
  icon: string;
  content: string;
}
