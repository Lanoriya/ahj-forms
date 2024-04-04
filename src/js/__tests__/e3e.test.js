import puppeteer from 'puppeteer';

describe('check container', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('check click', async () => {
    await page.waitForSelector('.btn-pop');
    await page.click('.btn-pop');

    await page.waitForSelector('.pop-content');

    const popover = await page.$('.pop-content');
    expect(popover).toBeTruthy();
  });

});
