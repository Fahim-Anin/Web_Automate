const puppeteer = require('puppeteer');

(async () => {
   
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://account.eagle3dstreaming.com/');

    
    await page.waitForSelector('#signup-email'); 
    await page.type('#signup-email', 'fahim@eagle3dstreaming.com');  
    await page.type('#signup-password', 'User@123');  
    await page.click('#signup-form button[type="submit"]');  

    await page.waitForFunction(() => alert('Sign up successful. Please log in.'));
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    
    await page.type('#login-email', 'fahim@eagle3dstreaming.com');  
    await page.type('#login-password', 'User@123');  
    await page.click('#login-form button[type="submit"]');  

    
    await page.waitForFunction(() => alert('Login successful. Redirecting...'));
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await browser.close();
})();
