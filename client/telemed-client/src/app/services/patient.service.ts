import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';
import { Password } from '../models/Password';

const baseUrl = 'http://localhost:8080/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  //TODO Ayoub chaque method doit avoir le type de retour
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getById(id):Observable<Patient>{
    return this.http.get<Patient>(`${baseUrl}/${id}`);
  }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  update(id, data) {
    return this.http.put( `${baseUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }

  getAvatar(id:string): Observable<any>{
    return this.http.get(baseUrl +  "/" + id + '/avatar');
  }

  uploadAvatar(patientId:string, file:File):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();

    formData.append('avatar', file);
    const req = new HttpRequest('POST', baseUrl + '/' + patientId + '/avatar', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);

  }

  updatePassword(patientId:string, password:Password):Observable<any>{
    return this.http.post<any>(baseUrl + '/' + patientId + '/password',password);
  }

  updatePatient(patirnt:Patient):Observable<Patient>{
    return this.http.put<Patient>(baseUrl, patirnt);
  }
}
