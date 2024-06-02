import puppeteer from "puppeteer";
import { fork } from "child_process";

const PORT = 8087;
const URL = `http://localhost:${PORT}`;

// Start the server
const server = fork('path/to/e2e.server.js');

describe('Popover functionality', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Wait for the server to start
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Adjust the timeout as needed

    // Launch the browser
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  beforeEach(async () => {
    await page.goto(URL);
  });

  it('should display the popover when the button is clicked', async () => {
    await page.click('.btn-pop');

    // Verify the popover appears
    const popContent = await page.$('.pop-content');
    expect(popContent).not.toBeNull();

    // Verify the popover content
    const popTitle = await page.$eval('.pop-title', el => el.textContent);
    const popText = await page.$eval('.pop-text', el => el.textContent);
    expect(popTitle).toContain('Popover title');
    expect(popText).toContain("And here's some amazing content. It's very engaging. Right?");

    // Verify the popover is positioned correctly
    const btnRect = await page.$eval('.btn-pop', el => el.getBoundingClientRect());
    const popRect = await page.$eval('.pop-content', el => el.getBoundingClientRect());
    const triangleRect = await page.$eval('.triangle', el => el.getBoundingClientRect());

    const popLeft = btnRect.left - (popRect.width - btnRect.width) / 2;
    const popTop = btnRect.top - popRect.height - triangleRect.height;
    expect(popRect.left).toBeCloseTo(popLeft, 1);
    expect(popRect.top).toBeCloseTo(popTop, 1);
  });

  it('should remove the popover when the button is clicked again', async () => {
    await page.click('.btn-pop');
    await page.click('.btn-pop');

    // Verify the popover is removed
    const popContent = await page.$('.pop-content');
    expect(popContent).toBeNull();
  });
});
