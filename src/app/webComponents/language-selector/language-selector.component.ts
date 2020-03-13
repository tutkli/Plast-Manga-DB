import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  availableLangs = ['es', 'fr'];

  constructor(private translateService: TranslateService) { }

  updateLang(newLanguage: string): void {
    this.translateService.use(newLanguage);
  }

}
