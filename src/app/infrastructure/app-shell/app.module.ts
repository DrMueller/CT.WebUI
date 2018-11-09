import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgAppNavigationModule } from '@drmueller/ng-app-navigation';
import { NgBaseServicesModule } from '@drmueller/ng-base-services';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
// import { ErrorHandlingModule } from '@drmueller/ng-error-handling';
import { NgRxFormsModule } from '@drmueller/ng-rx-forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreServicesModule } from '../core-services';

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
    // ErrorHandlingModule.forRoot(),
    NgRxFormsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
