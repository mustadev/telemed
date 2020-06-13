import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Password } from 'src/app/models/Password';
import { Doctor } from 'src/app/models/Doctor';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-change-password',
  templateUrl: './doctor-change-password.component.html',
  styleUrls: ['./doctor-change-password.component.css']
})
export class DoctorChangePasswordComponent implements OnInit {

  isPasswordFailed = false;
  isPasswordSuccess = false;
  errorMessage = '';
  successMessage = '';
  passwordMatch:boolean = true;
  form:any = {};
  doctor:Doctor;
  avatar:any;
  constructor(
    private doctorSerive:DoctorService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.doctorSerive.getById(user.id).subscribe(doc => {
        this.doctor = doc;
      });
      this.doctorSerive.getAvatar(user.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      })
    })
  }

  onSubmit(){
    if (this.form.newPassword !== this.form.confirmPassword){
      this.passwordMatch = false;
      console.log("password does not match");
      return;
    }
    const password = new Password(this.form.oldPassword, this.form.newPassword);
    this.doctorSerive.updatePassword(this.doctor.id, password).subscribe(message =>{
      console.log("password success: ", JSON.stringify(message));
      this.isPasswordFailed = false;
      this.isPasswordSuccess = true;
      this.successMessage = message.message;
      setTimeout(() => this.successMessage = '', 2000);
    }, err => {
      this.isPasswordFailed = true;
      console.log("password failed: ", JSON.stringify(err));
      this.errorMessage = err.error.message;
    });
  }
}
