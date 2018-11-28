import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RxFormModelBindingService } from '@drmueller/ng-rx-forms2';

import { IndividualDetailsDto } from '../../dtos';
import {
  IndividualDetailsFormBuilderService, IndividualDetailsService, IndividualsNavigationService
} from '../../services';
import { RelayCommand } from '@drmueller/ng-base-directives';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent implements OnInit {

  public individualFormGroup: FormGroup;
  public individual: IndividualDetailsDto;
  public saveIndividualCommand: RelayCommand;
  public cancelCommand: RelayCommand;

  public constructor(
    private route: ActivatedRoute,
    private builder: IndividualDetailsFormBuilderService,
    private binder: RxFormModelBindingService,
    private individualDetailsService: IndividualDetailsService,
    private navigationService: IndividualsNavigationService) { }

  public get title(): string {
    if (this.individual.individualId) {
      return 'Edit Individual';
    }

    return 'New Individual';
  }

  public ngOnInit() {
    this.individualFormGroup = this.builder.buildFormGroup();
    this.saveIndividualCommand = new RelayCommand(
      async () => await this.saveIndividualAsync(),
      () => this.individualFormGroup.dirty && this.individualFormGroup.valid);

    this.cancelCommand = new RelayCommand(
      () => this.navigationService.navigateToOverview(),
      () => true);

    this.route.data.subscribe(data => {
      this.individual = <IndividualDetailsDto>data['individual'];
      this.binder.bindModelToFormGroup(this.individual, this.individualFormGroup);
    });
  }

  private async saveIndividualAsync(): Promise<void> {
    this.binder.bindFormGroupToModel(this.individualFormGroup, this.individual);
    await this.individualDetailsService.saveAsync(this.individual);

    this.navigationService.navigateToOverview();
  }
}

