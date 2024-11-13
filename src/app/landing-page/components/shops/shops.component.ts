import { Component, OnInit } from '@angular/core';
import { ShopService } from './services/shop.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit{
  constructor(private _shopService:ShopService){}
  ngOnInit(): void {
    this.GetAllProduct()
  }
GetAllProduct(){
  this._shopService.onGetAllProducts().subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{

    }
  })
}
}
