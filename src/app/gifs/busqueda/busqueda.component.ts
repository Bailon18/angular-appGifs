import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent{

  // este decorador obtiene todo los atributos del input con el nombre txtBuscar
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private serviciogifs : GifsService){
  }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    // no agregar duplicados
    
    if(valor.trim().length === 0){
      return;
    }

    //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

    this.serviciogifs.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';

  }
}
