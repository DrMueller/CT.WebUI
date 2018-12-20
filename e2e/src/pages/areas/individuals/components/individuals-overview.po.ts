import { browser, by, element, ElementFinder, promise } from 'protractor';

export class IndividualsOverviewPage {
  public navigateTo(): promise.Promise<any> {
    return browser.get('#/individuals/overview');
  }

  public get newIndividualButton(): ElementFinder {
    return element(by.className('uitesting-create-individual-button'));
  }

  public get editIndividualButton(): ElementFinder {
    return element(by.className('uitesting-edit-individual-button'));
  }

  public get deleteIndividualButton(): ElementFinder {
    return element(by.className('uitesting-delete-individual-button'));
  }
}
