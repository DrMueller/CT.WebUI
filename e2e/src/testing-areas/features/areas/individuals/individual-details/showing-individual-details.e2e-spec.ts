import { IndividualDetailsPage } from '../../../../pages/areas/individuals/components';

// Feature
describe('Showing Individual Details', () => {
  let individualDetailsPage: IndividualDetailsPage;

  beforeEach(() => {
    individualDetailsPage = new IndividualDetailsPage();
  });

  // Scenario - New Individual
  describe('Given a new Individual', () => {
    beforeEach(async () => {
      await individualDetailsPage.navigateToDetails('-1');
    });

    describe('When the Details are loaded', () => {
      it('Then all Controls are empty', async () => {
        expect(individualDetailsPage.firstNameInput.text).toBe('');
        expect(individualDetailsPage.lastNameInput.text).toBe('');
        expect(individualDetailsPage.birthdateInput.text).toBe('');
      });

      it('Then the save button is disabled', () => {
        expect(individualDetailsPage.saveButton.isEnabled).toBe(false);
      });
    });
  });

  // Scenario - Existing Individual
  describe('Given an existing Individual', () => {
    beforeEach(async () => {

    });

    describe('When the Details are loaded', () => {
      it('Then the details of loaded the Individual are shown in the Controls', () => {

      });

      it('Then the User does not see any validation errors', () => {

      });

      it('Then the User can save the Individual', () => {

      });
    });
  });
});
