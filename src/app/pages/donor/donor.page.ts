import { Component, OnInit } from '@angular/core';
import { CardData } from './card.data';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.page.html',
  styleUrls: ['./donor.page.scss'],
})
export class DonorPage implements OnInit {
  cards = CardData;
  constructor() { }

  ngOnInit() {
  }

}
