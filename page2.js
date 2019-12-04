const webdriver = require('selenium-webdriver')
const By = webdriver.By

async function testAdd() {
    const driver = new webdriver.Builder().forBrowser('chrome').build()
    await driver.get('file:///home/sunbeam/dac/devops/Devops/devops/code/dec_4/app1/calculator.html')

    // find the input for value 1
    const inputValue1 = driver.findElement(By.id('value1'))
    inputValue1.sendKeys('20')

    // find the input for value 2
    const inputValue2 = driver.findElement(By.id('value2'))
    inputValue2.sendKeys('20')

    // find and click the button button-calculate
    const button = driver.findElement(By.id('button-calculate'))
    button.click()

    // check the actual with expected
    const expected = 40
    const actual = await driver.findElement(By.id('result')).getAttribute('value')
    console.log(`expected: ${expected}, actual: ${actual}`)
    if (expected == actual) {
        console.log('addition logic is working fine :) :)')
    } else {
        console.log('addition logic is NOT working fine :( :(')
    }
    
    driver.close()
}

testAdd()
