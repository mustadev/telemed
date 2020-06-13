import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';


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
    private patientService:PatientService,
    private tokenStorageService: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.patientService.getById(user.id).subscribe(patient => {
        this.patient = patient;
      });
    })
    
  }


  logout() {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(["home"]).then(() => {
      window.location.reload();
    });
  }

}
