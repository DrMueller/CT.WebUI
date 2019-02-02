import { Injectable } from '@angular/core';
import { IndividualRepositoryService } from '../../common/repositories/individual-repository.service';
import { IndividualsServicesModule } from '../../individuals-services.module';
import { IndividualOverviewEntryDto } from '../dtos';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualsOverviewDataService {

  public constructor(
    private individualRepository: IndividualRepositoryService) { }

  public async loadAllAsync(): Promise<IndividualOverviewEntryDto[]> {
    const individuals = await this.individualRepository.loadAllAsync();
    const result = individuals.map(model => new IndividualOverviewEntryDto(model.id, model.firstName, model.lastName, model.birthdate));
    return result;
  }

  public async deleteIndividualsAsync(individualIds: string[]): Promise<void> {
    const tasks = individualIds.map(indId => this.individualRepository.deleteAsync(indId));
    await Promise.all(tasks);
  }
}
