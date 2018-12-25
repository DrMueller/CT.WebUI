import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { IndividualDetailsDto } from '../dtos';
import { IndividualDetailsDataService } from '../services/individual-details-data.service';

@Injectable()
export class IndividualDetailsResolver implements Resolve<Promise<IndividualDetailsDto>>  {
  public constructor(private dataService: IndividualDetailsDataService) {
  }

  public async resolve(route: ActivatedRouteSnapshot): Promise<IndividualDetailsDto> {
    const eventId = route.paramMap.get('individualId');
    if (!eventId || eventId === '-1') {
      return Promise.resolve(new IndividualDetailsDto());
    }

    const event = await this.dataService.getByIdAsync(eventId);
    return event;
  }
}
