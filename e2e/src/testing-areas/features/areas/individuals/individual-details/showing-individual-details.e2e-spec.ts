import { IndividualDetailsPage } from '../../../../../testing-infrastructure';

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

    // Incoming Event
    describe('When the Details are loaded', () => {
      // Ensure outcome
      it('Then all Controls are empty', async () => {
        expect(individualDetailsPage.firstNameInput.text).toBe('');
        expect(individualDetailsPage.lastNameInput.text).toBe('');
        expect(individualDetailsPage.birthdateInput.text).toBe('');
      });

      // Ensure outcome
      it('Then the save button is disabled', () => {
        expect(individualDetailsPage.saveButton.isEnabled).toBe(false);
      });
    });
  });

  // Scenario - Existing Individual
  describe('Given an existing Individual', () => {
    beforeEach(async () => {
    });

    // Incoming Event
    describe('When the Details are loaded', () => {
      // Ensure outcome
      it('Then the details of loaded the Individual are shown in the Controls', () => {

      });

      // Ensure outcome
      it('Then the User does not see any validation errors', () => {

      });

      // Ensure outcome
      it('Then the User can save the Individual', () => {

      });
    });
  });
});
