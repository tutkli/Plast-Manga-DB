import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MangaDetailComponent} from './manga-detail.component';
import {provideSpy} from '../../../../tests/utils';
import {MangaService} from '../../core/services/manga/manga.service';
import {ActivatedRoute} from '@angular/router';

describe('MangaDetailComponent', (): void => {
  let component: MangaDetailComponent;
  let fixture: ComponentFixture<MangaDetailComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(MangaDetailComponent, '');
    TestBed.configureTestingModule({
      declarations: [ MangaDetailComponent ],
      providers: [
        provideSpy(MangaService),
        provideSpy(ActivatedRoute),
      ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(MangaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
