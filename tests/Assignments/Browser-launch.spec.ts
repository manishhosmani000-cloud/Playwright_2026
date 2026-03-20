import { chromium,test } from "@playwright/test"

test(`Test to launch chrome browser`, async() => { 

const browser = await chromium.launch({channel:"chrome"})
const context = await browser.newContext()
const page =  await context.newPage()

await page.goto(`http://leaftaps.com/opentaps/control/main`)

await page.waitForTimeout(3000) 
})


test(`Test to launch edge browser`, async() => { 

const browser = await chromium.launch({channel:"msedge"})
const context = await browser.newContext()
const page =  await context.newPage()

await page.goto(`http://leaftaps.com/opentaps/control/main`)

await page.waitForTimeout(3000)
})

// test(`Test to launch webkit browser`, async() => { 

// const browser3 = await webkit.launch()
// const context3 = await browser3.newContext()
// const page3 =  await context3.newPage()

// await page3.goto(`http://leaftaps.com/opentaps/control/main`)

// await page3.waitForTimeout(3000)
// })