import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SearchEngineComponent} from './search-engine.component';
import {provideSpy} from '../../../../../tests/utils';
import {MangaService} from '../../../core/services/manga/manga.service';
import {Router} from '@angular/router';

describe('SearchEngineComponent', (): void => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(SearchEngineComponent, '');
    TestBed.configureTestingModule({
      declarations: [ SearchEngineComponent ],
      providers: [
        provideSpy(MangaService),
        provideSpy(Router),
      ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
