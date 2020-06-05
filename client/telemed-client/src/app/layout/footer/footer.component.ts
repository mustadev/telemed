import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from 'src/app/models/User';

  const DOCTOR = "DOCTOR";
  const PATIENT = "PATIENT";
  const ADMIN = "ADMIN";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
    private authService:AuthService,
    private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.authService.getLoggedInUser.subscribe((user:User) => this.updateFooter(user));

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

  updateFooter(user:User){
    console.log("LoggerInUser " + user);
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
