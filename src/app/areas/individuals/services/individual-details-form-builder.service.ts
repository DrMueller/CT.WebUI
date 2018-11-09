import { Injectable } from '@angular/core';

import { IndividualDetailsDto } from '../dtos';
import { RxFormBuilder, ValidatorFactoryService, FormWithValidation } from '@drmueller/ng-rx-forms';

@Injectable()
export class IndividualDetailsFormBuilderService {

  constructor(
    private formBuilder: RxFormBuilder<IndividualDetailsDto>,
    private validatorFactory: ValidatorFactoryService
  ) { }

  public buildForm(): FormWithValidation<IndividualDetailsDto> {
    return this.formBuilder.startBuildingFormGroup()
      .withControl('firstName')
      .withModelBinding('firstName')
      .withValidation(this.validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('lastName')
      .withModelBinding('lastName')
      .withValidation(this.validatorFactory.minLength(5))
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('birthdate')
      .withModelBinding('birthdate')
      .withDefaultValue(new Date(1986, 12, 29))
      .buildControl()
      .withFormValidationWatcher()
      .withDebounceTime(500)
      .buildFormWatcher()
      .buildForm();
  }
}
