import { Component, OnInit } from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  animations: [
    trigger('slideItems', [
      transition('* => *', [
        query(':enter', style({transform: 'translateX(-200px)', opacity: '0'}), {optional: true}),
        query(':enter', stagger('600ms', animate( '600ms ease-out', keyframes([
          style({transform: 'translateX(-100px)', opacity: '.3'}),
          style({transform: 'translateX(0px)', opacity: '.5'}),
          style({transform: 'translateX(50px)', opacity: '.7'}),
          style({transform: 'translateX(0px)', opacity: '1'})
        ]))), {optional: true})
      ])
    ])
  ]
})
export class CompaniesComponent {

  public items: any[];

  constructor() {
    this.items = [{
      heading: 'RightDevice',
      description: 'Medical Device Start Up gauged in connecting medical device' +
      ' representatives and patients with needed information so patients can determine the best course of action',
      taskDesc: 'Assisted and lead in design and development, Deployed and maintained website',
      techDesc: 'Laravel, JavaScript, Bootstrap, cPanel, HTML, CSS',
      siteLink: 'https://www.rightdevice.com/',
      siteLogo: 'assets/images/rightdev-logo.png'
    },
      {
        heading: 'SmartProperty',
        description: 'Property Saas management system that provides users to monitor and track properties and their assets',
        taskDesc: 'Assisted and designed the first PWA for property software management',
        techDesc: 'Angular 6, Angular Material Components, Service Workers, C#, Rxjs, .NET',
        siteLink: 'https://smartproperty.com/',
        siteLogo: 'assets/images/smartproperty-logo.png'
      },
      {
        heading: 'JohnShipp and Associates',
        description: 'Internet development company providing web development services to various clients',
        taskDesc: 'Assisted in development with one of their websites using backend',
        techDesc: 'Laravel framework',
        siteLink: 'https://www.rightdevice.com/',
        siteLogo: 'assets/images/johnshipp-logo.png'
      },
      {
        heading: 'SwiftChange',
        description: 'Financial start up aimed towards allowed consumers to receive change through digital rather than physical change',
        taskDesc: 'Assisted with backend end api development',
        techDesc: 'Laravel framework',
        siteLink: 'https://www.getswiftchange.com/',
        siteLogo: 'assets/images/swiftchange-logo.png'
      },
      {
        heading: 'Affinity Development Group',
        description: 'specializes in developing affinity and Customer Relationship Management programs for ' +
        'clients with established brands and customer bases. It’s our goal at ADG to create and nurture customer ' +
        'relationships through strategic products and services that are both relevant and valuable to a company’s specific audience.',
        taskDesc: 'Front end engineer for ADG marketing agency, responsible for leading and developing websites for ' +
        'upcoming promotions for clients',
        techDesc: '.NET, HTML5, CSS3, SASS, TFS',
        siteLink: 'http://www.affinitydev.com/company.html',
        siteLogo: 'assets/images/adg-logo.jpg'
      }];

  }

}
