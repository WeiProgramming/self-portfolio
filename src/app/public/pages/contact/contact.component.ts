import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  endpoint = 'http://weiportfoliobackend.us-west-1.elasticbeanstalk.com/api';
  public showSuccess = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
