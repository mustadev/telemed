import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() doctor:Doctor;
  @Input() isPatient:boolean;
  @Output() refresh:EventEmitter<any> = new EventEmitter()
  reviews:Review[]
  rating:number;
  constructor(private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.refreshReviews();
  }


  addReview(review:Review){
    console.log('review : ' + JSON.stringify(review))
    this.reviewService.addReview(this.doctor.id, review).subscribe(res => {
      console.log("doctor reviews : ", JSON.stringify(res))
      this.refreshReviews()
    });
  }

  deleteReview(review:Review){
    this.reviewService.deleteReview(this.doctor.id, review.id).subscribe(res => {
      console.log("doctor reviews : ", JSON.stringify(res))
      // const index = this.reviews.indexOf(review, 0);
      //     if (index > -1) {
      //        this.reviews.splice(index, 1);
      //     }
      this.refreshReviews();
    });
  }

  editReview(review:Review){
    this.reviewService.updateReview(this.doctor.id, review).subscribe(res => {
      console.log("doctor reviews : ", JSON.stringify(res))
      this.refreshReviews()
    });
  }

  refreshReviews(){
    console.log("doctor: ", JSON.stringify(this.doctor))
    this.refresh.emit("refresh");
    this.reviewService.getReviews(this.doctor?.id).subscribe(res => {
      console.log("doctor reviews : ", JSON.stringify(res))
      this.reviews = res;
    })
  }
}
