import {By} from "selenium-webdriver";
import {getLocator} from "./Locators";

export enum BY_TYPES {
    XPATH = 'xpath',
    NAME = 'name',
    CSS = 'css',
    ID = 'id',
    CLASS_NAME = 'class_name'
}

export class GetBy {

    public async getBy(locator: string): Promise<By> {
        const locatorMap: Map<string, string> | undefined = await getLocator(locator);
        if (locatorMap !== undefined) {
            const typeValue: any = locatorMap.get('type');

            const type: BY_TYPES = typeValue as BY_TYPES;
            const value: string = <string>locatorMap.get('locatorValue');
            switch (type) {
                case BY_TYPES.XPATH:
                    return By.xpath(value);
                case BY_TYPES.NAME:
                    return By.name(value);
                case BY_TYPES.CSS:
                    return By.css(value);
                case BY_TYPES.ID:
                    return By.id(value);
                case BY_TYPES.CLASS_NAME:
                    return By.className(value);
                default:
                    throw Error(`${locator} can not found`)
            }
        } else {
            throw Error(`${locator} can not found`)
        }
    }

}