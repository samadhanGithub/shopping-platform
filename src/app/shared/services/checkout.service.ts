import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private selectedCartItem = new BehaviorSubject<String>('');
  cartCount = 0;
  currentCartItem = this.selectedCartItem.asObservable();
  constructor() {}

  updateCart(data: any) {
    this.cartCount = data.id;
    return this.selectedCartItem.next(data);
  }
}
