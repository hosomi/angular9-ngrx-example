import { InformationsPage } from './informations.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let pageInformations: InformationsPage;

  beforeEach(() => {
    pageInformations = new InformationsPage();
  });

  it('informations show', () => {
    pageInformations.navigateTo();
    expect(pageInformations.getTitleText()).toEqual('Informations');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
