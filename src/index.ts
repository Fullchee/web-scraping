const puppeteer = require('puppeteer');

(async () => {
    // launch the browser with above options
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // go to website that protected with HTTP Basic Authentication
    await page.goto('https://www.toronto.ca/services-payments/water-environment/how-to-use-less-water/mywatertoronto/mywater-toronto-application/');

    // close the browser
    await browser.close();
})();