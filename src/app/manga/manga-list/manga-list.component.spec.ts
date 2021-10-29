import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MangaListComponent} from './manga-list.component';
import {provideSpy} from '../../../../tests/utils';
import {MangaService} from '../../core/services/manga/manga.service';
import {Router} from '@angular/router';

describe('MangaListComponent', (): void => {
  let component: MangaListComponent;
  let fixture: ComponentFixture<MangaListComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(MangaListComponent, '');
    TestBed.configureTestingModule({
      declarations: [ MangaListComponent ],
      providers: [
        provideSpy(MangaService),
        provideSpy(Router),
      ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(MangaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
