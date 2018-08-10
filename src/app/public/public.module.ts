import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from '../shared/shared.module';
import { HomeSplashComponent } from './pages/home-sections/home-splash/home-splash.component';
import { HomeProjectsComponent } from './pages/home-sections/home-projects/home-projects.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { ROUTES} from './public.routes';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    HomeComponent,
    RouterModule
  ],
  declarations: [HomeComponent, HomeSplashComponent, HomeProjectsComponent, DefaultLayoutComponent, ContactComponent, ResumeComponent]
})
export class PublicModule { }
