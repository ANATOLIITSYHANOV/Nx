import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { Form22Component } from './form22/form22.component';
import { EmailValidatorDirective } from './shared/email.validator'


@NgModule({
  declarations: [AppComponent, FormComponent, Form22Component, EmailValidatorDirective],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
