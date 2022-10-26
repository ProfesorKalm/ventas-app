import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = "http://localhost:8080/api/producto";
  constructor(
    private http: HttpClient

  ) { }


  // generar todos los metodos de la api 

  getAllProductos() {      
    return this.http.get(`${this.url}/getAllProductos`);
  }

  agregarProducto(producto: any){
    return this.http.post(`${this.url}/guardarProducto`, producto);
  }


  eliminarProductoById(id:number) {
    return this.http.delete(`${this.url}/eliminar/${id}`);

  }
}
