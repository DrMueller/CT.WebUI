import { IndividualDetailsPage, IndividualsOverviewPage } from '../../../pages/areas/individuals/components';
import { by, element, ElementFinder } from 'protractor';

// Feature
describe('Saving an Individual', () => {
  let individualDetailsPage: IndividualDetailsPage;

  beforeEach(() => {
    individualDetailsPage = new IndividualDetailsPage();
    individualDetailsPage.navigateTo('-1');
  });

  // Scenario - Fields filled out
  describe('Given all fields are filled out', () => {
    beforeEach(async () => {
      individualDetailsPage.birthdateInput.sendKeys('29.12.1986');
      individualDetailsPage.firstNameInput.sendKeys('Matthias');
      individualDetailsPage.lastNameInput.sendKeys('Müller');
    });

    // Incoming Event
    describe('When the user saves', () => {
      let individualsOverviewPage: IndividualsOverviewPage;

      beforeEach(() => {
        individualsOverviewPage = new IndividualsOverviewPage();
      });

      beforeEach(() => {
        individualDetailsPage.saveButton.click();
      });

      it('Then the user gets navigated to the Overview Page', async () => {
        expect(individualsOverviewPage.checkIfPageIsDisplayed()).toBe(true);
      });

      it('Then the changed data is shown in the Overview Page', async () => {
        const allTds = individualsOverviewPage.individualsOverviewGrid.all(by.tagName('td'));
        const tra = allTds.filter(el => {
          return el.element(by.css('td:nth-child(1)')).getText().then(g => {
            return g.startsWith('Matthias');
          });
        });

        debugger;
        console.log(tra);
      });

    });
  });

  // Scenario - Fields not filled out
  describe('Given not all fields are filled out', () => {
    beforeEach(async () => {
      individualDetailsPage.birthdateInput.sendKeys('');
      individualDetailsPage.firstNameInput.sendKeys('');
      individualDetailsPage.lastNameInput.sendKeys('');
    });

    it('Then the save button is disabled', () => {
      expect(individualDetailsPage.saveButton.getAttribute('disabled')).toBeTruthy();
    });

    it('Then the cancel button is enabled', () => {
      expect(individualDetailsPage.saveButton.getAttribute('disabled')).toBeFalsy();
    });
  });
});
