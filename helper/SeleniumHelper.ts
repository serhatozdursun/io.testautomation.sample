import { WaitHelper } from './WaitHelper';
import { Service } from '../config/Service';
import { Key, type WebElement } from 'selenium-webdriver';

export class SeleniumHelper extends WaitHelper {
  public async sendKeysToElement(locator: string, text: string): Promise<void> {
    await (await this.waitForElementClickable(locator)).sendKeys(text);
  }

  public async clickOnElement(locator: string): Promise<void> {
    await (await this.waitForElementClickable(locator)).click();
  }

  public async pressEnterOnActiveElement(): Promise<void> {
    await Service.getInstance().driver.switchTo().activeElement().sendKeys(Key.ENTER);
  }

  public async getElementsAttributes(locator: string, attribute: string): Promise<string[]> {
    const text: string[] = [];
    const elements: WebElement[] = await this.waitElementsLocated(locator);
    for (const element of elements) {
      text.push(await element.getAttribute(attribute));
    }
    return text;
  }
}
