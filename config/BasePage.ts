import {After, Before, BeforeAll, setDefaultTimeout, Status} from '@cucumber/cucumber';
import {BROWSER_NAME, Service} from "./Service";

Before(async () => {
    await Service.getInstance().createDriver(BROWSER_NAME.CHROME);
    await Service.getInstance().driver.manage().window().fullscreen();
    await Service.getInstance().driver.get('https://www.google.com/')
})

After(() => {
    Service.getInstance().quitDriver();
})

export class BasePage{

}