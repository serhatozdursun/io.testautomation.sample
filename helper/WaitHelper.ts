import {Service} from "../config/Service";
import {By, until, WebElement} from "selenium-webdriver";
import {GetBy} from "../elements/GetBy";

export class WaitHelper {
    private WAIT_TIME: number = 1500

    private async waitElementLocated(locator: string): Promise<WebElement> {
        const ByHelper = new GetBy();
        const by: By = await ByHelper.getBy(locator);
        return Service.getInstance().driver.wait(until.elementLocated(by), this.WAIT_TIME);
    }

    public async waitForElementClickable(locator: string): Promise<WebElement> {
        const element: WebElement = await this.waitElementLocated(locator);
        return Service.getInstance().driver.wait(until.elementIsEnabled(element), this.WAIT_TIME);
    }

    public async waitForElementVisible(locator: string): Promise<WebElement> {
        const element: WebElement = await this.waitElementLocated(locator);
        return Service.getInstance().driver.wait(await until.elementIsVisible(element), this.WAIT_TIME);
    }
}