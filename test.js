const webdriver = require('selenium-webdriver')
const fs = require('fs')
const crypto = require('crypto-js')

async function login(){
const data = [];
const driver = new webdriver.Builder().forBrowser('chrome').build();
await driver.get('file:///home/sunbeam/dac/devops/labwork/selenium/test.html')

 let str = '['
 const email = await driver.findElement(webdriver.By.id('email'))
 const password = await driver.findElement(webdriver.By.id('password'))

 await email.sendKeys('yash');
 await password.sendKeys('yash1312')
 

const getemail =  await email.getAttribute('value');
console.log(getemail);
const getpassword = await password.getAttribute('value');
const getpassword1 = crypto.MD5(password)
console.log(getpassword1);

data.push({
    email: getemail,
    password: getpassword1
})

str += `
{
 "email": "${getemail}",
 "password": "${getpassword1}"
}
`
str += ']'

console.log(str);

fs.writeFileSync('./test.json', str)

};

login();