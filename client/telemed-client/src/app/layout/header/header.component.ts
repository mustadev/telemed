import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';


  const DOCTOR = "DOCTOR";
  const PATIENT = "PATIENT";
  const ADMIN = "ADMIN";
  
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
export class HeaderComponent implements OnInit {

  //keep track of collapse state
  public isMenuCollapsed = true;

  private roles: string[];
  isLoggedIn = false;
  //showAdminBoard = false;
  //showModeratorBoard = false;
  showDoctorMenu = false;
  showPatientMenu = false;
  showAdminMenu = false;
  username: string;
  loggedInUser:any;

  constructor(
    private tokenStorageService: TokenStorageService, 
    private authService: AuthService,
    private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.authService.getLoggedInUser.subscribe((user:User) => this.updateHeader(user));

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      const userType = this.tokenStorageService.getUserType();
      this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showDoctorMenu = userType == DOCTOR;
      this.showPatientMenu = userType == PATIENT;
      this.showAdminMenu = userType == ADMIN;
      console.log("userType " + userType);
      console.log("showDoctorMenu: " +  this.showDoctorMenu);
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(["home"]).then(()=> {
      window.location.reload();
    });
  }

  updateHeader(user:User){
    console.log("LoggerInUser ", user);
      this.isLoggedIn = true;
      this.loggedInUser = user;
      console.log("logged in user : " + this.loggedInUser);
      this.showDoctorMenu = user.userType == DOCTOR;
      console.log("showDoctorMenu");
      console.log(this.showDoctorMenu);
      this.showPatientMenu = user.userType == PATIENT;
      console.log("this.showPatientMenu");
      console.log(this.showPatientMenu);
      this.showAdminMenu = user.userType == ADMIN;
      console.log("this.showAdminMenu");
      console.log(this.showAdminMenu);
  }

}
