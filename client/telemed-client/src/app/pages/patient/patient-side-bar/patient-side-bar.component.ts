import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patient-side-bar',
  templateUrl: './patient-side-bar.component.html',
  styleUrls: ['./patient-side-bar.component.css']
})
export class PatientSideBarComponent implements OnInit {

  @Input() avatar:any;
  patient:Patient;
  constructor(
    private authService:AuthService,
    private patientService:PatientService ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.patientService.getById(user.id).subscribe(patient => {
        this.patient = patient;
      });
    })
    
  }

}
