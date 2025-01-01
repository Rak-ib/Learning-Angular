import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent  {
  
  order:number=0;
  productName:string="";

  // increaseItem(){
  //   if(this.order<this.product.items)
  //     this.order=this.order+1;
  //   console.log(this.order)
  // }
  // decreaseItem(){
  //   if(this.order>0)
  //     this.order=this.order-1;
  //   console.log(this.order)
  // }

  // discountedPrice() {
  //   return this.product.price*(100-this.product.discount)/100;
  // }

  getSearchedText(event:string){
    this.productName=event
    console.log(event,"output Decoretor")
  }

  // @ViewChild('ProductList') productList: ProductListComponent;
  


}
