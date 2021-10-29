import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MangaDetailPlaceholderComponent} from './manga-detail-placeholder.component';

describe('MangaDetailPlaceholderComponent', (): void => {
  let component: MangaDetailPlaceholderComponent;
  let fixture: ComponentFixture<MangaDetailPlaceholderComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(MangaDetailPlaceholderComponent, '');
    TestBed.configureTestingModule({
      declarations: [ MangaDetailPlaceholderComponent ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(MangaDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
