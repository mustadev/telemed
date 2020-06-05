import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { Review } from 'src/app/models/Review';
import { ReviewService } from 'src/app/services/review.service';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-doctor-reviews',
  templateUrl: './doctor-reviews.component.html',
  styleUrls: ['./doctor-reviews.component.css']
})
export class DoctorReviewsComponent implements OnInit {

  avatar:any;
  doctor:Doctor;
  reviews:Review[]
  constructor(
    private authService:AuthService,
    private reviewService:ReviewService,
    private doctorService:DoctorService
  ) {
    this.authService.getCurrentUser().subscribe(user => {
      console.log("user ", JSON.stringify(user));
      this.doctorService.getById(user.id).subscribe(doc => {
        this.doctor = doc;
      })
      this.doctorService.getAvatar(user.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      });
      this.reviewService.getReviews(user.id).subscribe(reviews => {
        this.reviews = reviews;
      });
    });
   }

  ngOnInit(): void {
    
  }

}
