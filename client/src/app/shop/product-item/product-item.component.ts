import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent{
  @Input() product!: IProduct;

}
