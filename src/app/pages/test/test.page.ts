import { Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {TestData} from './test.data';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };
  result = true;
  isEnd = false;
  tests: ITest[] = TestData;

  constructor() { }

  async ngOnInit() {
    this.prevEnd();
  }

  onChangeHandler($event, t: ITest) {
    t.status = $event.target.value;
    setTimeout(() => {
      this.slides.slideNext();
      }, 300);
  }

  prevEnd() {
    const context = this;
    this.slides.ionSlideReachEnd.subscribe(
        res => {
          this.tests.forEach(function (test: ITest) {
            if ('false' === String(test.status)) {
              context.result = false;
            }
          });
          context.isEnd = true;
        }
    );
  }
}

export interface ITest {
  question: string;
  status: boolean;
  answer: IStatusAnswer[];
  src: string;
}

export interface IStatusAnswer {
  answer: string;
  status: boolean;
}
