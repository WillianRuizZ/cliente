import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { }

  //get
  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  //get por id
  getProductoId(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  //crear producto
  createProduct(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  //actualizar
  updateProduct(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + id, producto);
  }
  //elimionar
  deleteProducto(id: string,): Observable<any> {
    return this.http.delete(this.url + id);
  }

}
