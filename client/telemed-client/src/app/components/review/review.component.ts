import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';
import { Like } from 'src/app/models/Like';
import { ReviewService } from 'src/app/services/review.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  currentUserId:string;
  author:Patient;
  avatar:any;
  like:Like;
  isLiked:boolean;
  @Input() review:Review;
  @Output() deleteReview:EventEmitter<Review> = new EventEmitter();
  @Output() editReview:EventEmitter<Review> = new EventEmitter();
  //@Output() toggleLike:EventEmitter<Like> = new EventEmitter();
  constructor(
    private patientService:PatientService, 
    private reviewService:ReviewService,
    private autheService:AuthService) { }

  ngOnInit(): void {
    //TODO get author
    
    this.patientService.getById(this.review.patientId).subscribe(res => {
      this.author = res;
    });
    this.patientService.getAvatar(this.review.patientId).subscribe(res=> {
        this.avatar = 'data:image/jpeg;base64,' + res?.image?.data;
        console.log("Avatar: ", this.avatar);
    });
    this.autheService.getCurrentUser().subscribe(res => {
      this.currentUserId = res.id;
      this.like = new Like(this.currentUserId);
      this.setLiked(this.like);
    })
    

  }

  setLiked(like:Like){
    this.isLiked = this.review.likes.includes(like);
    console.log("isLiked: " + this.isLiked);
  }
  getLiked():boolean{
    return this.review.likes.includes(this.like);
  }

  toggleLike(){
   
    if(!this.isLiked){
      console.log("liking")
      this.reviewService.likeReview(
        this.review.id, this.like).subscribe(res => {
          console.log("liking: ", JSON.stringify(res));
          this.review.likes.push(this.like);
          this.isLiked = true;
        });
    }
    if(this.isLiked){
      console.log("unliking")
      this.reviewService.unlikeReview(
        this.review.id, this.like).subscribe(res => {
          console.log("unliking: ", JSON.stringify(res));
          let likes = this.review.likes;
          console.log("befor delete ", JSON.stringify(likes));
          const index = likes.indexOf(this.like, 0);
          if (index > -1) {
             likes.splice(index, 1);
          }
          console.log("after delete ", JSON.stringify(likes));
          this.review.likes = likes;
          this.isLiked = false;
        });
    }
  }

  onEdit(){
    this.editReview.emit(this.review);
  }

  onDelete(){
    this.deleteReview.emit(this.review);
  }

  setClass(){
    return {
      "liked":this.isLiked,
      "fa": true,
      "fa-thumbs-up": true
    }
  }
  
}
