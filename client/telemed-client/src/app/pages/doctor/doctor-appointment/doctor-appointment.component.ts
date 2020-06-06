import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { Patient } from 'src/app/models/Patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  @Input() appointment:Appointment;
  appointmentDate:Date;
  patient:Patient;
  avatar:any;
  
  constructor(
    private appointmentService:AppointmentService,
    private patientService:PatientService) { }

  ngOnInit(): void {
    this.appointmentDate = new Date(this.appointment.appointmentDate);
    this.patientService.getById(this.appointment.patientId).subscribe(res => {
      this.patient = res;
    });
    this.patientService.getAvatar(this.appointment.patientId).subscribe(avatar => {
      this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
    });
  }

  acceptAppointment(){
    this.appointment.state = "ACCEPTED";
    this.appointmentService.update(this.appointment).subscribe(res => {
      this.appointment = res;
    });
  }

  cancelAppointment(){
    this.appointment.state = "CANCELED";
    this.appointmentService.update(this.appointment).subscribe(res => {
      this.appointment = res;
    });
  }

  viewAppoitment(){
    // navigate to appoitment page;
  }
}
