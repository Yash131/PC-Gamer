import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../shopping-cart.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppUser } from '../models/appUser';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private toaster : ToastrService,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService) { 
  }

  async ngOnInit() { 
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(){
    
    this.authService.logout();
    this.toaster.error('See you later','You logged out');

  }


}
