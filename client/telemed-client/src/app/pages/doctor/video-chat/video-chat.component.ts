import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';


const offerOptions: RTCOfferOptions = {
  offerToReceiveAudio: true,
  offerToReceiveVideo: true
};

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit, AfterViewChecked {

  // @ViewChild('vid1', {read: ElementRef}) vid1;
  // @ViewChild('vid2') vid2: ElementRef;

  avatar: any;

  public pc1: RTCPeerConnection;
  public pc2: RTCPeerConnection;
  localstream: MediaStream;
  private vid1: any;
  private vid2: any;

  callButtonDisabled: true;
  acceptButtonDisabled: true;
  hanguoButtonDisabled: true;

// TODO test why answer not working
// TODO see if stream passes in 

  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewChecked() {


    console.log("ngAfterViewChecked Run");
  }
  ngAfterViewInit() {
    this.vid1 = document.getElementById("vid1");
    console.log('vid1', this.vid1);
    this.vid2 = document.getElementById("vid2");
    console.log('vid2', this.vid2);

  }

  call() {
    console.log("click");
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true
      })
      // .then(this.gotStream)
      .then((stream) => {
        console.log("stream", JSON.stringify(stream))
        console.log('vid1 in got stream', this.vid1);
        this.vid1.srcObject = stream;
        this.localstream = stream;
      })
      .catch(e => {
        // alert(`getUserMedia() error: ${e}`);
        console.log(`getUserMedia() error: ${e}`);
      });
  }

  gotStream(stream: MediaStream) {
    console.log('Received local stream');
    // this.vid1.nativeElement.srcObject = stream;
    // this.vid1.nativeElement.play();
    console.log('test again');
    console.log('vid1 in got stream', JSON.stringify(this.vid1));
    this.vid1 = document.getElementById("vid1");
    console.log('vid1 in after getElement got stream', this.vid1)
    this.vid1.srcObject = stream;
    this.localstream = stream;
  }

  start() {
    console.log('Starting Call');
    const videoTracks = this.localstream.getVideoTracks();
    const audioTracks = this.localstream.getAudioTracks();
    if (videoTracks.length > 0) {
      console.log(`Using Video device: ${videoTracks[0].label}`);
    }
    if (audioTracks.length > 0) {
      console.log(`Using Audio device: ${audioTracks[0].label}`);
    }

    const servers = null;
    this.pc1 = new RTCPeerConnection(servers);
    console.log('Created local peer connection object pc1', JSON.stringify(this.pc1));
    this.pc1.onicecandidate = e => this.onIceCandidate(this.pc1, e);
    this.pc2 = new RTCPeerConnection(servers);
    console.log('Created remote peer connection object pc2', JSON.stringify(this.pc2));
    this.pc2.onicecandidate = e => this.onIceCandidate(this.pc2, e);
    this.pc2.ontrack = (e:RTCTrackEvent) => this.gotRemoteStream(this.vid2, e);

    this.localstream.getTracks().forEach(track => this.pc1.addTrack(track, this.localstream));
    console.log('Adding Local Stream to peer connection');

    // this.pc1.createOffer(offerOptions).then(this.gotDescription1, this.onCreateSessionDescriptionError);
    this.pc1.createOffer(offerOptions).then((desc) => {
      console.log("pc1 ", this.pc1);
      // console.log("desc ", JSON.stringify(desc));
      this.pc1.setLocalDescription(desc).then(
        this.onSetLocalDescriptionSuccess,
        this.onSetLocalDescriptionError
      );
      console.log(`Offer from pc1\n${desc.sdp}`);
      this.pc2.setRemoteDescription(desc);
      // Since the 'remote' side has no media stream we need
      // to pass in the right constraints in order for it to
      // accept the incoming offer of audio and video.
      this.pc2.createAnswer().then((desc) => this.gotDescription2(desc, this.pc1, this.pc2), this.onCreateSessionDescriptionError);
    }, this.onCreateSessionDescriptionError);
  }


  onCreateSessionDescriptionError(error) {
    console.log(`Failed to create session description: ${error.toString()}`);
    stop();
  }

  onCreateAnswerError(error) {
    console.log(`Failed to set createAnswer: ${error.toString()}`);
    stop();
  }

  onSetLocalDescriptionError(error) {
    console.log(`Failed to set setLocalDescription: ${error.toString()}`);
    stop();
  }

  onSetLocalDescriptionSuccess() {
    console.log('localDescription success.');
  }

  onSetLocalRemoteAnswerSuccess(localStream:MediaStream, pc1){
    console.log("onSetLocalRemoteAnswerSuccess", localStream);
    localStream.getTracks().forEach(track => pc1.addTrack(track, this.localstream));
  }

  gotDescription1(desc: any) {
    console.log("pc1 ", this.pc1);
    console.log("desc ", JSON.stringify(desc));
    this.pc1.setLocalDescription(desc).then(
      this.onSetLocalDescriptionSuccess,
      this.onSetLocalDescriptionError
    );
    console.log(`Offer from pc1\n${desc.sdp}`);
    this.pc2.setRemoteDescription(desc);
    // Since the 'remote' side has no media stream we need
    // to pass in the right constraints in order for it to
    // accept the incoming offer of audio and video.
    this.pc2.createAnswer().then((desc) => this.gotDescription2(desc, this.pc1, this.pc2), this.onCreateSessionDescriptionError);
  }

  gotDescription2(desc:RTCSessionDescriptionInit, pc1:RTCPeerConnection, pc2:RTCPeerConnection) {
    // Provisional answer, set a=inactive & set sdp type to pranswer.
    // desc.sdp = desc.sdp.replace(/a=recvonly/g, 'a=inactive');
    // desc.type = 'pranswer';
    pc2.setLocalDescription(desc).then(this.onSetLocalDescriptionSuccess, this.onSetLocalDescriptionError);
    console.log(`Pranswer from pc2\n${desc.sdp}`);
    pc1.setRemoteDescription(desc);
  }

  gotDescription3(desc:RTCSessionDescriptionInit, pc2:RTCPeerConnection, pc1:RTCPeerConnection, localStream:MediaStream) {
    // Final answer, setting a=recvonly & sdp type to answer.
    
    // desc.sdp = desc.sdp.replace(/a=inactive/g, 'a=recvonly');
    // desc.type = 'answer';
    pc2.setLocalDescription(desc).then(this.onSetLocalDescriptionSuccess, this.onSetLocalDescriptionError);
    // pc2.setLocalDescription(desc).then(() => this.onSetLocalRemoteAnswerSuccess(localStream, pc1), this.onSetLocalDescriptionError);
    console.log(`Answer from pc2\n${desc.sdp}`);
    pc1.setRemoteDescription(desc);
  }

  accept() {
    this.pc2.createAnswer().then((desc) => this.gotDescription3(desc, this.pc2, this.pc1, this.localstream), this.onCreateAnswerError);
    // acceptButton.disabled = true;
    // callButton.disabled = true;
  }

  stop() {
    console.log('Ending Call' + '\n\n');
    this.pc1.close();
    this.pc2.close();
    this.pc1 = null;
    this.pc2 = null;
    // acceptButton.disabled = true;
    // callButton.disabled = false;
    // hangUpButton.disabled = true;
  }

  gotRemoteStream(vid2, e) {
    console.log("track", JSON.stringify(e.streams));
    console.log("vid", vid2);
    if (vid2.srcObject !== e.streams[0]) {
      this.vid2.srcObject = e.streams[0];
      console.log('Received remote stream');
    }
  }

  getOtherPc(pc) {
    return (pc === this.pc1) ? this.pc2 : this.pc1;
  }

  getName(pc) {
    return (pc === this.pc1) ? 'pc1' : 'pc2';
  }

  onIceCandidate(pc, event) {
    this.getOtherPc(pc)
      .addIceCandidate(event.candidate)
      .then(() => this.onAddIceCandidateSuccess(pc), err => this.onAddIceCandidateError(pc, err));
    console.log(`${this.getName(pc)} ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
  }

  onAddIceCandidateSuccess(pc) {
    console.log('AddIceCandidate success.', pc);
  }

  onAddIceCandidateError(pc, error) {
    console.log(`Failed to add Ice Candidate: ${pc} ${error.toString()}`);
  }

}
