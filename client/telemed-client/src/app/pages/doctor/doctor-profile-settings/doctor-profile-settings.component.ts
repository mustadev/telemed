import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor-profile-settings',
  templateUrl: './doctor-profile-settings.component.html',
  styleUrls: ['./doctor-profile-settings.component.css']
})
export class DoctorProfileSettingsComponent implements OnInit {

  doctor:Doctor;
  avatar:any;
  currentSelectedAvatar:any;
  uploadProgress:number;
  uploadErrorMessage:string;

  constructor(
    private doctorService:DoctorService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(res => {
      this.doctorService.getById(res.id).subscribe(doc => {
        this.doctor = doc;
      });
      this.doctorService.getAvatar(res.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      })
    })
  }

  
  onSubmit(){
    console.log("clinic new name: ", JSON.stringify(this.doctor));
     this.doctorService.updateDoctor(this.doctor).subscribe(doc => {
       this.doctor = doc;
       window.location.reload();
    });
  }


  uploadAvatar(event){
    this.currentSelectedAvatar = event.target.files.item(0);
    this.doctorService.uploadAvatar(this.doctor.id,this.currentSelectedAvatar ).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.doctorService.getAvatar(this.doctor.id).subscribe(avatar => {
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
