import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // no importa donde esta - sera global
})
export class GifsService{

  private _api : string  = '0p1SmNdD85FCOE7dnrH7YMQHteeo5Q31'
  private _historial: string[] = [''];

  // TODO: cambiar el tipo
  public resultados: any[] =[];


  constructor(private http : HttpClient){
  }

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

    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=${this._api}&q=${query}&limit=10L`)
          .subscribe((respuesta : any) => {
            this.resultados = respuesta.data;
            console.log(respuesta.data);
          })

    
    
  }

}
