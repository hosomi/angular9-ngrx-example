import { browser, by, element } from 'protractor';

export class InformationsPage {

  private TEST_IDS = {
    TITLE: 'informations-title',
  };

  private xpathLocator(id: string) {
    return `//*[contains(@data-test, "${id}")]`;
  }

  navigateTo(): Promise<unknown> {
    return browser.get("http://localhost:4200/#/informations") as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.xpath(this.xpathLocator(this.TEST_IDS.TITLE))).getText() as Promise<string>;
  }
}
