import { Page } from "@playwright/test";
import { TextInputFieldComponent } from "../components/text-input-fields.component";

export class BasePage {
    readonly textInputFieldComponent : TextInputFieldComponent
    constructor(readonly page : Page){
        this.textInputFieldComponent =  new TextInputFieldComponent(page);
    }
}