import { expect, test } from "@playwright/test"
import { log } from "console";

//Assignment 1
// test(`Create a Lead`, async ({ page }) => { 


//     await page.goto(`http://leaftaps.com/opentaps/control/main`);

//     await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`);

//     await page.locator(`//input[@id='password']`).fill(`crmsfa`);

//     await page.locator(`//input[@class='decorativeSubmit']`).click()

//     await page.locator(`//a[contains(text(),'CRM')]`).click()

//     await page.locator(`//a[text()='Leads']`).click()

//     await page.locator(`//a[text()='Create Lead']`).click()

//     await page.locator(`//input[@id='createLeadForm_companyName']`).fill('Deloitte')
//     await page.locator(`//input[@id='createLeadForm_firstName']`).fill('Manish')
//     await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`Hosamani`)
//     await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Dear M!`)
//     await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Mr`)
//     await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill(`0 L`)
//     await page.locator(`//input[@id='createLeadForm_departmentName']`).fill(`Consulting`)
//     await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill(`8000000003`)
//     await page.locator(`//input[@name='submitButton']`).click()
//     let leaftaps_title=await page.title();
//     console.log(leaftaps_title);
//     await page.waitForTimeout(3000)
// })


//Assignment 2
test(`Edit a Lead`, async ({ page }) => { 


    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`Demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click()
    await page.locator(`//a[contains(text(),'CRM')]`).click()
    await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Find Leads']`).click()
    await page.locator(`(//input[@name='firstName'])[3]`).fill(`Manish`)
    await page.locator(`//button[text()='Find Leads']`).click()

    await page.waitForTimeout(2000)

    await page.locator(`(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]`).click()
    await page.locator(`//a[text()='Edit']`).click()

    //Printing default value selected in currency dropdown
    const currency= await page.locator(`//select[@id='updateLeadForm_currencyUomId']`).inputValue()
    console.log(currency);
    
    await page.locator(`//input[@id='updateLeadForm_companyName']`).clear()
    await page.locator(`//input[@id='updateLeadForm_companyName']`).fill(`Qeagle`)
    await page.locator(`//input[@id='updateLeadForm_annualRevenue']`).clear()
    await page.locator(`//input[@id='updateLeadForm_annualRevenue']`).fill(`5 L`)
    await page.locator(`//input[@id='updateLeadForm_departmentName']`).clear()
    await page.locator(`//input[@id='updateLeadForm_departmentName']`).fill(`Consulting Dep`)
    await page.locator(`//textarea[@id='updateLeadForm_description']`).fill(`Hi,This is Manish`)
    await page.locator(`//input[@value='Update']`).click()
    await page.waitForTimeout(3000)
    let leaftaps_title2=await page.title();
    console.log(leaftaps_title2);
    await expect(leaftaps_title2).toEqual(`View Lead | opentaps CRM`)
    await page.waitForTimeout(3000)
})
