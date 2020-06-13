import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { Appointment } from 'src/app/models/Appointment';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  @Input() appointment:Appointment;
  doctor:Doctor;
  doctorAvatar:any;
  appointmentDate:Date;
  bookingDate:Date;
  
  config = {
    leftTime: 0,
    size: 'large',
    demand: false
  };

  constructor(private doctorSerivce:DoctorService) { }

  ngOnInit(): void {
    this.config.leftTime = Math.floor( new Date(this.appointment.appointmentDate).getTime() - (new Date().getTime())/1000);
    console.log("left time" ,this.config.leftTime);
    this.appointmentDate = new Date(this.appointment.appointmentDate);
    this.bookingDate = new Date(this.appointment.bookingDate);
    this.doctorSerivce.getById(this.appointment.doctorId).subscribe(doc => {
      this.doctor = doc;
      console.log("debug appointment doctor: ", JSON.stringify(this.doctor));
    });
    this.doctorSerivce.getAvatar(this.appointment.doctorId).subscribe(avatar => {
      this.doctorAvatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
    })
  }

  onFinished(){
    console.log("timer finished");
  }

}
