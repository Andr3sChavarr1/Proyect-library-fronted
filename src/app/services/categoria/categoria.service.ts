import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private API_SERVER = "http://localhost:8088/api/categorias";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCategoria(): Observable<any>{
    return this.httpClient.get(`${this.API_SERVER}/listarCategorias`);

  } 

  public saveCategoria(categoria: any): Observable<any>{
    return this.httpClient.post(`${this.API_SERVER}/insertarCategorias`, categoria);

  } 

  public deleteCategoria(id: any): Observable<any>{
    return this.httpClient.delete(`${this.API_SERVER}/listarCategorias`, id);

  } 

}
