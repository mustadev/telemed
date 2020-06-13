import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { Review } from 'src/app/models/Review';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  doctors: Array<Doctor> = [];
  searchCity:string = "";
  searchQuery:string = "";

  constructor(
    private doctorService: DoctorService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.searchCity = params.get('city');
            this.searchQuery = params.get('query');
            this.search(this.searchCity, this.searchQuery);
        });
    // this.doctorService.getDoctors().subscribe((doctors) => {
    //     console.log(doctors);
    //     this.doctors = doctors;
    //   });

    

  }

  search(location:string, query:string){
    console.log("searchCom", "location: " + location, "query: " +query);
    this.doctorService
    .search(location, query)
    .subscribe(doctors => this.doctors = doctors);
  }

}
