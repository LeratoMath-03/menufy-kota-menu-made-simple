import { Component, inject } from '@angular/core';
import { Cart as CartService } from '../../customerServices/cart';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class Cart {
  cartService = inject(CartService);

  incrementItem(menuItemId: string, currentQuantity: number): void 
  {
    this.cartService.updateQuantity(menuItemId, currentQuantity + 1);
  }

  decrementItem(menuItemId: string, currentQuantity: number): void 
  {
    this.cartService.updateQuantity(menuItemId, currentQuantity - 1);
  }

  removeItem(menuItemId: string): void 
  {
    this.cartService.removeItem(menuItemId);
  }
}
