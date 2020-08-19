import { Injectable } from '@angular/core';
import * as firebase from 'firebase' 
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppUser } from './models/appUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/user/' + user.uid).update({
      name: user.displayName ,
      email : user.email
    });
  }

  get(uid :string):FirebaseObjectObservable<AppUser>{
    return this.db.object('/user/' + uid)
  }
}
