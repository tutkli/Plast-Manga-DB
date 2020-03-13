import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaDetailPlaceholderComponent } from './manga-detail-placeholder.component';

describe('MangaDetailPlaceholderComponent', () => {
  let component: MangaDetailPlaceholderComponent;
  let fixture: ComponentFixture<MangaDetailPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaDetailPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
