import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PasswordDialogComponent} from '../../../public/components/password-dialog/password-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteSubject, updateUrlData} from '../../../public/Observables/portfolio.routes';
import {RouteService} from '../../../public/services/RouteService/route.service';

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
  @Output() navEmit = new EventEmitter<string>();
  private resumePassword = 'resumeopen';
  public navType: string;
  constructor( public dialog: MatDialog, private router: Router, private routeService: RouteService) { }

  ngOnInit() {
    // this.scrolledState = 'notmoved';
    this.routeService.getUrlData().subscribe(res => {
      this.navType = res;
      console.log(this.navType);
    });
    console.log('run nav');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordDialogComponent, {
      data: {password: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === this.resumePassword) {
        this.router.navigate(['resume']);
      }
    });
  }
}
