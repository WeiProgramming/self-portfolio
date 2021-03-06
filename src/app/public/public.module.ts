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
import {CompaniesComponent} from './pages/companies/companies.component';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';

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
  entryComponents: [
    PasswordDialogComponent
  ],
  declarations: [
    HomeComponent,
    DefaultLayoutComponent,
    ContactComponent,
    ResumeComponent,
    CompaniesComponent,
    PasswordDialogComponent]
})
export class PublicModule { }
