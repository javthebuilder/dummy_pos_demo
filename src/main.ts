import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { applicationConfig } from './app/application.config';

bootstrapApplication(AppComponent, applicationConfig)
  .catch((err) => console.error(err));
