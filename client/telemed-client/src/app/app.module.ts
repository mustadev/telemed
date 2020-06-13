import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule , CountdownGlobalConfig} from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { SignupComponent as DoctorSignupComponent } from './pages/doctor/signup/signup.component';
import { LoginComponent as DoctorLoginComponent } from './pages/doctor/login/login.component';
import { ProfileComponent as DoctorProfileComponent } from './pages/doctor/profile/profile.component';
import { SignupComponent as PatientSignupComponent } from './pages/patient/signup/signup.component';
import { LoginComponent as PatientLoginComponent } from './pages/patient/login/login.component';
import { ProfileComponent as PatientProfileComponent } from './pages/patient/profile/profile.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { DoctorAuthGuard } from './services/doctor-auth.guard';
import { PatientAuthGuard } from './services/patient-auth-guard';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { ChangePasswordComponent} from './pages/patient/change-password/change-password.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DoctorDashBoardComponent } from './pages/doctor/doctor-dash-board/doctor-dash-board.component';
import { DoctorProfileSettingsComponent } from './pages/doctor/doctor-profile-settings/doctor-profile-settings.component';
import { PatientAppointmentsComponent } from './pages/patient/patient-appointments/patient-appointments.component';
import { PatientAppointmentComponent } from './pages/patient/patient-appointment/patient-appointment.component';

import { BookingComponent } from './pages/booking/booking.component';
import { RatingStarComponent} from './components/rating-star/rating-star.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { DoctorOverViewComponent } from './components/doctor-over-view/doctor-over-view.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ClinicSettingsComponent } from './pages/doctor/clinic-settings/clinic-settings.component';
import { DoctorSideBarComponent } from './pages/doctor/doctor-side-bar/doctor-side-bar.component';
import { PatientSideBarComponent } from './pages/patient/patient-side-bar/patient-side-bar.component';
import { DoctorAppointmentsComponent } from './pages/doctor/doctor-appointments/doctor-appointments.component';
import { DoctorAppointmentComponent } from './pages/doctor/doctor-appointment/doctor-appointment.component';
import { DoctorChangePasswordComponent } from './pages/doctor/doctor-change-password/doctor-change-password.component';
import { DoctorReviewsComponent } from './pages/doctor/doctor-reviews/doctor-reviews.component';
import { DoctorReviewComponent } from './pages/doctor/doctor-review/doctor-review.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { VideoChatComponent as DoctorVideoChatComponent } from './pages/doctor/video-chat/video-chat.component';
import { VideoChatComponent as PatientVideoChatComponent } from './pages/patient/video-chat/video-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SearchComponent,
    DoctorComponent,
    DoctorSideBarComponent,
    DoctorAppointmentsComponent,
    DoctorAppointmentComponent,
    DoctorChangePasswordComponent,
    DoctorReviewsComponent,
    DoctorReviewComponent,
    DoctorVideoChatComponent,
    DoctorProfileComponent,
    DoctorSignupComponent,
    DoctorLoginComponent,
    PatientLoginComponent,
    DoctorDashBoardComponent,
    RatingStarComponent,
    ClinicComponent,
    DoctorOverViewComponent,
    DoctorProfileSettingsComponent,
    ClinicSettingsComponent,
    // Patient Components
    PatientComponent,
    PatientSignupComponent,
    PatientAppointmentsComponent,
    PatientAppointmentComponent,
    PatientProfileComponent,
    PatientVideoChatComponent,
    PatientSideBarComponent,
    // Admin Components
    AdminProfileComponent,
    AdminLoginComponent,
    // generale Components
    ChangePasswordComponent,
    ReviewComponent,
    ReviewsComponent,
    BookingComponent,
    ReviewFormComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CountdownModule, // count down
    NgbModule, // add Ng Bootstrap support
    AgmCoreModule.forRoot({}) // add google map support
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DoctorAuthGuard,
    PatientAuthGuard,
    AdminAuthGuard,
    CountdownGlobalConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
