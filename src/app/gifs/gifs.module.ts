import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageMainComponent } from './gifs-page-main/gifs-page-main.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageMainComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GifsPageMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
