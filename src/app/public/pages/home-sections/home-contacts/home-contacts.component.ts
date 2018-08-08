import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-contacts',
  templateUrl: './home-contacts.component.html',
  styleUrls: ['./home-contacts.component.css']
})
export class HomeContactsComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  constructor() {
  }

  ngOnInit() {

  }

}
