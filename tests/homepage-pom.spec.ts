import {test,expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';

test('Verify Get Started navigation',async({page})=>{
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.clickGetStarted();
    await expect(page).toHaveURL('/getting-started');
});