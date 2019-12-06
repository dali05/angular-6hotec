import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {DateValidator} from "./directive/date-validator.directive";
import {MaskedInput} from "./directive/masked-input.directive";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DateValidator, MaskedInput ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
