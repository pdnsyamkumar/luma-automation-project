import { BasePage } from "@pages/base.page";
import { Label, NavigationMethod } from "@utilities/enums";
import { RegistrationFormData } from "@utilities/interfaces";
import { expect } from "@playwright/test";

export class RegistrationPage extends BasePage {
  // REGISTRATION PAGE LOCATORS

  // Input Field Locators
  readonly getFirstNameInputField = () =>
    this.textInputFieldComponent.getTextInputFieldByLabelName(Label.FIRST_NAME);
  readonly getLastNameInputField = () =>
    this.textInputFieldComponent.getTextInputFieldByLabelName(Label.LAST_NAME);
  readonly getEmailInputField = () =>
    this.textInputFieldComponent.getTextInputFieldByLabelName(Label.EMAIL);
  readonly getPasswordInputField = () =>
    this.textInputFieldComponent.getTextInputFieldByLabelName(Label.PASSWORD);
  readonly getConfirmPasswordInputField = () =>
    this.textInputFieldComponent.getTextInputFieldByLabelName(
      Label.CONFIRM_PASSWORD,
    );

  // Button Locators
  readonly getCreateAnAccountButton = () =>
    this.page.getByRole("button", { name: "Create an Account" });

  // Error Message Locators
  readonly getFirstNameError = () => this.page.locator(`#firstname-error`);
  readonly getLastNameError = () => this.page.locator(`#lastname-error`);
  readonly getEmailError = () => this.page.locator(`#email_address-error`);
  readonly getPasswordError = () => this.page.locator(`#password-error`);
  readonly getConfirmPasswordError = () =>
    this.page.locator(`#password-confirmation-error`);
  readonly getPasswordStrength = () =>
    this.page.locator(`#password-strength-meter-label`).textContent();


  async navigateToCreateAnAccountPage(navigationMethod: NavigationMethod = NavigationMethod.UI){
    
  }

  async createAnAccount(createAnAccountData: RegistrationFormData){



  }

  /**
   * Fills out the registration form with provided user data and submits it
   * @param fillData - Object containing registration form field values
   */
  async fillRegistrationForm(fillData: RegistrationFormData): Promise<void> {
    // Destructure the registration form data
    const { firstName, lastName, email, password, confirmPassword } = fillData;

    const fieldMappings = [
      { value: firstName, getter: this.getFirstNameInputField, label: Label.FIRST_NAME },
      { value: lastName, getter: this.getLastNameInputField, label: Label.LAST_NAME },
      { value: email, getter: this.getEmailInputField, label: Label.EMAIL },
      { value: password, getter: this.getPasswordInputField, label: Label.PASSWORD },
      { value: confirmPassword, getter: this.getConfirmPasswordInputField, label: Label.CONFIRM_PASSWORD },
    ];

    // Fill all form fields
    for (const { value, getter, label } of fieldMappings) {
      await this.textInputFieldComponent.fillInputFieldAndVerify(
        value,
        getter(),
        label
      );
    }

    await this.getCreateAnAccountButton().click();
  }
}
