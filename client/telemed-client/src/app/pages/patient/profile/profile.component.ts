import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/Patient';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  patient:Patient;
  avatar:any;
  birthday:string;
  currentSelectedAvatar:any;
  uploadProgress:number;
  uploadErrorMessage:string;
  constructor(
    private authService:AuthService,
    private patientService:PatientService
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.patientService.getById(user.id).subscribe(patient => {
        this.patient = patient;
        // const isoBirthday = new Date(patient.birthday);
        // this.birthday = isoBirthday.toISOString().substr(0, 10);;
        console.log("birthday : ", this.patient.birthday); 
      });
      this.patientService.getAvatar(user.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      });
    })
  }


  onSubmit(){
    console.log("patient new name: ", JSON.stringify(this.patient));
    // const birthday = new Date(this.birthday)
    // this.patient.birthday = birthday.toISOString();
    this.patientService.updatePatient(this.patient).subscribe(patient => {
       this.patient = patient;
       window.location.reload();
    });
  }


  uploadAvatar(event){
    console.log("upload started");
    this.currentSelectedAvatar = event.target.files.item(0);
    this.patientService.uploadAvatar(this.patient.id,this.currentSelectedAvatar ).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.patientService.getAvatar(this.patient.id).subscribe(avatar => {
            this.avatar = 'data:image/jpeg;base64,' + avatar.image.data
            this.uploadProgress = 0;
            this.currentSelectedAvatar = undefined;
          });
        }
      },
      err => {
        this.uploadProgress = 0;
        this.uploadErrorMessage = 'Could not upload the Photo!';
        this.currentSelectedAvatar = undefined;
      });
  }
}
