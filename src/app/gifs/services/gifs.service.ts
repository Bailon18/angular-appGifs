import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root' // no importa donde esta - sera global
})
export class GifsService{

  private _api : string  = '0p1SmNdD85FCOE7dnrH7YMQHteeo5Q31'
  private _historial: string[] = [''];

  // TODO: cambiar el tipo
  public resultados: Gif[] =[];


  constructor(private http : HttpClient){

    // al recargar se eliminan el historial de busqued 
    // con este metodo obtenemos lo qu esta en el localStorage y 
    // lo volvemos a mostrar

    if(localStorage.getItem('historial')){
      // ! - > es para quita el retorno a nulll
      this._historial = JSON.parse(localStorage.getItem('historial')!)
      this.resultados = JSON.parse(localStorage.getItem('resultados')!)
    }
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

      // para guardar en local storage las busqueda que realize y no se borren
      localStorage.setItem('historial', JSON.stringify(this._historial))

      // para los resultados
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    }

    this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=${this._api}&q=${query}&limit=10L`)
          .subscribe((respuesta : any) => {
            this.resultados = respuesta.data;
            console.log(respuesta.data);
          })

    
    
  }

}
