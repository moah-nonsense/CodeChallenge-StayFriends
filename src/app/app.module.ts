import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {StatesService} from './services/states.service';
import {HttpClientModule} from '@angular/common/http';
import {Bundesland} from './api/bundesland';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatesService,
    Bundesland
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
