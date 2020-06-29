import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // contactUrl:string = "http://localhost:8080/contacts";
  contactUrl:string = environment.baseURL + "/contacts";

  constructor(private http:HttpClient) { 
  }

  getContacts():Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl);
  }

  addContact(contact:Contact):Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
  }

}
