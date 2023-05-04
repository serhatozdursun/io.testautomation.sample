import { Service } from '../config/Service';
import { type By, until, type WebElement } from 'selenium-webdriver';
import { GetBy } from '../elements/GetBy';

export class WaitHelper {
  private readonly WAIT_TIME: number = 1500;

  public async waitElementLocated(locator: string): Promise<WebElement> {
    const ByHelper = new GetBy();
    const by: By = await ByHelper.getBy(locator);
    return await Service.getInstance().driver.wait(until.elementLocated(by), this.WAIT_TIME);
  }

  public async waitElementsLocated(locator: string): Promise<WebElement[]> {
    const ByHelper = new GetBy();
    const by: By = await ByHelper.getBy(locator);
    return await Service.getInstance().driver.wait(until.elementsLocated(by), this.WAIT_TIME);
  }

  public async waitForElementClickable(locator: string): Promise<WebElement> {
    const element: WebElement = await this.waitElementLocated(locator);
    return await Service.getInstance().driver.wait(until.elementIsEnabled(element), this.WAIT_TIME);
  }

  public async waitForElementVisible(locator: string): Promise<WebElement> {
    const element: WebElement = await this.waitElementLocated(locator);
    return await Service.getInstance().driver.wait(until.elementIsVisible(element), this.WAIT_TIME);
  }
}
