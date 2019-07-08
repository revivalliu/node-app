
//require('chromedriver');
//var chrome = require("selenium-webdriver/chrome");
//const assert = require('assert');
//const {Builder, By} = require('selenium-webdriver');

const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

describe('Google Search', function() {
  let driver;

  before(function() {
    driver = new Builder().forBrowser('chrome').build();
  });

  test.it('example', function theTestFunction() {
    driver.get('http://www.google.com/ncr');                          // (1)
    driver.findElement(By.name('q')).sendKeys('webdriver');           // (2)
    driver.findElement(By.name('btnK')).click();                      // (3)
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);    // (4)
  });

  test.after(function() {
    driver.quit();
  });
});
//describe('Checkout workflow', function() {
//  let driver;

//  before(async function() {
//    driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
//  });

//  it('adds a coffee to the cart and checks out', async function() {
//    await driver.get('http://localhost:3000'); 
//    await driver.findElement(By.className('btn-success')).click();
//    await driver.findElement(By.id('cart')).click();
//    await driver.findElement(By.id('checkout')).click();

//    let total = await driver.findElement(By.id('total'));    assert.equal(await total.getText(), 'Total: $5.5');
//    });
//    after(() => driver && driver.quit());
//});
