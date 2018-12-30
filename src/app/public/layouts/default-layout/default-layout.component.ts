import { Component, OnInit } from '@angular/core';
import {trigger, query, group, style, transition, animate} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    trigger('routeAnimate', [
      transition('home => companies, companies => contact, contact => resume', [
        style({height: '!'}),
        query(':enter', style({transform: 'translateX(100%)', opacity: '0'})),
        query(':enter , :leave', style({position: 'absolute', left: 0, right: 0, top: 0})),
        group([
          query(':enter', animate('.5s ease-out', style({transform: 'translateX(0)', opacity: '1'}))),
          query(':leave', animate('.5s ease-out', style({transform: 'translateX(-100%)', opacity: '0'})))
        ])
      ]),
      transition('companies => home, contact => companies, resume => contact', [
        style({height: '!'}),
        query(':enter', style({transform: 'translateX(-100%)', opacity: '0'})),
        query(':enter , :leave', style({position: 'absolute', left: '0', right: '0', top: '0', bottom: '0'})),
        group([
          query(':enter', animate('.5s ease-out', style({transform: 'translateX(0)', opacity: '1'}))),
          query(':leave', animate('.5s ease-out', style({transform: 'translateX(100%)', opacity: '0'})))
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
