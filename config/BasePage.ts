import { After, Before } from '@cucumber/cucumber';
import { BROWSER_NAME, Service } from './Service';

Before(async () => {
  await Service.getInstance().createDriver(BROWSER_NAME.CHROME);
  await Service.getInstance().driver.manage().window().fullscreen();
  await Service.getInstance().driver.get('https://www.google.com/');
});

After((): void => {
  void Service.getInstance()
    .quitDriver()
    .catch((e) => {
      console.log(e.message);
    })
    .then(() => {
      console.log('driver closed successfully');
    });
});

export class BasePage {}
