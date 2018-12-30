import { Component, OnInit } from '@angular/core';
import {trigger, query, group, style, transition, animate, animateChild} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    trigger('routeAnimate', [
      transition('home => companies, companies => contact, contact => resume', [
        style({height: '!'}),
        query(':enter', style({transform: 'translateY(100%)', opacity: '0'}), { optional: true }),
        query(':enter , :leave', style({position: 'absolute', left: 0, right: 0, top: 0}), { optional: true }),
        group([
          query(':enter', animate('.5s ease-out', style({transform: 'translateY(0)', opacity: '1'})),{ optional: true }),
          query(':leave', animate('.5s ease-out', style({transform: 'translateY(-100%)', opacity: '0'})), { optional: true }),
          query('@slideItems, @appear', [animateChild()])
        ])
      ]),
      transition('companies => home, contact => companies, resume => contact', [
        style({height: '!'}),
        query(':enter', style({transform: 'translateY(-100%)', opacity: '0'}), { optional: true }),
        query(':enter , :leave', style({position: 'absolute', left: '0', right: '0', top: '0', bottom: '0'}), { optional: true }),
        group([
          query(':enter', animate('.5s ease-out', style({transform: 'translateY(0)', opacity: '1'})), { optional: true }),
          query(':leave', animate('.5s ease-out', style({transform: 'translateY(100%)', opacity: '0'})), { optional: true })
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
