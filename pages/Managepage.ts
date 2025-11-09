import { Page } from "@playwright/test";
import { Basepage } from "./basepage";
import { checkbox } from "./checkboxxes";
import { Loginpage } from "./loginpage";
import { Securepage } from "./securepage";

export default class Managepage {

    constructor(private readonly page: Page) {
        
    }

    private _loginpage?: Loginpage;
    private _securepage?: Securepage;
    private _checkbox?: checkbox;
    
    get loginpage(): Loginpage {
        if (!this._loginpage) {
            this._loginpage = new Loginpage(this.page);
        }
        return this._loginpage;
    }

    get securepage(): Securepage {
        return this._securepage ??= new Securepage(this.page);
    }

    get checkbox(): checkbox {
        return this._checkbox ??= new checkbox(this.page);
    }

}