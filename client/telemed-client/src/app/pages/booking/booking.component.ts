import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Appointment } from 'src/app/models/Appointment';
import { Doctor } from 'src/app/models/Doctor';
import { Patient } from 'src/app/models/Patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  doctor:Doctor;
  doctorAvatar:any
  patient:Patient;
  appointment:Appointment = new Appointment();
  appointmentDate:string;
  successMessage:string="";
  constructor(
    private route:ActivatedRoute, 
    //private location:Location,
    private router:Router,
    private authService:AuthService,
    private doctorService:DoctorService,
    private patientService:PatientService,
    private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.route.params
  .subscribe(
    (params: Params) => {
       params['id'];
      this.doctorService.getById(params['id']).subscribe(res =>{
        this.doctor = res;
        this.appointment.doctorId = this.doctor.id;

        console.log("Doctor: " + this.doctor.id);
      });
      this.doctorService.getAvatar(params['id']).subscribe(avatar =>{
        this.doctorAvatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      })
  });
  this.authService.getCurrentUser().subscribe(user => {
    this.patientService.getById(user.id).subscribe(res => {
      this.patient = res;
      this.appointment.patientId = this.patient.id;
      console.log("Patient: " + this.patient.id);
    })
  });
  
}

onSubmit(){
  console.log("date : ", this.appointmentDate);
  console.log(JSON.stringify(this.appointment));
  const appDate = new Date(this.appointmentDate);
  const bookingDate = new Date(); //TODO cela devrait être fait à back-end
  this.appointment.state = "PENDING";
  this.appointment.appointmentDate = appDate.toISOString();
  this.appointment.bookingDate = bookingDate.toISOString();
  console.log("iso date", appDate.toISOString());
  console.log("appoin", JSON.stringify(this.appointment));
  this.appointmentService.add(this.appointment).subscribe(res => {
    console.log("appointment added", JSON.stringify(res));
    this.appointmentDate = "";
    this.appointment.description = "";
    this.successMessage = "Appointments Sent";
    setTimeout(()=>{   
      this.successMessage = '';
 }, 3000);
  });
  
  //this.location.back();
  //this.router.navigate(["home"]);
}

}
