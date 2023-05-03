import fs from 'fs';

let platform: string;
const locatorsMap = new Map<string, Map<string, string>>();

/**
 * By using this method, you can find the desired locator value in all locator JSON files.
 * As soon as the locator is found, it is stored with the locatorsMap Map object.
 * In that case, if the scenario requires the same locator in that execution,
 * we can obtain it from the locatorsMap without re-searching all locator files.
 *
 * @param name is locator's json key
 */
export async function getLocator(name: string): Promise<Map<string, string> | undefined> {
    try {
        if (locatorsMap.has(name)) {
            return locatorsMap.get(name) as Map<string, string>;
        }
        const locatorDir = './resources/locators';
        const locatorFileNames: string[] = fs.readdirSync(locatorDir);
        for (const locatorFileName of locatorFileNames) {
            const locatorFile: any = fs.readFileSync(`${locatorDir}/${locatorFileName}`);
            const json: any = JSON.parse(locatorFile);
            if (Object.prototype.hasOwnProperty.call(json, name)) {
                const locatorValue: string = json[name].value;
                const type: string = json[name].type;
                locatorsMap.set(name, new Map([
                    ['type', type],
                    ['locatorValue', locatorValue]
                ]));
                return locatorsMap.get(name);
            }
        }
        throw new Error(`'${name}' is not found in json object that under the '${locatorDir}' directory`);
    } catch (e) {
        if (e instanceof Error) {
            const errorMessage: string = e.message;
            console.error(`Some error occurred: '${errorMessage}'`);
            throw e;
        }
    }
}
