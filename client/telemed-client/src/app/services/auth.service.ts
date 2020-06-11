import { Injectable, Output , EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { REST } from '../shared';

const AUTH_API = REST +'/api/auth';
const USER = AUTH_API + '/user';
const DOCTOR = AUTH_API + '/doctor';
const PATIENT = AUTH_API + '/patient';
const ADMIN = AUTH_API + '/admin';
const AUTH_USER = 'http://localhost:8080/api/auth/user'
const DOCTOR_API = 'http://localhost:8080/api/auth/doctor/'; //TODO make this just /auth/doctor/
const PATIENT_API = 'http://localhost:8080/api/auth/patient/';
const ADMIN_API = 'http://localhost:8080/api/auth/admin/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInUser: EventEmitter<User> = new EventEmitter();

  constructor(private http: HttpClient) { 
    console.log("AUTH URL", AUTH_API);
  }

  login(credentials, api:string): Observable<User> {
    console.log("email: " + credentials.email + " password: " + credentials.password);
    return this.http.post<User>(api + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
    
  }

  //TODO define registration params
  register(user, api:string): Observable<any> {
    return this.http.post(api + 'signup', {
      email: user.email,
      password: user.password,
      phone: user.phone,
      username: user.username,
      lastname: user.lastname,
      firstname: user.firstname
    }, httpOptions);
  }
  //TODO define patients

  doctorLogin(credentials): Observable<User> {
    return this.login(credentials, DOCTOR_API); 
  }

  //TODO define registration params
  doctorRegister(user): Observable<any> {
    return this.register(user, DOCTOR_API);
  }
  
  patientLogin(credentials): Observable<any> {
    return this.login(credentials, PATIENT_API); 
  }

  //TODO define registration params
  patientRegister(user): Observable<any> {
    return this.register(user, PATIENT_API);
  }
  
  adminLogin(credentials): Observable<any> {
    return this.login(credentials, ADMIN_API); 
  }

  //TODO define registration params
  adminRegister(user): Observable<any> {
    return this.register(user, ADMIN_API);
  }

  getCurrentUser():Observable<User>{
    return this.http.get<User>(AUTH_USER);
  }
  
}