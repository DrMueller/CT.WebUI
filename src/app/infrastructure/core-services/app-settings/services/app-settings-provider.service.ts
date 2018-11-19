import { Injectable } from '@angular/core';
import { AppSettings } from '../models';
import { LocalHttpService } from '../../http/local-http.service';

@Injectable()
export class AppSettingsProviderService {
  private appSettings: AppSettings;

  public constructor(private http: LocalHttpService) {
  }

  public async provideAppSettingsAsync(): Promise<AppSettings> {
    if (this.appSettings) {
      return Promise.resolve(this.appSettings);
    }

    // This path needs to be relative to the files in the dist-folder
    this.appSettings = await this.http.getAsync<AppSettings>('./assets/app-settings/appsettings.json');
    return this.appSettings;
  }
}
