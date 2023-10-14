import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
registerLocaleData(localePl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatDialogModule),
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'PLN' },
  ]
};
