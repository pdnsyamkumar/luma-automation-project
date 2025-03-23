import { Locator, Page } from "@playwright/test";
import { Label } from "../utilities/enums";

export class TextInputFieldComponent {
  constructor(readonly page: Page) {}

  readonly getTextInputFieldByLabelName = (labelName: Label) =>
    this.page.getByTitle(labelName);

  /**
   * Fills an input field with a value and verifies its state
   * @param value - Text value to enter in the input field
   * @param locator - Playwright Locator for the input field
   * @param inputFieldLabel - Label enum value identifying the input field
   * @throws Error if the input field is disabled
   */
  async fillInputFieldAndVerify(
    value: string,
    locator: Locator,
    inputFieldLabel: Label,
  ) {
    // Check if the input field is enabled
    const isInputFieldEnabled = await locator.isEnabled();

    // Throw error if input field is disabled
    if (!isInputFieldEnabled) {
      throw new Error(`${inputFieldLabel} is not enabled`);
    }

    // Fill the input field with the provided value
    await locator.fill(value);
  }
}
