import { Given, Then, When } from '@cucumber/cucumber';
import { BasePage } from '../config/BasePage';
import { SeleniumHelper } from '../helper/SeleniumHelper';
import { assert } from 'chai';

const driver = new SeleniumHelper();

Given(/^User is on google main page to search (.*) keyword$/, async (keyword: string) => {
  await driver.sendKeysToElement('search_box', keyword);
});
When('Hit to Enter', async () => {
  await driver.pressEnterOnActiveElement();
});

Then(/^Except to find (.*) webpage$/, async (webpage: string) => {
  const links: string[] = await driver.getElementsAttributes('results', 'href');
  assert.isTrue(links.some((e) => e === webpage));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SearchKeyword extends BasePage {}
