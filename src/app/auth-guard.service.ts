import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot , Route  } from '@angular/router';
import { AuthService } from './auth.service';
import {map } from 'rxjs/operators/map'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{ 

  constructor( private router : Router,
               private authService: AuthService) { }

  canActivate(route , state : RouterStateSnapshot){
    return this.authService.user$.pipe(map( user =>{
      if(user) return true

      this.router.navigate(['login'], { queryParams: { returnUrl: state.url} })
    }))
  }
  
}
