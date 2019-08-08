import { Injectable } from '@angular/core';
import {getCurrentUrlData, updateUrlData} from '../../Observables/portfolio.routes';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor() { }
  updateUrlData(urlData) {
    updateUrlData(urlData);
  }
  getUrlData() {
    return getCurrentUrlData();
  }
}
