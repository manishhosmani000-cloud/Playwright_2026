import {test} from "@playwright/test"

test(`Create Lead`,async({page})=>{

    await page.goto(`https://login.salesforce.com/`)
    await page.getByRole(`textbox`,{name:"Username"}).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.getByRole(`textbox`,{name:"Password"}).fill(`TestLeaf@2025`)
    await page.getByRole(`button`,{name:"Log In"}).click()
    await page.getByTitle(`App Launcher`).click({timeout:30000})
    await page.getByRole(`button`,{name:"View All Applications"}).click()
    await page.locator(`//p[@title='Manage your sales process with accounts, leads, opportunities, and more']`).click()
    await page.getByRole(`link`,{name:"Leads"}).click({timeout:30000})
    await page.getByRole(`button`,{name:"New"}).click()
    await page.getByRole('combobox',{name:"Salutation"}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value='Mr.']`).click()
    await page.getByRole('textbox',{name:"Last Name"}).fill(`Hosamani`)
    await page.getByRole('textbox',{name:"Company"}).fill(`Deloitte`)
    await page.locator(`//button[@name='SaveEdit']`).click()
    //await expect().toEqual(``)
})