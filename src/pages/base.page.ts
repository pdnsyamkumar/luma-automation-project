import { Page } from "@playwright/test";
import { TextInputFieldComponent } from "@components/text-input-field-component";
import { ButtonComponent } from "@components/button-component";

export class BasePage {
  readonly textInputFieldComponent: TextInputFieldComponent;
  readonly buttonComponent: ButtonComponent;
  constructor(readonly page: Page) {
    this.textInputFieldComponent = new TextInputFieldComponent(page);
    this.buttonComponent = new ButtonComponent(page);
  }
}
