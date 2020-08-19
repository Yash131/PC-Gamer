import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';

import { Subscription } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements   OnDestroy {

  products:Product[];
  filteredProduct: any[];
  subscription: Subscription;

  constructor(private productService : ProductService){ 

   this.subscription =  this.productService.getAll()
    .subscribe(products => this.filteredProduct = this.products = products)

  }

  filter(search:string ){
    this.filteredProduct = (search) ?
      this.products.filter(p => p.title.toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())) : this.products;
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
