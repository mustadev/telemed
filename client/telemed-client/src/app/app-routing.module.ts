import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent as DoctorProfileComponent } from './pages/doctor/profile/profile.component';
import { LoginComponent as DoctorLoginComponent } from './pages/doctor/login/login.component';
import { SignupComponent as DoctorSingupComponent} from './pages/doctor/signup/signup.component';
import { DoctorDashBoardComponent } from './pages/doctor/doctor-dash-board/doctor-dash-board.component';
import { DoctorProfileSettingsComponent } from './pages/doctor/doctor-profile-settings/doctor-profile-settings.component';
import { DoctorChangePasswordComponent} from './pages/doctor/doctor-change-password/doctor-change-password.component';
import { ClinicSettingsComponent } from './pages/doctor/clinic-settings/clinic-settings.component';
import { DoctorAppointmentsComponent } from './pages/doctor/doctor-appointments/doctor-appointments.component'; 
import { DoctorReviewsComponent } from './pages/doctor/doctor-reviews/doctor-reviews.component'; 
import { LoginComponent as PatientLoginComponent } from './pages/patient/login/login.component';
import { SignupComponent as PatientSingupComponent} from './pages/patient/signup/signup.component';
import { ProfileComponent as PatientProfileComponent } from './pages/patient/profile/profile.component';
import { PatientAppointmentsComponent } from './pages/patient/patient-appointments/patient-appointments.component';
import { SearchComponent } from './pages/search/search.component';

import { DoctorAuthGuard } from './services/doctor-auth.guard';
import { PatientAuthGuard } from './services/patient-auth-guard';
import { ChangePasswordComponent } from './pages/patient/change-password/change-password.component';
import { BookingComponent } from './pages/booking/booking.component';
import { VideoChatComponent as DoctorVideoChatComponent } from './pages/doctor/video-chat/video-chat.component';
import { VideoChatComponent as PatientVideoChatComponent } from './pages/patient/video-chat/video-chat.component';

// @ts-ignore
// @ts-ignore
// const routes: Routes = [
//   { path:  '', pathMatch: 'full', redirectTo: 'home' },
//   { path: 'home', component: HomeComponent },
//   { path: 'contact' , component: ContactComponent },
//   { path: 'about' , component: AboutComponent },
//   { path: 'doctor/profile/:id' , component: DoctorProfileComponent},
//   { path: 'doctor/login' , component: DoctorLoginComponent },
//   { path: 'doctor/signup' , component: DoctorSingupComponent },
//   { path: 'doctor/dashboard' , component: DoctorDashBoardComponent, canActivate: [DoctorAuthGuard]},
//   { path: 'doctor/profile-settings' , component: DoctorProfileSettingsComponent, canActivate: [DoctorAuthGuard]},
//   { path: 'doctor/clinic-settings' , component: ClinicSettingsComponent, canActivate: [DoctorAuthGuard]},
//   { path: 'doctor/appointments' , component: DoctorAppointmentsComponent, canActivate: [DoctorAuthGuard]},
//   { path: 'doctor/reviews' , component: DoctorReviewsComponent, canActivate: [DoctorAuthGuard]},
//   { path: 'doctor/change-password', component: DoctorChangePasswordComponent, canActivate: [DoctorAuthGuard]},
//   { path: 'patient/profile' , component: PatientProfileComponent, canActivate:[PatientAuthGuard]},
//   { path: 'patient/login' , component: PatientLoginComponent },
//   { path: 'patient/signup' , component: PatientSingupComponent },
//   { path: 'search' , component: SearchComponent },
//   { path: 'booking/:id' , component: BookingComponent, canActivate: [PatientAuthGuard]},
//   { path: 'patient/appointments' , component: PatientAppointmentsComponent, canActivate: [PatientAuthGuard]},
//   { path: 'patient/change-password' , component: ChangePasswordComponent, canActivate: [PatientAuthGuard]},
//   { path: '**', redirectTo: 'home' } //this must be the last

// ];

const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'doctor/profile/:id' , component: DoctorProfileComponent},
  { path: 'doctor/login' , component: DoctorLoginComponent },
  { path: 'doctor/signup' , component: DoctorSingupComponent },
  { path: 'doctor/dashboard' , component: DoctorDashBoardComponent},
  { path: 'doctor/profile-settings' , component: DoctorProfileSettingsComponent},
  { path: 'doctor/clinic-settings' , component: ClinicSettingsComponent},
  { path: 'doctor/appointments' , component: DoctorAppointmentsComponent},
  { path: 'doctor/reviews' , component: DoctorReviewsComponent},
  { path: 'doctor/change-password', component: DoctorChangePasswordComponent},
  { path: 'doctor/chat/video', component: DoctorVideoChatComponent},
  { path: 'patient/profile' , component: PatientProfileComponent},
  { path: 'patient/login' , component: PatientLoginComponent },
  { path: 'patient/signup' , component: PatientSingupComponent },
  { path: 'patient/chat/video', component: PatientVideoChatComponent},
  { path: 'search' , component: SearchComponent },
  { path: 'booking/:id' , component: BookingComponent},
  { path: 'patient/appointments' , component: PatientAppointmentsComponent},
  { path: 'patient/change-password' , component: ChangePasswordComponent},
  { path: '**', redirectTo: 'home' } //this must be the last

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
