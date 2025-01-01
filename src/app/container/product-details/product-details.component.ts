import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  isOpen = true; // Tracks whether the popup is open or closed
  dummy:Product;
  @Input()
  productDetails:Product;

  @Input()
  ProductListerjonno:ProductListComponent=undefined;

  ngOnInit(){
    this.productDetails=this.ProductListerjonno.selectedProduct;
    console.log(this.productDetails,"okkay")
  }
  // Method to open the popup

  // Method to close the popup
  closePopup() {
    this.productDetails=this.dummy
  }

}
