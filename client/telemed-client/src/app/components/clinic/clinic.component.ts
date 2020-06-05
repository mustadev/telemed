import { Component, OnInit, Input } from '@angular/core';
import { Clinic } from 'src/app/models/Clinic';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  @Input() clinic:Clinic;
  @Input() doctor:Doctor;
  clinicPhotos:any[];
  constructor(
    private doctorService:DoctorService
  ) { }

  ngOnInit(): void {
    console.log("Clinic: ", JSON.stringify(this.clinic));
    this.doctorService.getClinicPhotos(this.doctor.id).subscribe(photos => {
      photos.filter(photo => {
        console.log("photo ", photo);
        return photo === null;
      });
      this.clinicPhotos = photos.map(photo => {
        return {
          "id": photo.id,
          "image": 'data:image/jpeg;base64,' + photo.image.data
        };
      });
    })
  }

}
