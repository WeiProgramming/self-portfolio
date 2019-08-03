import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    // this.scrolledState = 'notmoved';
  }
}
