import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private _HttpClient:HttpClient) { }
  onGetAllProducts(): Observable<any> {
    return this._HttpClient.get('/products')
  }
}
