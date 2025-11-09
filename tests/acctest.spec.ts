import { expect, Expect,test } from "@playwright/test";
import { AxeBuilder } from '@axe-core/playwright';

test.only('General acessibility test', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    const assscanResults = await new AxeBuilder({page}).analyze();
    console.log('Scan resutls', assscanResults);
    expect(assscanResults.violations.length, 'Access violations found').toBe(0);
})