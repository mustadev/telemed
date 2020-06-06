import { Injectable } from '@angular/core';
import { HttpClient , HttpParams, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from  'rxjs/operators';
import { Doctor } from '../models/Doctor';
import { Clinic } from '../models/Clinic';
import { Password } from '../models/Password';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorUrl:string = "http://localhost:8080/doctors";
  
  constructor(private http:HttpClient) { }

  
  getDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl);
  }

  getById(id:string):Observable<Doctor>{
    return this.http.get<Doctor>(this.doctorUrl + "/" + id);
  }

  updateDoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.put<Doctor>(this.doctorUrl, doctor);
  }
  
  
  getByUsername(username:string):Observable<Doctor>{
    return this.http.get<Doctor>(this.doctorUrl + "/username/" + username);
  }

  
  search(city:string, query:string):Observable<Doctor[]>{
    const params = new HttpParams()
      .set('city', city)
      .set('query', query);
    console.log("doc service", "city: " + city, "query : " + query);
    return this.http.get<Doctor[]>(this.doctorUrl, {'params': params})
  }

  getAvatar(id:string): Observable<any>{
    return this.http.get(this.doctorUrl +  "/" + id + '/avatar');
  }

  uploadAvatar(doctorId:string, file:File):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();

    formData.append('avatar', file);
    const req = new HttpRequest('POST', this.doctorUrl + '/' + doctorId + '/avatar', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);

  }

  getClinic(id:string): Observable<Clinic>{
    return this.http.get<Clinic>(this.doctorUrl +  "/" + id + '/clinic');
  }

  getClinicPhotos(id:string): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.doctorUrl +  "/" + id + '/clinic/photos');
  }

  updateClinic(doctorId:string, clinic:Clinic):Observable<Clinic>{
    return this.http.post<Clinic>(this.doctorUrl + '/' + doctorId + '/clinic', clinic);
  }

  deleteClinicPhoto(doctorId:string, photoId:string):Observable<any>{
    return this.http.delete(this.doctorUrl + '/' + doctorId + '/clinic/photos/' + photoId);
  }

  uploadClinicPhoto(doctorId:string, file:File):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();

    formData.append('photo', file);
    const req = new HttpRequest('POST', this.doctorUrl + '/' + doctorId + '/clinic/photos', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);

  }

  updatePassword(doctorId:string, password:Password):Observable<any>{
    return this.http.post<any>(this.doctorUrl + '/' + doctorId + '/password',password);
  }

}
