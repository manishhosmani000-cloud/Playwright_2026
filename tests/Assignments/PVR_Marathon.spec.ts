import {expect,test} from "@playwright/test"
import { title } from "node:process";

test(`Verify dynamic movie ticket booking flow`,async({page})=>{

    await page.goto(`https://www.pvrcinemas.com/`);
    //await page.getByAltText("map").click()
    //await page.locator(`//input[@aria-label='All Cities List']`).click()
    await page.getByRole(`combobox`,{name:"Cities"}).click()
    await page.getByRole(`combobox`,{name:"Cities"}).fill(`Bengaluru`,{timeout:20000})
    await page.keyboard.press(`ArrowDown`);
    await page.keyboard.press(`Enter`);
    await page.locator(`//span[@class='cinemas-inactive']`).click()
    await page.locator(`//span[text()='Select Cinema']`).click()
    await page.locator(`//span[text()='INOX Garuda Mall, Magrath Road Bengaluru']`).click()
    await page.locator(`//span[text()='7 Mar']`).click()
    await page.locator(`//ul[contains(@class,'p-dropdown-items')]//span[text()='HOPPERS']`).click()
    await page.locator(`//span[text()='12:55 PM']`).click()
    await page.getByRole(`button`,{name:"Submit"}).click()
    await page.getByRole(`button`,{name:"Accept"}).click()
    await page.locator(`//span[@id='RE.RECLINER|F:11']`).click()

    // let seatId=await page.locator(`//span[@class="seat-current-pvr"]`).nth(1).innerText();
    // console.log(seatId);
    

    // let seatName=seatId?.split('_')[2];
    // seatName=seatName?.replace(':','')
    // console.log(`Selected seat name is,${seatName}`);
    

    let detailSeat=await page.locator(`//p[text()='F11']`).textContent()
    console.log(`Displayed seatname in Booking summary is: ${detailSeat}`);

    //await expect(seatName).toBe(detailSeat)
    
    
    
      //15. Verify the total ticket amount is displayed.
    let grandPrice=await page.locator(`//div[@class="grand-prices"]`).innerText();
    await expect(await page.locator(`//div[@class='grand-prices']`)).toContainText(grandPrice)
    console.log(`Grand Price is ${grandPrice}`)

    
    await expect(page).toHaveTitle(`PVR Cinemas`);
    //await page.getByRole(`button`,{name:"Proceed"}).click()

    
    



    

 

})