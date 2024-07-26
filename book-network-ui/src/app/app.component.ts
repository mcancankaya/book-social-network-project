import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-network-ui';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'tr'])
    const browserLanguage = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(browserLanguage?.match(/en|tr/) ? browserLanguage : 'en')
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
