import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PasswordModel} from '../../model/passwordmodel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {
  public passwordForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PasswordModel,
              public fb: FormBuilder) { }
  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required]
    });
    this.passwordForm.controls['password'].valueChanges.subscribe(res => {
      this.data.password = res;
    });

  }
}
