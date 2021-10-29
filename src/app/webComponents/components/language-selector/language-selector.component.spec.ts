import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {LanguageSelectorComponent} from './language-selector.component';
import {provideSpy} from '../../../../../tests/utils';
import {TranslateService} from '@ngx-translate/core';

describe('LanguageSelectorComponent', (): void => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.overrideTemplate(LanguageSelectorComponent, '');
    TestBed.configureTestingModule({
      declarations: [ LanguageSelectorComponent ],
      providers: [
        provideSpy(TranslateService),
      ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
