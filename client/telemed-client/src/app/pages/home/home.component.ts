import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router) { }

  ngOnInit(): void {
  }
  
  search(city:string, query:string){
    console.log("city: " + city, "query : " + query);
    this.router.navigate(["search"], { queryParams: { "city": city, "query": query} });
  }
}
