import { Component, OnInit, EventEmitter } from '@angular/core';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})

export class ScrollComponent implements OnInit {

  numberArray: any[] = [];

  options: ISlimScrollOptions;
  secondOptions: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;


  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.numberArray.push(i);
    }
    this.options = {
      barBackground: '#C9C9C9',
      gridBackground: '#D9D9D9',
      barBorderRadius: '10',
      barWidth: '6',
      gridWidth: '2'
    };

    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
  }

  ngOnInit() {

    console.log("this.opts", this.options);
    console.log("this.scrollEvents", this.scrollEvents);
    this.play();
  }

  play(): void {
    let event = null;

    Promise.resolve()
      .then(() => this.timeout(3000))
      .then(() => {
        event = new SlimScrollEvent({
          type: 'scrollToBottom',
          duration: 2000,
          easing: 'inOutQuad'
        });

        this.scrollEvents.emit(event);
      })
      .then(() => this.timeout(3000))
      .then(() => {
        event = new SlimScrollEvent({
          type: 'scrollToTop',
          duration: 3000,
          easing: 'outCubic'
        });

        this.scrollEvents.emit(event);
      })
      .then(() => this.timeout(4000))
      .then(() => {
        event = new SlimScrollEvent({
          type: 'scrollToPercent',
          percent: 80,
          duration: 1000,
          easing: 'linear'
        });

        this.scrollEvents.emit(event);
      })
      .then(() => this.timeout(2000))
      .then(() => {
        event = new SlimScrollEvent({
          type: 'scrollTo',
          y: 200,
          duration: 4000,
          easing: 'inOutQuint'
        });

        this.scrollEvents.emit(event);
      });
  }

  timeout(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }

}
