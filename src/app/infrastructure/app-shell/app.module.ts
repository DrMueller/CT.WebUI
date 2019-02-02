import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgAppNavigationModule } from '@drmueller/ng-app-navigation';
import { BaseInMemoryDbService } from '@drmueller/ng-base-services';
import { ErrorHandlingModule } from '@drmueller/ng-error-handling';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { NgRxForms2Module } from '@drmueller/ng-rx-forms2';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from 'src/environments/environment';

import { EagerLoadedAreaServicesModule } from '../eager-loaded-area-services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const inMemoryHttpModules = [];
if (environment.useInMemoryHttp) {
  inMemoryHttpModules.push(
    HttpClientInMemoryWebApiModule.forRoot(
      BaseInMemoryDbService, { dataEncapsulation: false },
    ));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgAppNavigationModule.forRoot(),
    NgMaterialExtensionsModule,
    ErrorHandlingModule.forRoot(),
    NgRxForms2Module.forRoot(),
    EagerLoadedAreaServicesModule,
    ...inMemoryHttpModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
