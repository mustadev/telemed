import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-side-bar',
  templateUrl: './doctor-side-bar.component.html',
  styleUrls: ['./doctor-side-bar.component.css']
})
export class DoctorSideBarComponent implements OnInit {

  @Input() avatar: any;
  // @Input() doctor:Doctor;
  showDefaultAvatar: boolean = false;
  doctor: Doctor;
  // avatar:any;
  constructor(private authService: AuthService,
    private doctorService: DoctorService,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.doctorService.getById(user.id).subscribe(doc => {
        this.doctor = doc;
        console.log("print avatar : ", this.avatar);
        // if (!this.avatar) {
        //   this.showDefaultAvatar = true;
        //   console.log("show default");
        // } else {
        //   this.showDefaultAvatar = false;
        // }
      });
      
      // this.doctorService.getAvatar(user.id).subscribe(avatar => {
      //   this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      // // });
      // if (!this.avatar) {
      //   this.showDefaultAvatar = true;
      //   console.log("show default");
      // } else {
      //   this.showDefaultAvatar = false;
      // }

    })
  }

  logout() {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(["home"]).then(() => {
      window.location.reload();
    });
  }


}
