import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';
import {protractor} from 'protractor/built/ptor';

describe('workspace-project App', () => {
  let page: AppPage;
  function getTodayDate() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = date.getFullYear();
    const today = yyyy + '-' + mm + '-' + dd;
    return today;
  }
  const EC = protractor.ExpectedConditions;
  const destinationField = element(by.xpath('//input[@id=\'ss\']'));
 // const closeBtnSignBtn = element(by.xpath('//div[@class=\'bicon bicon-aclose header-signin-prompt__close\']'));
  const checkInButton = element(by.xpath('//div[@class=\'xp__dates-inner xp__dates__checkin\']'));
  const checkOutBtn = element(by.xpath('//div[@class=\'xp__dates-inner xp__dates__checkout\']'));
  const popularBtn = element(by.xpath('//span[@class=\'sb-autocomplete__badge sb-autocomplete__badge--popular\']'));
  const currentDateBtn = element(by.xpath('//td[@data-date=\'' + getTodayDate() + '\']'));
  beforeEach(async () => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get('https://www.booking.com');

  });

  it('typeNewYork', async () => {

    destinationField.click();
    destinationField.sendKeys('New York');
    await browser.wait(EC.presenceOf(popularBtn), 5000);
    await browser.wait(popularBtn.click(), 5000);

    await browser.sleep(3000)
    checkInButton.click();
    checkInButton.click();
    browser.sleep(5000);
    currentDateBtn.click();
    browser.sleep(5000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
