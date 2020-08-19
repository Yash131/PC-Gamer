import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { AppUser } from './models/appUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'PC-GamersApp';
  appUser: AppUser;

  constructor(private authService: AuthService, router: Router,
              private userService: UserService){
    
    authService.user$.subscribe( user => {
      if(user){

        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl){
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);

        }
      }
    })

    

      
  }

  



  
}