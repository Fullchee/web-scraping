const puppeteer = require('puppeteer');

const getInsightTimerData = async (): Promise<void> => {
  // launch the browser with above options
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // go to website that protected with HTTP Basic Authentication
  await page.goto(
    'https://www.toronto.ca/services-payments/water-environment/how-to-use-less-water/mywatertoronto/mywater-toronto-application/'
  );
  await page.type('#accountnum', process.env.accountnum);
  await page.type('#clientnum', process.env.clientnum);
  await page.type('#lastname', process.env.lastname);
  await page.type('#postalcode', process.env.postalcode);
  await page.select('#paymentmethod', process.env.paymentmethod);
  await page.click('#singlebutton');
  await page.waitForNavigation()

  // close the browser
  await browser.close();
};

export default getInsightTimerData
