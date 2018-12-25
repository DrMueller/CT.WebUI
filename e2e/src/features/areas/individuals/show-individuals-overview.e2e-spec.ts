import { IndividualsOverviewPage } from '../../../pages/areas/individuals/components';

describe('Individuals Overview', () => {
  const individualsOverviewPage = new IndividualsOverviewPage();

  beforeEach(async () => {
    individualsOverviewPage.navigateTo();
  });

  describe('"New Individual" Button', () => {
    it('Is Displayed', () => {
      expect(individualsOverviewPage.createIndividualButton.isDisplayed()).toBeTruthy();
    });

    it('Is Active', () => {
      expect(individualsOverviewPage.createIndividualButton.getAttribute('disabled')).toBeFalsy();
    });
  });

  describe('"Edit Individual" Button', () => {
    it('Is Displayed', () => {
      expect(individualsOverviewPage.editIndividualButton.isDisplayed()).toBeTruthy();
    });

    it('Is Inactive', () => {
      expect(individualsOverviewPage.editIndividualButton.getAttribute('enabled')).toBeFalsy();
    });
  });

  describe('"Delete Individual" Button', () => {
    it('Is Displayed', () => {
      expect(individualsOverviewPage.deleteIndividualButton.isDisplayed()).toBeTruthy();
    });

    it('Is Inactive', () => {
      expect(individualsOverviewPage.deleteIndividualButton.getAttribute('enabled')).toBeFalsy();
    });
  });
});
