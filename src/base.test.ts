import { pageFixtures } from "@pages/page.fixtures";
import { mergeTests } from "@playwright/test";

export const test = mergeTests(pageFixtures)