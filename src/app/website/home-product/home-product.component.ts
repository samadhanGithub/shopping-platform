import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CheckoutService } from '../../shared/services/checkout.service';

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.scss',
})

export class HomeProductComponent implements OnInit {
  productList: any[] = [];
  constructor(
    private products: ProductsService,
    private cart: CheckoutService
  ) {}

  ngOnInit() {
    this.products.getProducts().subscribe((response: any) => {
      this.productList = response;
    });
  }

  addToCart(data: any) {
    this.cart.updateCart(data);
  }
}
