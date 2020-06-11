import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';
import { REST } from '../shared';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl:string = "http://localhost:8080/contacts";
  contactURL:string = REST + '/contacts';

  constructor(private http:HttpClient) { 
    console.log("CONTACT URL", this.contactURL);
  }

  getContacts():Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl);
  }

  addContact(contact:Contact):Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
  }

}
