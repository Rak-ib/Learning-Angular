import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  item:{
    id:number,
    name:string,
    description:string,
    color:string[],
    brand:string,
    gender:string,
    category:string,
    imageURL:string,
    price:number,
    is_in_inventory:boolean

  }

}
