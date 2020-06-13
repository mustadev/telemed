import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';
import { AuthService } from 'src/app/services/auth.service';
import { Password } from 'src/app/models/Password';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  isPasswordFailed = false;
  isPasswordSuccess = false;
  errorMessage = '';
  successMessage = '';
  passwordMatch:boolean = true;
  form:any = {};
  patient:Patient;
  avatar:any;
  constructor(
    private patientService:PatientService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.patientService.getById(user.id).subscribe(patient => {
        this.patient = patient;
      });
      this.patientService.getAvatar(user.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      })
    })
  }

  onSubmit(){
    if (this.form.newPassword !== this.form.confirmPassword){
      this.passwordMatch = false;
      setTimeout(() =>  this.passwordMatch = true, 2000);
      console.log("password does not match");
      return;
    }
    const password = new Password(this.form.oldPassword, this.form.newPassword);
    this.patientService.updatePassword(this.patient.id, password).subscribe(message =>{
      console.log("password success: ", JSON.stringify(message));
      this.isPasswordFailed = false;
      this.isPasswordSuccess = true;
      this.successMessage = message.message;
      setTimeout(() => this.successMessage = '', 2000);
    }, err => {
      this.isPasswordFailed = true;
      setTimeout(() => this.isPasswordFailed = false, 2000);
      console.log("password failed: ", JSON.stringify(err));
      this.errorMessage = err.error.message;
    });
  }
}