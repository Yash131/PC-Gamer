import { Component } from '@angular/core';
import { ToastrService} from 'ngx-toastr' ;
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.css']
})
export class LoginWithGoogleComponent{

  constructor(private authService: AuthService,
              private toaster: ToastrService) { }

  login(){
  
      this.authService.login();
      this.toaster.success('Hi Whatsup..','Login Successful',{
      extendedTimeOut:1000
      })

  }



}
