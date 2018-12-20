import { ElementFinder } from 'protractor';
import { IndividualsOverviewPage } from '../../../pages/areas/individuals/components';

describe('Showing Individuals Overview', () => {
  const individualsOverviewPage = new IndividualsOverviewPage();

  beforeEach(async () => {
    individualsOverviewPage.navigateTo();
  });

  describe('"New Individual" Button', () => {
    let newIndividualButton: ElementFinder;

    beforeEach(() => {
      newIndividualButton = individualsOverviewPage.newIndividualButton;
    });

    it('Is Displayed', () => {
      expect(newIndividualButton.isDisplayed()).toBe(true);
    });

    it('Is Active', () => {
      expect(newIndividualButton.isEnabled()).toBe(true);
    });
  });

  describe('"Edit Individual" Button', () => {
    let editIndividualButton: ElementFinder;

    beforeEach(() => {
      editIndividualButton = individualsOverviewPage.editIndividualButton;
    });

    it('Is Displayed', () => {
      expect(editIndividualButton.isDisplayed()).toBe(true);
    });

    it('Is Inactive', () => {
      expect(editIndividualButton.isEnabled()).toBe(false);
    });
  });

  describe('"Delete Individual" Button', () => {
    let deleteIndividualButton: ElementFinder;

    beforeEach(() => {
      deleteIndividualButton = individualsOverviewPage.deleteIndividualButton;
    });

    it('Is Displayed', () => {
      expect(deleteIndividualButton.isDisplayed()).toBe(true);
    });

    it('Is Inactive', () => {
      expect(deleteIndividualButton.isEnabled()).toBe(false);
    });
  });
});
