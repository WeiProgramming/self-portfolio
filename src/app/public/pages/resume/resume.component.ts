import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouteService} from '../../services/RouteService/route.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public passwordForm: FormGroup;

  constructor(private fb: FormBuilder, public routeService: RouteService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.routeService.updateUrlData(this.route.snapshot.data['pageName']);
  }

}
