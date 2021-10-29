import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {provideSpy} from '../../../../tests/utils';
import {MangaService} from '../../core/services/manga/manga.service';
import {NavBarService} from '../../core/services/nav-bar/nav-bar.service';
import {Router} from '@angular/router';

describe('HomeComponent', (): void => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(HomeComponent, '');
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        provideSpy(MangaService),
        provideSpy(NavBarService),
        provideSpy(Router),
      ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
