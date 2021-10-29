import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {NavBarComponent} from './nav-bar.component';
import {provideSpy} from '../../../../../tests/utils';
import {NavBarService} from '../../../core/services/nav-bar/nav-bar.service';
import {Router} from '@angular/router';

describe('NavBarComponent', (): void => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(NavBarComponent, '');
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      providers: [
        provideSpy(NavBarService),
        provideSpy(Router),
      ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
