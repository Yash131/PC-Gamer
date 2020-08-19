import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$;

  constructor(private shoppingCartService : ShoppingCartService,
    private toaster : ToastrService) { }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

  orderSuccess(){
    this.toaster.success("Order Successful")
  }
  }
