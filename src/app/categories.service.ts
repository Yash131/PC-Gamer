import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db : AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories',{
      query:{
        orderByChild:'name'
      }
    });
  }

}
