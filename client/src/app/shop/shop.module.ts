import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ProductItemComponent
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
