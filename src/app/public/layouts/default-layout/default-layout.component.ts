import { Component, OnInit } from '@angular/core';
import {trigger, query, group, style, transition, animate, animateChild} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    trigger('routeAnimate', [
      transition('home => *, about => contact, contact => resume', [
        style({height: '250vh'}),
        query(':enter', style({transform: 'translateX(100%)', opacity: '0'}), { optional: true }),
        query(':enter , :leave', style({position: 'absolute', left: 0, right: 0, top: 0}), { optional: true }),
        group([
          query(':enter', animate('.5s ease-out', style({transform: 'translateX(0)', opacity: '1'})),{ optional: true }),
          query(':leave', animate('.5s ease-out', style({transform: 'translateX(-100%)', opacity: '0'})), { optional: true }),
          query('@slideItems, @appear', [animateChild()])
        ])
      ]),
      transition('about => home, contact => about, resume => *',  [
        style({height: '250vh'}),
        query(':enter', style({transform: 'translateX(-100%)', opacity: '0'}), { optional: true }),
        query(':enter , :leave', style({position: 'absolute', left: '0', right: '0', top: '0'}), { optional: true }),
        group([
          query(':enter', animate('.5s ease-out', style({transform: 'translateX(0)', opacity: '1'})), { optional: true }),
          query(':leave', animate('.5s ease-out', style({transform: 'translateX(100%)', opacity: '0'})), { optional: true }),
          query('@slideItems, @appear', [animateChild()])
        ])
      ])
    ])
  ]
})
export class DefaultLayoutComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }
  getData(outlet): string {
    return outlet.activatedRoute.data.value['pageName'];
  }

}
