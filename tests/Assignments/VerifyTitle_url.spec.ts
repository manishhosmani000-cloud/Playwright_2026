// import { chromium,webkit,test } from "@playwright/test"

// test(`Verify RedBus Title`, async() => { 

// const browser = await chromium.launch({channel:"msedge"})
// const context = await browser.newContext()
// const page =  await context.newPage()

// await page.goto(`https://www.redbus.in/`)

// let Redbus_title=await page.title();
// let Redbus_url=await page.url();

// if(Redbus_title==="Bus Booking Online and Train Tickets at Lowest Price - redBus"){
//     console.log(Redbus_title);
//     console.log(Redbus_url);
// }else{
//     console.log("Mismatch Title");
    
// }
// await page.waitForTimeout(3000) 
// })


// test(`Verify Flipkart Title`, async() => { 

// const browser = await webkit.launch({channel:"webkit"})
// const context = await browser.newContext()
// const page =  await context.newPage()

// await page.goto(`https://flipkart.com/`)

// let Flipkart_title=await page.title();
// let Flipart_url=await page.url();


// if(Flipkart_title==="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"){
//     console.log(Flipkart_title);
//     console.log(Flipart_url);
// }else{
//     console.log("Mismatch Title");
    
// }

// await page.waitForTimeout(3000)
// })

import {expect,test } from "@playwright/test"

test(`Verify RedBus Title`, async({page}) => { 


await page.goto(`https://www.redbus.in/`)
let Redbus_title=await page.title();
let Redbus_url=await page.url();
console.log(Redbus_title);
console.log(Redbus_url);
await expect(Redbus_title).toEqual('Bus Booking Online and Train Tickets at Lowest Price - redBus')


})
