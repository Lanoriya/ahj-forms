const puppeteer = require('puppeteer');
const path = require('path');
const { exec } = require('child_process');

let browser;
let page;
let server;

beforeAll(async () => {
  // Start your server
  server = exec(`node ${path.join(__dirname, 'path/to/e2e.server.js')}`);
  
  // Give the server time to start
  await new Promise(resolve => setTimeout(resolve, 10000));

  // Launch the browser
  browser = await puppeteer.launch();
  page = await browser.newPage();
}, 20000); // Increased timeout for server start and browser launch

afterAll(async () => {
  if (browser) {
    await browser.close();
  }
  if (server) {
    server.kill();
  }
});

describe('Popover functionality', () => {
  test('should display the popover when the button is clicked', async () => {
    await page.goto('http://localhost:3000'); // Adjust URL as needed
    await page.click('#popover-button'); // Adjust selector as needed
    const popover = await page.$('#popover'); // Adjust selector as needed
    expect(popover).toBeTruthy();
  }, 10000); // Adjust timeout if needed

  test('should remove the popover when the button is clicked again', async () => {
    await page.click('#popover-button'); // Adjust selector as needed
    const popover = await page.$('#popover'); // Adjust selector as needed
    expect(popover).toBeFalsy();
  }, 10000); // Adjust timeout if needed
});
