import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './partials/navbar/navbar.component';
import {FooterComponent} from './partials/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    FooterComponent,
    NgxPageScrollModule
  ],
  declarations: [NavbarComponent,
  FooterComponent,

  ]
})
export class SharedModule { }
