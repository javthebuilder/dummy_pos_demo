import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RemoteClientService } from '../services/remote-client.service';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-login',
  imports: [TranslateModule, CommonModule, NgSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  countries: any;
  phoneNumber?: string;
  countryCode: string = "";
  currDiv: string = 'login';

  constructor(private remoteClient: RemoteClientService, private route: Router, private translate: TranslateService) {
    this.remoteClient.getCountries().subscribe(res => this.countries = res);
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  home() {
    this.route.navigateByUrl('dashboard');
  }
}
