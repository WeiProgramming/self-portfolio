import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {CompaniesComponent} from './pages/companies/companies.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {pageName: 'home'}
      },
      {
        path: 'journey',
        component: ContactComponent,
        data: {pageName: 'contact'}
      },
      {
        path: 'company',
        component: CompaniesComponent,
        data: {pageName: 'company'}
      },
      {
        path: 'resume',
        component: ResumeComponent,
        data: {pageName: 'resume'}
      },
      {
        path: '**',
        redirectTo: '/',
      }
    ]
  }
]
