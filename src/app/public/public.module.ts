import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { ROUTES} from './public.routes';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutMeComponent } from './pages/about-me/about-me.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    DefaultLayoutComponent,
    ContactComponent,
    ResumeComponent,
    AboutMeComponent]
})
export class PublicModule { }
