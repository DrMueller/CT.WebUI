import { Injectable } from '@angular/core';
import { IndividualRepositoryService } from '../repositories';

import { IndividualDetailsDto } from '../dtos';
import { Individual } from '../models';

@Injectable()
export class IndividualDetailsService {

  public constructor(
    private individualRepository: IndividualRepositoryService) { }

  public async getByIdAsync(individualId: string): Promise<IndividualDetailsDto> {
    const individual = await this.individualRepository.loadByIdAsync(individualId);
    const result = new IndividualDetailsDto();
    result.birthdate = individual.birthdate;
    result.firstName = individual.firstName;
    result.individualId = individual.id;
    result.lastName = individual.lastName;

    return result;
  }

  public async saveAsync(dto: IndividualDetailsDto): Promise<void> {
    const individual = new Individual();
    individual.birthdate = dto.birthdate;
    individual.firstName = dto.firstName;
    individual.id = dto.individualId;
    individual.lastName = dto.lastName;

    await this.individualRepository.saveAsync(individual);
  }
}
