import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getParagraphText(selector: string) {
    return this.getElement(selector).getText();
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getElementById(selector: string) {
    return element(by.id(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
