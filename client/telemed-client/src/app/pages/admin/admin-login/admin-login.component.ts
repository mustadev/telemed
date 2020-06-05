import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { TokenStorageService } from '../../../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  retUrl:string = "admin/profile";

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
  }

  onSubmit() {
    this.authService.adminLogin(this.form).subscribe(
      (user:User) => {
        this.tokenStorage.saveToken(user.accessToken);
        this.tokenStorage.saveUser(user);
        this.tokenStorage.saveUserType(user.userType);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.authService.getLoggedInUser.emit(user);
        console.log("login successful");
        console.log(this.tokenStorage.getUser());
        console.log( 'return to '+ this.retUrl);
           if (this.retUrl!=null) {
                this.router.navigate( [this.retUrl]);
           } else {
                this.router.navigate( ['admin/profile']);
           }
           
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  
}