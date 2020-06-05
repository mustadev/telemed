import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Review } from 'src/app/models/Review';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Output() addReview:EventEmitter<Review> = new EventEmitter()

  rating:number;
  content:string;
  authorId:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
     this.authService.getCurrentUser().subscribe(res => {
      this.authorId = res.id;
      console.log("::::::::: authorId: ", this.authorId);
    });
    
  }

  onSubmit(){
    console.log("authorId befor submit: ", this.authorId);
    console.log("rating ", this.rating);
    if (!this.rating){
      console.log("Warring rate has no value");
      return;
    }
    let review = new Review(this.content, [], this.rating, this.authorId);
    console.log("review : ", JSON.stringify(review));
    this.addReview.emit(review);
    this.content = "";
    this.rating = 0;
  }
}
