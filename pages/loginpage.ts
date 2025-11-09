import { Basepage } from "./basepage";
import { expect } from "@playwright/test";

export class Loginpage extends Basepage {

  async openLoginPage() {
    await this.gotoURL('/login');
  }

  async userLogin(username: string, password: string) {
    // Make sure you have basePageFill defined in Basepage
    await this.basePageFill(this.page.getByLabel('Username').toString(), username);
    await this.basePageFill('#password', password);
    await this.basePageclick("(//button[@type='submit'])[1]");
  }
}
