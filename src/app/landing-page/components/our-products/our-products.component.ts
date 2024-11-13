import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit{
data: any;

constructor(private _ProductService:ProductService, public dialog: MatDialog){}
ngOnInit(): void {
  // this.addProduct()
}
// addProduct(){
//   this._ProductService.onAddProduct(this.data).subscribe({
//     next:(res)=>{
//       console.log(res)
//     },
//     error:(res)=>{
//       console.log(res)
//     },
//     complete:()=>{
//       console.log('add product is done')
//     }
//   })
// }
scrollToComponent() {
  const OurProductsComponent = document.querySelector('.products-one'); 
  if (OurProductsComponent) {
      OurProductsComponent.scrollIntoView({ behavior: 'smooth' });
  }
}
openDetails() {
  this.dialog.open(DetailsComponent, {
    data: {
      animal: 'panda',
    },
  });
}
}
