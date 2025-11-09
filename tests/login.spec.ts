import { test,expect } from "@playwright/test";
import Managepage from "../pages/Managepage";

test.describe('Login Tests', () => {
    let mp: Managepage;

    test.beforeEach(async ({ page }) => {

            mp = new Managepage(page);

    });

    test('Should login with valid credentials', async()=>{
            await mp.loginpage.openLoginPage();

            await mp.loginpage.userLogin('tomsmith','SuperSecretPassword!');

            await mp.securepage.assertSucess();
            await mp.securepage.logout();
    });

    

});

