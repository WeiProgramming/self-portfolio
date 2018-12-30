import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {trigger, transition, query, style, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('appear', [
      transition(':enter', [
        style({transform: 'translateY(100px)'}),
        animate('.6s 500ms ease-out', keyframes([
          style({opacity: 0, transform: 'translateY(-100px)'}),
          style({opacity: .2, transform: 'translateY(0px)'}),
          style({opacity: .6, transform: 'translateY(50px)'}),
          style({opacity: 1, transform: 'translateY(0px)'})
        ]))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  endpoint = 'http://weiportfoliobackend.us-west-1.elasticbeanstalk.com/api';
  public showSuccess = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  contactState = 'close';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.contactState = 'open';
  }
  resetForm() {
    this.contactForm.reset();
  }
  sendEmail() {
    this.http.post(this.endpoint + '/send', this.contactForm.value).subscribe(res => {
      console.log('email sent');
      this.contactForm.reset();
      this.showSuccess = true;
    });
  }

}
