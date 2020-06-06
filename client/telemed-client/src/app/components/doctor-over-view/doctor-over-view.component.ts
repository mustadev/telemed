import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { Clinic } from 'src/app/models/Clinic';

@Component({
  selector: 'app-over-view',
  templateUrl: './doctor-over-view.component.html',
  styleUrls: ['./doctor-over-view.component.css']
})
export class DoctorOverViewComponent implements OnInit {

  @Input() doctor:Doctor;
  @Input() clinic:Clinic;
  constructor() { }

  ngOnInit(): void {
  }

}
