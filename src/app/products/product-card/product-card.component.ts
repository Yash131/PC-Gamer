import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
