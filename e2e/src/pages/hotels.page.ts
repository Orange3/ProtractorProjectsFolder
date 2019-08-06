import {browser, by, element, ElementArrayFinder} from 'protractor';

export class HotelsPage {
  getFoundHotels(): ElementArrayFinder {
    const hotels = element.all(by.xpath('//div[@class=\'sr_card_address_line\']//a'));
    return hotels;
  }
}
