import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  // @Input() max: number;
  @Output() currentRateChange = new EventEmitter<number>();
  @Input() currentRate:number;
  @Input() readonly:boolean = true;
 @Input() max:number = 5;
  // maxItem : any[];
 
 constructor(){}
 
 ngOnInit(){
 }

//  ngOnInit(){
//      this.maxItem = [];
//      for(var i=0;i<this.max;i++){
//          this.maxItem.push(i+1);
//      }
//  }
//  setClass(s:number){
//   if(this.readonly){
//     return {
//       "fa fa-star":true,
//       "ratingIcon":true,
//       "ratingHover":false,
//       "filled": s <= this.currentRate,
//      }
//    }
//    return {
//     "fa fa-star":true,
//     "ratingIcon":true,
//     "ratingHover":true,
//     "filled": s <= this.currentRate,
//    }

//  }
//  setHover(){
//    if(this.readonly){
//     return {
//       "ratingIcon": true,
//       "ratingHover":false,
//      }
//    }
//    return {
//     "ratingIcon":true,
//     "ratingHover":true,
//    }
// }
//  toggleRating(s:number){
//    if (this.readonly){
//      return;
//    }
//       this.currentRate = s;
//       this.onRating.emit(this.currentRate);
//  }

 }
