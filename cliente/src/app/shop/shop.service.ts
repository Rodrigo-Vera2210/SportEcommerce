import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { response } from 'express';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5171/api/'
  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString())
    }

    if (shopParams.typeId !== 0){
      params = params.append('typeId', shopParams.typeId.toString())
    }

    if (shopParams.search){
      params = params.append('search', shopParams.search)
    }

    params = params.append('sort', shopParams.sort)
    params = params.append('pageIndex', shopParams.pageNumber.toString())
    params = params.append('pageSize', shopParams.pageSize.toString())

    return this.http.get<IPagination>(this.baseUrl + 'product', {observe: 'response', params}).pipe(
      map(response => {
        console.log(response)
        return response.body
      })
    )
  }

  getProduct(id: number){
    return this.http.get<IProduct>(this.baseUrl + 'product/' + id)
  }
  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'product/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'product/types');
  }
}
