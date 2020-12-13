import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {InputMaskModule} from 'primeng/inputmask';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    ButtonModule,
    InputTextModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

