import { Selector } from 'testcafe';

fixture`Getting Started`.page`https://beta.deepthought.education/login`;

test('Valid Credentials', async t => {
     await t
     //Test successful login with valid credentials.
     .typeText(Selector('#username'),'uditkumargupta2507@gmail.com')
     .typeText(Selector('#password'),'Test@123')
     .click(Selector('.btn')) 
     .takeScreenshot();
     await t

     //On successful login, validate that the user is redirected to the dashboard screen.
     .expect(Selector('H5').withExactText('Welcome to DeepThought').exists).ok
})
test('inValid Credentials', async t => {
    await t
    //Test unsuccessful login attempts with invalid credentials.
    .typeText(Selector('#username'),'uditkumargupta2507@gmail.com')
    .typeText(Selector('#password'),'Test123')
    .click(Selector('.btn')) 
    
    await t
    //Validate that appropriate error messages are displayed for invalid login attempts.
    .takeScreenshot()
    .expect(Selector('//*[@id="login-error-notify"]/strong').withExactText('Invalid login credentials').exists).ok

});


