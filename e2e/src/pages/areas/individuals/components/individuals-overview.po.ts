import { browser, by, element, ElementFinder, promise } from 'protractor';

export class IndividualsOverviewPage {
  private static readonly relativeUrl = '#/individuals/overview';

  public navigateTo(): promise.Promise<any> {
    return browser.get(IndividualsOverviewPage.relativeUrl);
  }

  public get createIndividualButton(): ElementFinder {
    return element(by.css('[uitesting=createIndividual]'));
  }

  public get editIndividualButton(): ElementFinder {
    return element(by.css('[uitesting=editIndividual]'));
  }

  public checkIfPageIsDisplayed(): promise.Promise<boolean> {
    return browser.getCurrentUrl().then(value => {
      return value.endsWith(IndividualsOverviewPage.relativeUrl);
    });
  }

  public get individualsOverviewGrid(): ElementFinder {
    return element(by.css('[uitesting=individualsOverview]'));
  }

  public get deleteIndividualButton(): ElementFinder {
    return element(by.css('[uitesting=deleteIndividual]'));
  }
}
