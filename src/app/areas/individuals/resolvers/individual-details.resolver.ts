import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { IndividualDetailsDto } from '../dtos';
import { IndividualDetailsService } from '../services/individual-details.service';

@Injectable()
export class IndividualDetailsResolver implements Resolve<Promise<IndividualDetailsDto>>  {
  public constructor(private individualDetailsService: IndividualDetailsService) {
  }

  public async resolve(route: ActivatedRouteSnapshot): Promise<IndividualDetailsDto> {
    const eventId = route.paramMap.get('individualId');
    if (!eventId || eventId === '-1') {
      return Promise.resolve(new IndividualDetailsDto());
    }

    const event = await this.individualDetailsService.getByIdAsync(eventId);
    return event;
  }
}
