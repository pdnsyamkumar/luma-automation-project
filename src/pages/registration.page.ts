import { BasePage } from "@pages/base.page";
import { Label } from "@utilities/enums";
import { RegistrationFormData } from "@utilities/interfaces";
import { expect } from "@playwright/test";

export class RegistrationPage extends BasePage {

    // REGISTRATION PAGE LOCATORS

    // Input Field Locators
    readonly getFirstNameInputField = () => this.textInputFieldComponent.getTextInputFieldByLabelName(Label.FIRST_NAME)
    readonly getLastNameInputField = () => this.textInputFieldComponent.getTextInputFieldByLabelName(Label.LAST_NAME)
    readonly getEmailInputField = () => this.textInputFieldComponent.getTextInputFieldByLabelName(Label.EMAIL)
    readonly getPasswordInputField = () => this.textInputFieldComponent.getTextInputFieldByLabelName(Label.PASSWORD)
    readonly getConfirmPasswordInputField = () => this.textInputFieldComponent.getTextInputFieldByLabelName(Label.CONFIRM_PASSWORD)

    // Button Locators
    readonly getCreateAnAccountButton = () => this.page.getByRole('button', {name: 'Create an Account'});

    // Error Message Locators
    readonly getErrorMessageByLabel = (label: Label) => this.page.locator(`#${label.toLowerCase().replace(' ', '')}-error`)
    readonly getPasswordStrength = () => this.page.locator(`#password-strength-meter-label`).textContent();

    async fillRegistrationForm(fillData: RegistrationFormData): Promise<void>{

    }
}