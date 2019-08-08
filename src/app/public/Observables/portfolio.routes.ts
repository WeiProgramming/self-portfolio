import {BehaviorSubject, Observable} from 'rxjs';

export const RouteSubject = new BehaviorSubject('');

export function updateUrlData(routeData) {
  RouteSubject.next(routeData);
}

export function getCurrentUrlData(): Observable<any> {
  return RouteSubject;
}
