import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { ProductItemComponent } from "./product-item/product-item.component";
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { NgFor } from '@angular/common';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductItemComponent, NgFor],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products!: IProduct[]
  brands!: IBrand[]
  types!: IType[]
  shopParams = new ShopParams()
  totalCount! : number
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ]

  constructor(private shopService: ShopService){}

  ngOnInit(){
    this.getBrands()
    this.getProducts()
    this.getTypes()
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(response => {
      this.products = response ? response.data : []
      this.shopParams.pageNumber = response ? response.pageIndex : 1
      this.shopParams.pageSize = response ? response.pageSize : 6
      this.totalCount = response ? response.count : 0
    }, error => {
      console.log(error)
    })
  }

  getBrands(){
    this.shopService.getBrands().subscribe(response =>{
      this.brands = [{id: 0, name: 'All'}, ...response];
    },error => {
      console.log(error)
    })
  }

  getTypes(){
    this.shopService.getTypes().subscribe(response =>{
      this.types = [{id: 0, name: 'All'}, ...response];
    },error => {
      console.log(error)
    })
  }

  OnBrandSelected(brandId: number){
    this.shopParams.brandId = brandId;
    this.getProducts()
  }

  OnTypeSelected(typeId: number){
    this.shopParams.typeId = typeId;
    this.getProducts()
  }

  OnSortSelected(event: Event){
    const sort = (event.target as HTMLInputElement).value
    this.shopParams.sort = sort;
    this.getProducts()
  }

  onPageChanged(event: any){
    this.shopParams.pageNumber = event.page;
  }
}
