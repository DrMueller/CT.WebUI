import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgAppNavigationModule } from '@drmueller/ng-app-navigation';
import { NgBaseServicesModule } from '@drmueller/ng-base-services';
import { ErrorHandlingModule } from '@drmueller/ng-error-handling';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { NgRxForms2Module } from '@drmueller/ng-rx-forms2';

import { CoreServicesModule } from '../core-services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgAppNavigationModule.forRoot(),
    NgBaseServicesModule.forRoot(),
    NgMaterialExtensionsModule,
    CoreServicesModule.forRoot(),
    ErrorHandlingModule.forRoot(),
    NgRxForms2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
