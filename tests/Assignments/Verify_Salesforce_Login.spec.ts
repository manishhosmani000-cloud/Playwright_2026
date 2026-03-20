//First Steps to Automate


//browser
// browser context(lab) - window (invidual isolated profile + incognito window//Store any data)
// page


/* const browser = chromium.launch()
const context = browser.newContext()
const page = context.newPage() */




import { test,expect } from "@playwright/test"
import { addType } from "../Week 3/intro";


test(`Verify Salesforce Login Page`, async ({ page }) => { // page fixture will handle the opening and closing of the browser


    await page.goto(`https://login.salesforce.com/?locale=in`);


     await page.locator(`[id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`);

    await page.locator(`[id="password"]`).fill(`TestLeaf@2025`);

    await page.locator(`[id="Login"]`).click()

    await page.waitForTimeout(5000)

   
    let salesforcetitle=await page.title();
    console.log(salesforcetitle);
    await page.waitForTimeout(3000)
    await expect(salesforcetitle).toEqual(`Your Account | Salesforce`)
    await page.waitForTimeout(3000)

    console.log(addType(10,20)) // Passing argument while calling the function
})



