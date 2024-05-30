// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')
//const puppeteer = require('puppeteer')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: false, executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", userDataDir:"C:\\Users\\tanho\\AppData\\Local\\Google\\Chrome\\User Data"}).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://bot.sannysoft.com')
  
  await page.waitForNetworkIdle()
  await page.screenshot({ path: 'testresult2.png',fullPage: true })
  await browser.close()

  console.log(`All done, check the screenshot. ✨`)
})