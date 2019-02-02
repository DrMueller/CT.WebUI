import { Component } from '@angular/core';
import { AppNavigationConfiguration, AppNavigationEntry, AppNavigationInitializationService } from '@drmueller/ng-app-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(appNavigationInitalizationSerice: AppNavigationInitializationService) {
    appNavigationInitalizationSerice.initialize(new AppNavigationConfiguration(
      'Container Testing',
      this.createSomeEntries()));
  }

  private createSomeEntries(): AppNavigationEntry[] {
    return [
      new AppNavigationEntry('Individuals', '/individuals/overview', true)
    ];
  }
}
