import { browser, by, element, ElementFinder, promise } from 'protractor';

export class IndividualDetailsPage {
  public navigateTo(id: string): promise.Promise<any> {
    return browser.get(`#/individuals/${id}`);
  }

  public get saveButton(): ElementFinder {
    return element(by.css('[uitesting=saveIndividual]'));
  }

  public get cancelButton(): ElementFinder {
    return element(by.css('[uitesting=cancel]'));
  }

  public get firstNameInput(): ElementFinder {
    return element(by.css('[uitesting=firstName]'));
  }

  public get lastNameInput(): ElementFinder {
    return element(by.css('[uitesting=lastName]'));
  }

  public get birthdateInput(): ElementFinder {
    return element(by.css('[uitesting=birthdate]'));
  }
}
