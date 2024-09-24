import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
