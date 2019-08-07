import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {PublicModule} from './public/public.module';
import { RouterModule} from '@angular/router';
import {APPROUTES} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PublicModule,
    RouterModule.forRoot(APPROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
