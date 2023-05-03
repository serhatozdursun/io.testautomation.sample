import {WaitHelper} from "./WaitHelper";
import {Service} from "../config/Service";
import {Key} from "selenium-webdriver";

export class SeleniumHelper extends WaitHelper {
    public async sendKeysToElement(locator: string, text: string): Promise<void> {
        await (await this.waitForElementClickable(locator)).sendKeys(text);
    }

    public async clickOnElement(locator: string): Promise<void> {
        await (await this.waitForElementClickable(locator)).click();
    }

    public async pressEnterOnActiveElement() {
        await Service.getInstance().driver.switchTo().activeElement().sendKeys(Key.ENTER);
    }
}