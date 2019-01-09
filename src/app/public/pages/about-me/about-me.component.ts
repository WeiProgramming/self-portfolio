import { Component, OnInit } from '@angular/core';
import {animate, keyframes, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('slide-left', [
      transition(':enter', [
        style({transform: 'translateY(-30%)', opacity: '0'}),
        animate('.6s 500ms ease-in-out', keyframes([
          style({opacity: 0, transform: 'translateY(-30%)'}),
          style({opacity: .5, transform: 'translateY(0)'}),
          style({opacity: .7, transform: 'translateY(10%)'}),
          style({opacity: 1, transform: 'translateY(0)'}),
        ]))
      ])
    ])
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
