import { expect,test } from "@playwright/test"
import { log } from "console";


test(`Dropdown Testing`, async ({ page }) => { 


    await page.goto(`https://leafground.com/select.xhtml`);
    await page.selectOption(`//select[@class='ui-selectonemenu']`,{label:'Playwright'})
    let tooldropdown=await page.locator(`//select[@class='ui-selectonemenu']/option`)
    let tooldropcount=await tooldropdown.count();
    console.log(tooldropcount);
    //console.log(tooldropdown.nth(1).innerText);

    for(let i=0;i<tooldropcount;i++){
        console.log(await tooldropdown.nth(i).innerText());

    }
    
    

    await page.waitForTimeout(3000)
    await page.locator(`//label[contains(text(),'Select Country')]`).click()
    await page.locator(`//li[@data-label='India']`).click()
    await page.waitForTimeout(5000)
    //await expect(page.locator(`(//ul[contains(@id,'city')])/li`)).toBeVisible({timeout:60000});
    await page.locator(`//label[text()='Select City']`).click()
    let cityOptions= await page.locator(`//ul[contains(@id,'city')]/li`);
    let cityCount=await cityOptions.count();
    console.log(cityCount);
    await expect(cityCount).toBeGreaterThan(1);

    //Choosing multiple options from dropdown
    //let course=await page.locator(`//input[@placeholder='Choose Course']`)
    await page.locator(`//span[@class='ui-button-text']`).click()
    //await course.fill(`Appium`);
    await page.getByRole(`option`, { name: "Appium" }).click()
    await page.locator(`//span[@class='ui-button-text']`).click()
    //await course.fill(`AWS`);
    await page.getByRole(`option`, { name: "AWS" }).click()
    await page.locator(`(//div[contains(@id,'lang')])[1]`).click()
    await page.locator(`//li[@data-label='English']`).click()
    let langdrop=await page.locator(`(//ul[contains(@id,'lang')])/li`)
    let langdropcount=await langdrop.count();
    
    console.log(langdropcount);
    //console.log(tooldropdown.nth(1).innerText);

    for(let j=0;j<langdropcount;j++){
        console.log(await langdrop.nth(j).innerText());

    }
    
    
    //await page.selectOption(`//select[contains(@name,'lang_input')]`,{label:'Kannada'})
   

    // let salesforcetitle=await page.title();
    // console.log(salesforcetitle);
    // await page.waitForTimeout(3000)
    // await expect(salesforcetitle).toEqual(`Your Account | Salesforce`)
    await page.waitForTimeout(5000)
})



