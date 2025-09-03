import { Component, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { myAppSetting } from './app.setting';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MyEventsService } from './services/my-events.service';
import { Constants } from './utils/contants.models';
import { Helper } from './utils/helper.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TranslateModule, CommonModule, NgSelectModule, RouterOutlet],
})
export class AppComponent {
  // title = 'Qcommerce';
  rtlSide = "left";
  showHeader?: boolean;
  menuActive = "home";
  toggleClass = false;
  constructor(private router: Router, private translate: TranslateService, private myEvent: MyEventsService, private modalService: NgbModal) {
    this.initializeApp();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url == "/" || event.url == "/login") this.showHeader = false; else this.showHeader = true;
      }
    });
    this.myEvent.getLanguageObservable().subscribe(value => {
      if (value.doNav) {
        this.router.navigateByUrl('login');
      }
      this.globalize(value.lang);
    });
  }

  initializeApp() {
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    this.router.navigateByUrl('login');
    this.globalize(defaultLang);
    this.darkModeSetting();
  }


  globalize(languagePriority: any) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = myAppSetting.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
    let dir = 'ltr'; // default

    if (lang === 'ar') {
      dir = 'rtl';
    }

    this.rtlSide = dir;

    // ✅ Set the direction on the <body> element
    document.body.setAttribute('dir', dir);

    // ✅ Optional: Update classes for styling
    document.body.classList.remove('rtl', 'ltr');
    document.body.classList.add(dir);
  }



  menu() {
    this.toggleClass = false;
  }

  showRightMenu() {
    this.toggleClass = !this.toggleClass;
  }


  dashboard(event: any) {
    this.router.navigateByUrl('dashboard');
    this.menuActive = event;
  }

  home(event: any) {
    this.menuActive = event;
    if (!this.menuActive || this.showHeader) this.menu();
    this.router.navigateByUrl('home');
  }
  items(event: any) {
    this.menuActive = event;
    this.menu();
    this.router.navigateByUrl('items');
  }
  people(event: any) {
    this.menuActive = event;
    this.menu();
    this.router.navigateByUrl('people');
  }
  transactions(event: any) {
    this.menuActive = event;
    if (!this.menuActive || this.showHeader) this.menu();
    this.router.navigateByUrl('transactions');
  }
  setting(event: any) {
    this.menuActive = event;
    this.menu();
    this.router.navigateByUrl('settings');
  }

  orders_status(event: any) {
    this.menuActive = event;
    if (!this.menuActive || this.showHeader) this.menu();
    this.router.navigateByUrl('orders-status');
  }

  booking(event: any) {
    this.menuActive = event;
    this.menu();
    this.router.navigateByUrl('booking');
  }
  // reviews(event: any) {
  //   this.menuActive = event;
  //   this.menu();
  //   this.router.navigateByUrl('reviews');
  // }
  // authentication(event: any) {
  //   this.menuActive = event;
  //   this.menu();
  //   this.router.navigateByUrl('authentication');
  // }

  change_language(event: any) {
    this.menuActive = event;
    this.menu();
    this.router.navigateByUrl('change-language');
  }

  // wallet(event: any) {
  //   this.menuActive = event;
  //   this.menu();
  //   this.router.navigateByUrl('wallet');
  // }
  // support(event: any) {
  //   this.menuActive = event;
  //   this.menu();
  //   this.router.navigateByUrl('support');
  // }
  // terms_conditions(event: any) {
  //   this.menuActive = event;
  //   this.menu();
  //   this.router.navigateByUrl('terms_conditions');
  // }
  login() {
    this.menu();
    this.router.navigateByUrl('login');
  }




  ngOnInit() {
    // this.theme_mode = Helper.getThemeMode(myAppConfig.defaultThemeMode); 
  }


  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(myAppSetting.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }
}
