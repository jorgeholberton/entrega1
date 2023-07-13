import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';//importar el formulario

@NgModule
({
  //declaración de componentes
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agregar la importación
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
