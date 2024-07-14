import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { CheckoutService } from '../../shared/services/checkout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, DoCheck {
  cartDetails: any = ['samadhan'];
  cartLength: any;
  constructor(private cart: CheckoutService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  ngDoCheck() {
    this.cartLength = this.cart.cartCount;
    console.log(this.cartLength);
  }

  getDetails() {
    this.cart.currentCartItem.subscribe((res) => {
      this.cartLength = res;
    });
  }
}
