const webdriver = require("selenium-webdriver");


async function test1(){
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    await driver.get('https://www.youtube.com/');

    const input = await driver.findElement(webdriver.By.id('search'));

    await input.sendKeys('gropro hero max', webdriver.Key.ENTER);

    driver.close();

}

test1();