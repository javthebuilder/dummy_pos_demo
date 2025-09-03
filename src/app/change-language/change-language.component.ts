import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { myAppSetting } from '../app.setting';
import { MyEventsService } from '../services/my-events.service';
import { Constants } from '../utils/contants.models';

@Component({
  selector: 'app-change-language',
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent {
  defaultLanguageCode;
  languages!: Array<{ code: string; name: string; }>;

  constructor(private myEvent: MyEventsService) {
    this.defaultLanguageCode = myAppSetting.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }


  ngOnInit() {
    this.defaultLanguageCode = myAppSetting.availableLanguages[0].code;
    this.languages = myAppSetting.availableLanguages;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }


  onLanguageClick(language: { code: string; }) {
    this.defaultLanguageCode = language.code;
  }

  languageConfirm() {
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    this.myEvent.setLanguageData(this.defaultLanguageCode);
  }
}

