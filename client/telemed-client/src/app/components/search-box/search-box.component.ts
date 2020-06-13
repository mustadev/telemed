import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(city:string, query:string){
    console.log("city: " + city, "query : " + query);
    this.router.navigate(["search"], { queryParams: { "city": city, "query": query} });
  }

}
