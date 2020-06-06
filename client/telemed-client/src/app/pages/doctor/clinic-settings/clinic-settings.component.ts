import { Component, OnInit, Type } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { Clinic } from 'src/app/models/Clinic';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ClinicLocation } from 'src/app/models/ClinicLocation';

@Component({
  selector: 'app-clinic-settings',
  templateUrl: './clinic-settings.component.html',
  styleUrls: ['./clinic-settings.component.css']
})
export class ClinicSettingsComponent implements OnInit {

  avatar:any;
  doctor:Doctor;
  clinic:Clinic;
  clinicPhotos:Array<any>
  specialities:string;
  services:string;

  uploadProgress:number;
  uploadErrorMessage:string;
  currentSelectedPhoto:any;
  successMessage:string='';

  constructor(private authService:AuthService, private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(res => {
      this.doctorService.getAvatar(res.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      });
      this.doctorService.getById(res.id).subscribe(doctor => {
        this.doctor = doctor;
      });
      this.doctorService.getClinic(res.id).subscribe(clinic => {
        this.clinic = clinic;
        console.log("Clinic : : ", JSON.stringify(this.clinic))
        if (!!!this.clinic){
          console.log("empty Clinic: ", JSON.stringify(this.clinic));
          this.clinic = Clinic.empty();
        }
        this.services = this.clinic.services.join(', ');
        this.specialities = this.clinic.specialities.join(', ');
      });
      this.doctorService.getClinicPhotos(res.id).subscribe(photos => {
        photos = photos.filter((photo) => {
          console.log("photo ", photo);
          return photo !== null;
        });
        this.clinicPhotos = photos.map(photo => {
          return {
            "id": photo.id,
            "image": 'data:image/jpeg;base64,' + photo.image.data
          };
        });
      });
    })
  }

  onSubmit(){
    console.log("services: ", this.services.split(','));
    console.log("services: ", this.specialities.split(','));
    this.clinic.services = this.services.split(',');
    this.clinic.specialities = this.specialities.split(',');
    console.log("clinic new name: ", JSON.stringify(this.clinic));
     this.doctorService.updateClinic(this.doctor.id, this.clinic).subscribe(clinic => {
       this.clinic = clinic;
       console.log("clinic: ", JSON.stringify(this.clinic))
        this.successMessage = "Change Saved";
        setTimeout(()=>{   
          this.successMessage = '';
     }, 3000);
    });
  }

  deleteClinicPhoto(photoId:string){
    console.log("Photo ID: ", photoId);
    this.doctorService.deleteClinicPhoto(this.doctor.id, photoId).subscribe(res =>{
      console.log("photo Deleted", JSON.stringify(res));
      this.doctorService.getClinicPhotos(this.doctor.id).subscribe(photos => {
        console.log(JSON.stringify(photos));
        // photos = photos.filter((photo, index, photos) => {
        //   console.log("photo ", photo);
        //   if(photo === null){
        //     console.log("photo is null");
        //     photos = photos.slice(index, 1);
        //   };
        // });
        photos = photos.filter((photo) => {
          console.log("photo ", photo);
          if(photo === null){
            console.log("photo is null");
            return false;
          };
          return true;
        });
        console.log("photos after filter: ", JSON.stringify(photos));
        this.clinicPhotos = photos.map(photo => {
          console.log("photo : ", JSON.stringify(photo));
          return {
            "id": photo.id,
            "image": 'data:image/jpeg;base64,' + photo.image.data
          };
        });
      });
    });
  }


  uploadClinicPhoto(event){
    this.currentSelectedPhoto = event.target.files.item(0);
    this.doctorService.uploadClinicPhoto(this.doctor.id,this.currentSelectedPhoto ).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.doctorService.getClinicPhotos(this.doctor.id).subscribe(photos => {
            this.clinicPhotos = photos.map(photo => {
              return {
                "id": photo.id,
                "image": 'data:image/jpeg;base64,' + photo.image.data
              };
            });
            this.uploadProgress = 0;
            this.currentSelectedPhoto = undefined;
          });
        }
      },
      err => {
        this.uploadProgress = 0;
        this.uploadErrorMessage = 'Could not upload the Photo!';
        this.currentSelectedPhoto = undefined;
      });
  }

  dragEnd(latitude:number, longitude:number){
    console.log("latitude: ", latitude, "longitude: ", longitude);
    this.clinic.location.latitude = latitude;
    this.clinic.location.longitude = longitude;
    
  }

  zoomChange(zoom:number){
    console.log("zoom: ", zoom);
    this.clinic.location.zoom = zoom;
    
  }

}
