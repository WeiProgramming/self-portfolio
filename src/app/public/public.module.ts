import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from '../shared/shared.module';
import { HomeSplashComponent } from './pages/home-sections/home-splash/home-splash.component';
import { HomeProjectsComponent } from './pages/home-sections/home-projects/home-projects.component';
import { HomeContactsComponent } from './pages/home-sections/home-contacts/home-contacts.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent, HomeSplashComponent, HomeProjectsComponent, HomeContactsComponent]
})
export class PublicModule { }
