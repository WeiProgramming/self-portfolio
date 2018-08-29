import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
    this.contactForm.controls['name'].setValue('');
    this.contactForm.controls['email'].setValue('');
    this.contactForm.controls['body'].setValue('');
  }
  sendEmail() {
    const fd = new FormData();
    console.log(this.contactForm.controls['email'].value);
    fd.append('email', this.contactForm.controls['email'].value);
    fd.append('body', this.contactForm.controls['body'].value);
    this.http.post(this.endpoint + '/send', fd).subscribe(res => {
      console.log('email sent');
      this.contactForm.reset();
      this.showSuccess = true;
    });
  }

}
