import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouteService} from '../../services/RouteService/route.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  // @ViewChild('companyBlock')
  // companyBlock: ElementRef;
  items: any[];
  // scrollInAt: number;
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
  constructor(public routeService: RouteService, public route: ActivatedRoute) { }

  ngOnInit() {
    // this.scrollInAt = this.companyBlock.nativeElement.offsetTop + this.companyBlock.nativeElement.offsetHeight + 200;
    this.items = this.data;
    this.routeService.updateUrlData(this.route.snapshot.data['pageName']);

  }

}
