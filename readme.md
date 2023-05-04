# Selenium test project with TypeScript

This project was created for just practice, and to learn a little more about how can I create a test framework for Selenium using TS as a language

## LocatorsThe locators are stored under the locator directory which is under the resources directory.</br>

You can define locator type and value with a JSON file no matter what the name of the file. The framework will find
based on the JSON key. However, the key point is this: the framework will find the first match so the locator's JSON key should be unique

Then you can call the locators by step definition functions or even from feature files with their JSON key.

## Browsers

I created the config of the browser to be able to run it on various browsers, nevertheless, still, I should add a way to define the browser type before test executions start.
It may be managed with cucumber parameters, will see :)

## Feedbacks

If you have any feedback for me please share it because I'm so junior in TS.
