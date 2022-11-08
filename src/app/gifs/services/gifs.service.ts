import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // no importa donde esta - sera global
})
export class GifsService{

  private _historial: string[] = [''];

  get historial(){
    return [...this._historial]
  }

  buscarGifs(query: string){

    if(!this._historial.includes( query )){

      // unshift -> agrega al inicio del array
      this._historial.unshift(query);

      // splice -> va cortando el arreglo solo hasta 10 elementos
      this._historial = this._historial.splice(0, 10);
      
    }



    console.log(this._historial);
    
  }

}
