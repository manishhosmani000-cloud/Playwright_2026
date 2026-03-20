import { expect,test } from "@playwright/test"
import { log } from "console";


test(`Dropdown Testing`, async ({ page }) => { 


    await page.goto(`https://leafground.com/button.xhtml`);
    await expect(page.getByRole(`button`, { name: "Disabled" })).toBeDisabled()
    await page.getByRole(`button`, { name: "Click" }).click()
    await expect(page).toHaveTitle(`Dashboard`)
})