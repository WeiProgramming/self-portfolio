import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]
  }
]
