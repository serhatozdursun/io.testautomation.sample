import {Builder, WebDriver} from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome"

export enum BROWSER_NAME {
    FIREFOX = 'firefox',
    CHROME = 'chrome',
    SAFARI = 'safari'
}


const chromeCaps = {
    "goog:chromeOptions": {
        "args": [ "--no-sandbox", "--disable-infobars", "--disable-gpu", "--start-fullscreen"]
    }
}


export class Service {
    private static instance: Service;
    private _driver: WebDriver;

    private constructor() {
    }

    public static getInstance(): Service {
        if (!Service.instance) {
            Service.instance = new Service();
        }

        return Service.instance;
    }

    public async createDriver(browser: BROWSER_NAME) {
        switch (browser) {
            case BROWSER_NAME.FIREFOX:
                this.driver = await new Builder().forBrowser(BROWSER_NAME.FIREFOX).build();
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
        if (undefined !== await this.driver.getSession()) {
            await this._driver.close();
            await this._driver.quit();
        }
    }

    get driver(): WebDriver {
        return this._driver;
    }

    set driver(value: WebDriver) {
        this._driver = value;
    }
}