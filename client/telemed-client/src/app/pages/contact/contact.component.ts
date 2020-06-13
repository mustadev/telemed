import { ContactService } from '../../services/contact.service'
import { Router } from '@angular/router';
import { Contact } from '../../models/Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  submitted = false;
  successMessage: string = '';
  constructor(
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log("submiting contact Contact ", JSON.stringify(this.contact));
    this.contactService.addContact(this.contact).subscribe(res => {
      console.log("submiting contact Contact ", JSON.stringify(res));
      this.successMessage = "Message Sent";
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
  }
}
