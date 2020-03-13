import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../core/services/nav-bar/nav-bar.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  get homeActive(): Observable<boolean> {
    return this.navBarService.homeActiveObservable;
  }

  constructor(private navBarService: NavBarService,
              private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['home']);
  }

  goToMangaList(): void {
    this.router.navigate(['manga/list']);
  }

}
