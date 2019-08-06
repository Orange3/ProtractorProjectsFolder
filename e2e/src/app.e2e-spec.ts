import {SearchPage} from './pages/search.page';
import {HotelsPage} from './pages/hotels.page';
import {browser, by, element, logging} from 'protractor';
import {protractor} from 'protractor/built/ptor';

describe('New York hotels', () => {
  const EC = protractor.ExpectedConditions;
  beforeAll(async () => {
    browser.driver.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get('https://www.booking.com');

  });

  it('Search hotels in New York for 7 days from today', () => {
    const searchPage = new SearchPage();
    searchPage.destinationField.click();
    searchPage.destinationField.sendKeys('New York');
    searchPage.popularBtn.click();
    while (!searchPage.calendar.isDisplayed()) {
      searchPage.checkInButton.click();
    }
    searchPage.currentDateBtn.click();
    searchPage.lastDateBtn.click();
    searchPage.searchBtn.click();
  });

  it('Check that found hotels are from NY', () => {
    const hostelPage = new HotelsPage();
    expect(hostelPage.getFoundHotels().count()).toBeGreaterThan(0);
    hostelPage.getFoundHotels().each((item) => {
      expect(item.getText()).toMatch('New York');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
