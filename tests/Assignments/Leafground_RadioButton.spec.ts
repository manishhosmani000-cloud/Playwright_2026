import { expect,test } from "@playwright/test"
import { log } from "console";


test(`Dropdown Testing`, async ({ page }) => { 


    await page.goto(`https://leafground.com/radio.xhtml`);
    // let defvalue= await page.locator(`//table[@id='j_idt87:console2']`).inputValue()
    // console.log(defvalue)
    await page.getByText("Chrome").nth(0).click()
    expect(await page.getByText("Chrome").nth(0)).toBeEnabled()
    await page.getByText("1-20 Years").click()
    await expect(page.getByRole(`radio`, {name: "Safari"}).nth(1)).toBeChecked()
    
})