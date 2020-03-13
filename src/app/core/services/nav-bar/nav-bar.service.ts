import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private homeActiveSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined);
  homeActiveObservable: Observable<boolean> = this.homeActiveSubject as Observable<boolean>;

  constructor() { }

  setHomeActive(value: boolean) {
    this.homeActiveSubject.next(value);
  }
}
