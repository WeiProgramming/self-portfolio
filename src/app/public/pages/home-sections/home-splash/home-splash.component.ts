import { Component, OnInit, AfterViewInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home-splash',
  templateUrl: './home-splash.component.html',
  styleUrls: ['./home-splash.component.scss'],
  animations: [
    trigger('slideItems', [
      transition(':enter', [
        style({
          opacity: '.7',
          transform: 'translateX(-100px)',
        }), animate('.3s')
      ])
    ])
  ]
})
export class HomeSplashComponent implements OnInit, AfterViewInit {
  state = 'none';

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.state = 'loaded';
  }
}
