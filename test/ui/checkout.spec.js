
require('chromedriver');
var chrome = require("selenium-webdriver/chrome");
const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

describe('Checkout workflow', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
  });
  
  driver.get('http://www.google.com/ncr');
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.name('btnK')).click();
  driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  driver.quit();

  it('adds a coffee to the cart and checks out', async function() {
	  driver.get('http://www.google.com/ncr');
	  driver.findElement(By.name('q')).sendKeys('webdriver');
	  driver.findElement(By.name('btnK')).click();
	  driver.wait(until.titleIs('webdriver - Google Search'), 1000);
	  driver.quit();
//    await driver.get('http://localhost:3000'); 
//    await driver.findElement(By.className('btn-success')).click();
//    await driver.findElement(By.id('cart')).click();
//    await driver.findElement(By.id('checkout')).click();

//    let total = await driver.findElement(By.id('total'));    assert.equal(await total.getText(), 'Total: $5.5');
//    });
//    after(() => driver && driver.quit());
});
