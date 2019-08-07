import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PasswordDialogComponent} from '../../../public/components/password-dialog/password-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // scrolledState: string;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event) {
  //   if (event.path[1].scrollY > 80) {
  //     this.scrolledState = 'moved';
  //   } else if (event.path[1].scrollY === 0) {
  //     this.scrolledState = 'notmoved';
  //   }
  //   console.log(this.scrolledState);
  // }
  private resumePasword: string = 'resumeopen';
  constructor( public dialog: MatDialog, private router: Router ) { }

  ngOnInit() {

    // this.scrolledState = 'notmoved';
  }

  openDialog(): void {
    const dialogRef =this.dialog.open(PasswordDialogComponent, {
      data: {password: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === this.resumePasword) {
        this.router.navigate(['resume']);
      }
    });
  }
}
