import {browser, by, element, ElementArrayFinder} from 'protractor';

export class SearchPage {
   destinationField = element(by.xpath('//input[@id=\'ss\']'));
   closeBtnSignBtn = element(by.xpath('//div[@class=\'bicon bicon-aclose header-signin-prompt__close\']'));
   checkInButton = element(by.xpath('//div[@class=\'xp__dates-inner xp__dates__checkin\']'));
   checkOutBtn = element(by.xpath('//div[@class=\'xp__dates-inner xp__dates__checkout\']'));
   popularBtn = element(by.xpath('//span[@class=\'sb-autocomplete__badge sb-autocomplete__badge--popular\']'));
   currentDateBtn = element(by.xpath('//td[@data-date=\'' + this.getTodayDate() + '\']'));
   lastDateBtn = element(by.xpath('//td[@data-date=\'' + this.getLastDate(7) + '\']'));
   searchBtn = element(by.xpath('//button[contains(@class,\'sb-searchbox__button\')]'));
   calendar = element(by.xpath('//div[@class=\'bui-calendar\']'));


  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getTodayDate() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = date.getFullYear();
    const today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

    getLastDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const today = yyyy + '-' + mm + '-' + dd;
    return today;
  }
}
