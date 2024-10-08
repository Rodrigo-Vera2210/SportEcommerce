import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product!: IProduct

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct(){
    this.shopService.getProduct(2).subscribe(product => {
      this.product = product
    }, error => {
      console.log(error)
    })
  }
}
