import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { HttpClient, HttpHandler } from '@angular/common/http';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';
import { NgFor } from '@angular/common';
import { ShopComponent } from "./shop/shop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NgFor, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
  }
}
