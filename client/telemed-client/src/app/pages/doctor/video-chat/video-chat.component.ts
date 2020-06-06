import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';

import  NextRTC  from 'nextrtc-js-client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit {

  doctorId:string;
  avatar:any;
  doctor:Doctor;
  log:string="";
  nextRTC:NextRTC;
  constructor(
    private doctorService:DoctorService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe(res => {
      this.doctorService.getById(res.id).subscribe(doc => {
        this.doctor = doc;
      });
      this.doctorService.getAvatar(res.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      })
    })
    // wsURL: 'wss://' + location.hostname + (location.port ? ':' + location.port : '') + '/signaling',
    // this.nextRTC = new NextRTC({
    //   wsURL: "wss://localhost:8081/signaling",
    //   mediaConfig: {
    //     video: true,
    //     audio: false,
    //   },
    //   peerConfig: {
    //     iceServers: [
    //       {urls: "stun:23.21.150.121"},
    //       {urls: "stun:stun.l.google.com:19302"},
    //       {urls: "turn:numb.viagenie.ca", credential: "webrtcdemo", username: "louis@mozilla.com"}
    //     ],
    //     iceTransportPolicy: 'all'
    //   }
    // });

    // nextRTC.on('upperCase', function (event) {
    //   $('#convId').val(event.content);
    // });
    
    this.nextRTC.on('created', function (event) {
      console.log(JSON.stringify(event));
      this.log = "Room with id ' + event.content +  has been created, share it with your friend to start videochat</li>"
    });
    
    this.nextRTC.on('joined', function (event) {
      this.log = '<li>You have been joined to conversation ' + event.content + '</li>';
    });
    
    this.nextRTC.on('newJoined', function (event) {
      this.log = '<li>Member with id ' + event.from + ' has joined conversation</li>';
    });
    
    this.nextRTC.on('localStream', function (stream) {
      let local:any = document.getElementById('locale');
      local.srcObject = stream.stream;
    });
    
    this.nextRTC.on('remoteStream', function (stream) {
      let remote:any = document.getElementById('remote');
      remote.srcObject = stream.stream;
    });
    
    this.nextRTC.on('left', function (event) {
      this.nextRTC.release(event.from);
      console.log("Left", JSON.stringify(event.from));
    });
    
    this.nextRTC.on('error', function (event) {
      console.log('Error', JSON.stringify(event));
    });
  }

  createConv(){
    this.nextRTC.create("convId");
  }



}
