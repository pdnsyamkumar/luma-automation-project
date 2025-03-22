import { LoginPage } from "@pages/login"
import {test as baseTest } from "@playwright/test"
import { RegistrationPage } from "@pages/registration.page";


export const pageFixtures = baseTest.extend<PageFixtures>({
    loginPage: async ({page}, use)=>{
        await use(new LoginPage(page));
    },

    registrationPage: async ({page}, use)=>{
        await use(new RegistrationPage(page));
    },
})

export type PageFixtures = {
    loginPage: LoginPage
    registrationPage: RegistrationPage
}