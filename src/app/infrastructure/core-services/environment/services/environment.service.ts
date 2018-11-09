import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable()
export class EnvironmentService {
  public get coreServiceBaseUrl(): string {
    return environment.coreServiceBaseUrl;
  }
  public get isProduction(): boolean {
    return environment.production;
  }
}
