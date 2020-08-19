import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs';
import * as firebase from 'firebase'
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/appUser';
import { switchMap } from 'rxjs/operators/switchMap';
import { UserService } from './user.service';
import 'rxjs-compat/add/observable/of'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$: Observable<firebase.User>;

  constructor( private userService: UserService,
               private afAuth: AngularFireAuth ,
               private route: ActivatedRoute   ) 
    { 

      this.user$ = this.afAuth.authState
    }

  login(){

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
    localStorage.setItem('returnUrl' , returnUrl)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$():Observable<AppUser>{
    return this.user$.pipe(
      switchMap(user=>{
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      }))
  }
   
}
