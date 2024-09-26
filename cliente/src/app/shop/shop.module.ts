import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShopComponent, 
    ProductItemComponent, 
    ProductDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ShopModule { }
