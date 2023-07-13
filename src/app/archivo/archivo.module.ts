import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivoRoutingModule } from './archivo-routing.module';
import { EntradaComponent } from './components/entrada/entrada.component';


@NgModule({
  declarations: [
    EntradaComponent
  ],
  imports: [
    CommonModule,
    ArchivoRoutingModule
  ]
})
export class ArchivoModule { }
