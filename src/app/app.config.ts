import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- Import the new animations provider
import {provideNzI18n, en_US, de_DE} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { routes } from './app.routes';

import { UserOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
const icons: IconDefinition[] = [UserOutline];

import de from '@angular/common/locales/de';
import {provideHttpClient} from "@angular/common/http";
registerLocaleData(de);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimations(), provideNzI18n(de_DE), provideNzIcons(icons), provideHttpClient()
  ]
};
