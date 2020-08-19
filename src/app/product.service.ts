import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor( private db : AngularFireDatabase) { }

  create(product){
    this.db.list('/product').push(product)
  }

  getAll(){
   return this.db.list('/product')
  }
  
  getProduct(productId){
    return this.db.object('/product/' + productId);
  }

  updateProduct(productId , product){
    return this.db.object('/product/' + productId).update(product)
  }
  
  deleteProduct(productId){
    return this.db.object('/product/'+ productId).remove();
  }

}
