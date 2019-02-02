import moment = require('moment');
import { by, ElementFinder, promise, protractor } from 'protractor';

import {
    IndividualDetailsPage, IndividualsOverviewPage
} from '../../../../../testing-infrastructure';
// Feature
describe('Saving an Individual', () => {
  let individualDetailsPage: IndividualDetailsPage;

  beforeEach(() => {
    individualDetailsPage = new IndividualDetailsPage();
    individualDetailsPage.navigateToDetails('-1');
  });

  // Scenario - Fields filled out
  describe('Given all fields are filled out', () => {
    const firstName = 'Matthias ' + moment().toString();
    const lastName = 'Müller ' + moment().toString();

    beforeEach(() => {
      individualDetailsPage.firstNameInput.setText(firstName);
      individualDetailsPage.lastNameInput.setText(lastName);
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

      // Ensure outcome
      it('Then the user gets navigated to the Overview Page', async () => {
        expect(individualsOverviewPage.isDisplayed).toBe(true);
      });

      // Ensure outcome
      it('Then the changed data is shown in the Overview Page', async () => {
        const allTableRows = individualsOverviewPage.individualsOverviewGrid.all(by.tagName('tr'));
        const filteredTableRows = allTableRows.filter(elem => {
          return elem.all(by.css('td')).then((tableDefs: ElementFinder[]) => {
            if (tableDefs.length > 0) {
              let actualFirstName: string;
              let actualLastName: string;

              const promises: promise.Promise<any>[] = [];
              promises.push(tableDefs[0].getText().then(str => {
                actualFirstName = str;
              }));

              promises.push(tableDefs[1].getText().then(str => {
                actualLastName = str;
              }));

              return protractor.promise.all(promises).then(() => {
                return actualFirstName === firstName && actualLastName === lastName;
              });
            } else {
              return false;
            }
          });
        });

        expect(filteredTableRows.count()).toBeGreaterThanOrEqual(1);
      });

    });
  });

  // Scenario - Fields not filled out
  describe('Given not all fields are filled out', () => {
    beforeEach(async () => {
      individualDetailsPage.birthdateInput.setText('');
      individualDetailsPage.firstNameInput.setText('');
      individualDetailsPage.lastNameInput.setText('');
    });

    // Ensure outcome
    it('Then the save button is disabled', () => {
      expect(individualDetailsPage.saveButton.isEnabled).toBe(false);
    });

    // Ensure outcome
    it('Then the cancel button is enabled', () => {
      expect(individualDetailsPage.cancelButton.isEnabled).toBe(true);
    });
  });
});
