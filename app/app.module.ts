import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {routing} from "./routing/app.routing";
import {ContactComponent} from "./components/pages/contact.component";

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }