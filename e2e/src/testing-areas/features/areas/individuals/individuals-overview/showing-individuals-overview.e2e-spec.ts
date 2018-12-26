import { IndividualsOverviewPage } from '../../../../../testing-infrastructure';

describe('Showing Individuals Overview', () => {
  const individualsOverviewPage = new IndividualsOverviewPage();

  beforeEach(async () => {
    individualsOverviewPage.navigateToOverview();
  });

  describe('"New Individual" Button', () => {
    it('Is displayed', () => {
      expect(individualsOverviewPage.createIndividualButton.isDiplayed).toBe(true);
    });

    it('Is enabled', () => {
      expect(individualsOverviewPage.createIndividualButton.isEnabled).toBe(true);
    });
  });

  describe('"Edit Individual" Button', () => {
    it('Is displayed', () => {
      expect(individualsOverviewPage.editIndividualButton.isDiplayed).toBe(true);
    });

    it('Is disabled', () => {
      expect(individualsOverviewPage.editIndividualButton.isEnabled).toBe(false);
    });
  });

  describe('"Delete Individual" Button', () => {
    it('Is displayed', () => {
      expect(individualsOverviewPage.deleteIndividualButton.isDiplayed).toBe(true);
    });

    it('Is disabled', () => {
      expect(individualsOverviewPage.deleteIndividualButton.isEnabled).toBe(false);
    });
  });
});
