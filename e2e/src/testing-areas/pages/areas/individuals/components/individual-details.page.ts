import { promise } from 'protractor';

import {
  BasePage, ButtonComponent, InputComponent, PageComponentFactoryService
} from '../../../../../testing-infrastructure/page-blocks';

export class IndividualDetailsPage extends BasePage {
  public get birthdateInput(): InputComponent {
    return PageComponentFactoryService.createByTestingAttribute(InputComponent, 'birthdate');
  }

  public get cancelButton(): ButtonComponent {
    return PageComponentFactoryService.createByTestingAttribute(ButtonComponent, 'cancel');
  }

  public get firstNameInput(): InputComponent {
    return PageComponentFactoryService.createByTestingAttribute(InputComponent, 'firstName');
  }

  public get lastNameInput(): InputComponent {
    return PageComponentFactoryService.createByTestingAttribute(InputComponent, 'lastName');
  }

  public get saveButton(): ButtonComponent {
    return PageComponentFactoryService.createByTestingAttribute(ButtonComponent, 'saveIndividual');
  }
  public navigateToDetails(id: string): promise.Promise<any> {
    return this.navigateTo(`#/individuals/${id}`);
  }
}
