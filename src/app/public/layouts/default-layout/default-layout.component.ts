import { Component, OnInit } from '@angular/core';
import { trigger, query, group, style, transition} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    trigger('routeAnimate', [])
  ]
})
export class DefaultLayoutComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }
  getData(outlet): string{
    return outlet.activatedRoute.data.value['pageName'];
  }

}
