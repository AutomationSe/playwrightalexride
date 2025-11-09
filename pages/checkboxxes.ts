import { Basepage } from "./basepage";
import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";


export class checkbox extends Basepage{

    protected readonly firstbox: Locator;
    protected readonly secondbox: Locator;
    protected readonly form: Locator;

    constructor(page: Page){
        super(page)
        this.firstbox = this.page.getByRole('checkbox').nth(0);
        this.secondbox = this.page.getByRole('checkbox').nth(1);
        this.form = this.page.locator('#checkboxes');
    }

    async opencheckboxpage(){
        await this.gotoURL('/checkboxes');
        await this.basePageexpectvisible(this.form);
    }  

    async checkfirstcheckbox(){
        await this.firstbox.check();

    }

    async uncheckfirstcheckbox(){
        await this.firstbox.uncheck();
    }

    async checksecondcheckbox(){
        await this.secondbox.check();

    }

    async unchecksecondcheckbox(){
        await this.secondbox.uncheck();
    }
    
    async assertcheckboxstate(firstexpected: boolean, secondexpected: boolean){
        const firststate = await this.firstbox.isChecked();
        const secondstate = await this.secondbox.isChecked();
    }

}