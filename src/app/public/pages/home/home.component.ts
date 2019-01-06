import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideItems', [
      transition('* => *', [
        query(':enter', style({transform: 'translateX(-200px)', opacity: '0'}), {optional: true}),
        query(':enter', stagger('500ms', animate( '500ms ease-out', keyframes([
          style({transform: 'translateX(-100px)', opacity: '0'}),
          style({transform: 'translateX(0px)', opacity: '.5'}),
          style({transform: 'translateX(50px)', opacity: '.7'}),
          style({transform: 'translateX(0px)', opacity: '1'})
        ]))), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('companyBlock')
  companyBlock: ElementRef;
  items: any[];
  scrollInAt: number;
  data = [
    {
      heading: 'SmartProperty',
      description: 'Property Saas management system that provides users to monitor and track properties and their assets',
      taskDesc: 'Assisted and designed the first PWA for property software management',
      techDesc: 'Angular 6, Angular Material Components, Service Workers, C#, Rxjs, .NET',
      siteLink: 'https://smartproperty.com/',
      siteLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib' +
        '=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      heading: 'RightDevice',
      description: 'Medical Device Start Up gauged in connecting device reps with patients providing info and guidance',
      taskDesc: 'Assisted and lead in design and development, Deployed and maintained website',
      techDesc: 'Laravel, JavaScript, Bootstrap, cPanel, HTML, CSS',
      siteLink: 'https://www.rightdevice.com/',
      siteLogo: 'https://images.unsplash.com/photo-1533025782032-634283c7c7ad?ixlib=rb' +
        '-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
    },
    {
      heading: 'Affinity Development Group',
      description: 'Company that handles relationship between established organizations and companies and their members of',
      taskDesc: 'Front end engineer for ADG marketing agency, responsible for leading and developing websites for ' +
        'upcoming promotions for clients',
      techDesc: '.NET, HTML5, CSS3, SASS, TFS',
      siteLink: 'http://www.affinitydev.com/company.html',
      siteLogo: 'https://images.unsplash.com/photo-1525857222756-37cdb4e87e36?ixlib=rb' +
        '-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      heading: 'JohnShipp and Associates',
      description: 'Internet development company providing web development services to various clients',
      taskDesc: 'Assisted in development with one of their websites using backend',
      techDesc: 'Laravel framework',
      siteLink: 'https://www.rightdevice.com/',
      siteLogo: 'https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=' +
        'rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      heading: 'SwiftChange',
      description: 'Financial start up aimed towards allowed consumers to receive change through digital rather than physical change',
      taskDesc: 'Assisted with backend end api development',
      techDesc: 'Laravel framework',
      siteLink: 'https://www.getswiftchange.com/',
      siteLogo: 'https://images.unsplash.com/photo-1538356111053-748a48e1acb8?ixlib=rb-' +
        '1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
    }];
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // console.log(event.path[1].scrollY);
    // console.log(event.path[1].outerHeight + event.path[1].scrollY);
    if (event.path[1].outerHeight + event.path[1].scrollY >= this.scrollInAt) {
      this.items = this.data;
      console.log('true');
    }
  }
  constructor() {}

  ngOnInit(): void {
    this.scrollInAt = this.companyBlock.nativeElement.offsetTop + this.companyBlock.nativeElement.offsetHeight + 200;
    this.items = [];
    // console.log(this.companyBlock.nativeElement.offsetTop);
    console.log(this.companyBlock);
  }
}
