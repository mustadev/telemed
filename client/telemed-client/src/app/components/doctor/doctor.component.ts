import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { Clinic } from 'src/app/models/Clinic';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctor: Doctor;
  clinic:Clinic;
  clinicPhotos:Array<any>;
  retrievedAvatar:string;
  retrieveResonse:any;
  base64Data:string;
  speciality: string;
  showDefaultAvatar:boolean = false;

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    //Get Doctor Avatar
    this.doctorService.getAvatar(this.doctor.id).subscribe(res=> {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse?.image?.data;
      this.retrievedAvatar = 'data:image/jpeg;base64,' + this.base64Data;
      console.log(res);
      //console.log("base64", this.base64Data);
      console.log("retrievedAvatar: ", this.retrievedAvatar);
      if (res?.image?.data === undefined){
        this.showDefaultAvatar = true;
        console.log("show default");
        
      }
    });
    //Get Doctor Clinic
    this.doctorService.getClinic(this.doctor.id).subscribe(res => {
      this.clinic = res
    });

    //Get Clinic Photos
    this.doctorService.getClinicPhotos(this.doctor.id).subscribe(res => {
      //Convert image to base64 and return it;
      this.clinicPhotos = res.map(photo => 'data:image/jpeg;base64,' + photo.image.data);
    });

  }
}
