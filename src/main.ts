// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import { AppModule } from './app/infrastructure/app-shell/app.module';

// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
