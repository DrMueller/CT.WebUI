import { BasePage, ButtonComponent, PageComponentFactoryService } from '@drmueller/testing';

import { browser, by, element, ElementFinder, promise } from 'protractor';

export class IndividualsOverviewPage extends BasePage {
  private static readonly relativeUrl = '#/individuals/overview';

  public get isDisplayed(): promise.Promise<boolean> {
    return this.checkIfIsDisplayed(IndividualsOverviewPage.relativeUrl);
  }

  public get createIndividualButton(): ButtonComponent {
    return PageComponentFactoryService.createByTestingAttribute(ButtonComponent, 'createIndividual');
  }

  public get deleteIndividualButton(): ButtonComponent {
    return PageComponentFactoryService.createByTestingAttribute(ButtonComponent, 'deleteIndividual');
  }

  public get editIndividualButton(): ButtonComponent {
    return PageComponentFactoryService.createByTestingAttribute(ButtonComponent, 'editIndividual');
  }

  public get individualsOverviewGrid(): ElementFinder {
    return element(by.css('[uitesting=individualsOverview]'));
  }

  public navigateToOverview(): promise.Promise<any> {
    return browser.get(IndividualsOverviewPage.relativeUrl);
  }
}
