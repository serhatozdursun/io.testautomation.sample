import { Builder, type WebDriver } from 'selenium-webdriver';

export enum BROWSER_NAME {
  FIREFOX = 'firefox',
  CHROME = 'chrome',
  SAFARI = 'safari'
}

const chromeCaps = {
  'goog:chromeOptions': {
    args: ['--no-sandbox', '--disable-infobars', '--disable-gpu', '--start-fullscreen']
  }
};

export class Service {
  private static instance: Service;
  private _driver: WebDriver;

  private constructor() {}

  public static getInstance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
    }

    return Service.instance;
  }

  public async createDriver(browser: BROWSER_NAME): Promise<void> {
    switch (browser) {
      case BROWSER_NAME.FIREFOX:
        this.driver = await new Builder().forBrowser(BROWSER_NAME.FIREFOX).build();
        break;
      case BROWSER_NAME.SAFARI:
        this.driver = this.driver = await new Builder().forBrowser(BROWSER_NAME.SAFARI).build();
        break;
      default:
        this._driver = this.driver = await new Builder()
          .withCapabilities(chromeCaps)
          .forBrowser(BROWSER_NAME.CHROME)
          .build();
        break;
    }
  }

  public async quitDriver(): Promise<void> {
    try {
      if (undefined !== (await this.driver.getSession())) {
        await this._driver.close();
        await this._driver.quit();
      }
    } catch (e) {
      let errorMessage: string = '';
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      console.error(`Some error occurred: '${errorMessage}'`);
      throw e;
    }
  }

  get driver(): WebDriver {
    return this._driver;
  }

  set driver(value: WebDriver) {
    this._driver = value;
  }
}
