import { Component, OnInit } from '@angular/core';

import { IndividualDetailsDto } from '../../dtos';
import { FormWithValidation } from '@drmueller/ng-rx-forms';
import { IndividualDetailsFormBuilderService, IndividualDetailsService, IndividualsNavigationService } from '../../services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent implements OnInit {
  public dataForm: FormWithValidation<IndividualDetailsDto>;
  public individual: IndividualDetailsDto;

  public constructor(
    private route: ActivatedRoute,
    private formBuilder: IndividualDetailsFormBuilderService,
    private individualDetailsService: IndividualDetailsService,
    private navigationService: IndividualsNavigationService) { }

  public get title(): string {
    if (this.individual.individualId) {
      return 'Edit Individual';
    }

    return 'New Individual';
  }

  public ngOnInit() {
    this.dataForm = this.formBuilder.buildForm();
    this.route.data.subscribe(data => {
      this.individual = <IndividualDetailsDto>data['individual'];
      this.dataForm.setControlDataFromModel(this.individual);
    });
  }

  public async saveAsync(): Promise<void> {
    const dto = new IndividualDetailsDto();
    this.dataForm.setModelFromControls(dto);
    dto.individualId = this.individual.individualId;
    await this.individualDetailsService.saveAsync(dto);

    this.navigationService.navigateToOverview();
  }
}
