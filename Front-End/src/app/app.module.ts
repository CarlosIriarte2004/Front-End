import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
