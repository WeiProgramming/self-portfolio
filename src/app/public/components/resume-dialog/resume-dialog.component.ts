import {Component, Inject, OnInit} from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PasswordModel} from '../../model/passwordmodel';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resume-dialog',
  templateUrl: './resume-dialog.component.html',
  styleUrls: ['./resume-dialog.component.scss']
})
export class ResumeDialogComponent implements OnInit{
  passwordForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ResumeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PasswordModel, public fb: FormBuilder) {
  }
  ngOnInit() {
    this.passwordForm = this.fb.group({
      'password': ['', Validators.required]
    });
    // this.passwordForm.controls['password'].valueChanges.subscribe(res => console.log(res));
  }
}
