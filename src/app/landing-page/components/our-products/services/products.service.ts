import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  onAddProduct(data:any):Observable<any>{
  return this.http.post('/products',data)
}
}
