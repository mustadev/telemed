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
  patientAvatar:any;
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getById(this.review.patientId).subscribe(patient => {
      this.patient = patient;
    });
    this.patientService.getAvatar(this.review.patientId).subscribe(avatar => {
      this.patientAvatar = 'data:image/jpeg;base64,' + avatar.image.data;
    })
  }

}
