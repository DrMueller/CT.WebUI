import { Injectable } from '@angular/core';
import { IndividualRepositoryService } from '../repositories';

import { IndividualOverviewDto } from '../dtos';

@Injectable()
export class IndividualsOverviewService {

  public constructor(
    private individualRepository: IndividualRepositoryService) { }

  public async loadAllAsync(): Promise<IndividualOverviewDto[]> {
    const individuals = await this.individualRepository.loadAllAsync();
    const result = individuals.map(model => new IndividualOverviewDto(model.id, model.firstName, model.lastName, model.birthdate));
    return result;
  }

  public async deleteIndividualsAsync(individualIds: string[]): Promise<void> {
    const tasks = individualIds.map(indId => this.individualRepository.deleteAsync(indId));
    await Promise.all(tasks);
  }
}
