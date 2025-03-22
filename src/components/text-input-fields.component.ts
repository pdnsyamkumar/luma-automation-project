import { Page } from "@playwright/test";
import { Label } from "../utilities/enums";

export class TextInputFieldComponent {
    constructor(readonly page: Page){}
    readonly getTextInputFieldByLabelName = (labelName : Label) => this.page.getByTitle(labelName)
}