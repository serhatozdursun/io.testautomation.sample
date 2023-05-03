import {When} from "@cucumber/cucumber";
import {BasePage} from "../config/BasePage";
import {SeleniumHelper} from "../helper/SeleniumHelper";

const driver = new SeleniumHelper();

When('Google main page', async () => {
    await driver.sendKeysToElement('search_box', 'test');
    await driver.pressEnterOnActiveElement();
})

class GoogleMain extends BasePage {

}