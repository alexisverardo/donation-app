import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  logoHeight = 150;
  logoWidth = 125;
  constructor() { }

  ngOnInit() {
  }

}
