import { expect } from "@playwright/test";
import { Basepage } from "./basepage";


 export class Securepage extends Basepage{

    async assertSucess(){
        const banner = this.page.locator('#flash');
        await this.basePageexpectvisible(banner);
        await expect(banner).toContainText('You logged into a secure area!');
    }


    async logout(){
        await this.page.getByRole('link', {name: 'Logout'}).click();
        await this.page.waitForURL('/login');
    }

 }