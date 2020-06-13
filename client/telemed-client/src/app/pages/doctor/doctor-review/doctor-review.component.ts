import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-review',
  templateUrl: './doctor-review.component.html',
  styleUrls: ['./doctor-review.component.css']
})
export class DoctorReviewComponent implements OnInit {

  @Input() review:Review;
  patient:Patient;
  avatar:any;
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    console.log("patient id!!!!", this.review.patientId);
    this.patientService.getById(this.review.patientId).subscribe(patient => {
      this.patient = patient;
    });
    this.patientService.getAvatar(this.review.patientId).subscribe(avatar => {
      console.log(JSON.stringify(avatar));
      this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
    })
  }

}
