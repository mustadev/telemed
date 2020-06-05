import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  avatar:any;
  appointments:Appointment[]
  patient:Patient;
  constructor(
    private appointmentService:AppointmentService,
    private authService:AuthService,
    private patientService:PatientService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.patientService.getById(user.id).subscribe(patient =>{
        this.patient = patient;
      });
      this.patientService.getAvatar(user.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      });
      this.appointmentService.getAllPatientAppoitments(user.id).subscribe(apps =>{
        this.appointments = apps;
        console.log("appointments: ", JSON.stringify(apps));
      });
    })
  }

}
