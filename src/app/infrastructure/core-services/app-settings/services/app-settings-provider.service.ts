import { Injectable } from '@angular/core';
import { AppSettings } from '../models';
import { LocalHttpService } from '../../http/local-http.service';
import { HttpXhrBackend, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppSettingsProviderService {
  private appSettings: AppSettings;

  public constructor(private http: LocalHttpService, private httpXhrBackend: HttpXhrBackend) {
  }

  public async provideAppSettingsAsync(): Promise<AppSettings> {
    if (this.appSettings) {
      return Promise.resolve(this.appSettings);
    }

    let httpBackend: HttpBackend | null = null;

    // We want to use the actual XhrBackend and not the fake one, therefore we overwrite it here
    if (environment.useInMemoryHttp) {
      httpBackend = (<any>this.http).httpClient.handler.backend;
      (<any>this.http).httpClient.handler.backend = this.httpXhrBackend;
    }

    // This path needs to be relative to the files in the dist-folder
    this.appSettings = await this.http.getAsync<AppSettings>('./assets/app-settings/appsettings.json');

    if (httpBackend) {
      (<any>this.http).httpClient.handler.backend = httpBackend;
      (<any>this.http).httpClient.handler.chain = null;
    }

    return this.appSettings;
  }
}



