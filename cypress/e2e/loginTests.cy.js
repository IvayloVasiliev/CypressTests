import { LoginPage } from "./pages/login_page"
import { UserPage } from "./pages/user_page"

const loginPage = new LoginPage()
const userPage = new UserPage()

describe('Login Tests', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login with valid credentials', () => {   
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton() 
        userPage.assertUserIsLogetIn('contain', 'Dashboard')
    })

    it('Login with invalid username', () => {
    
        loginPage.enterUsername('000')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton() 
        loginPage.assertInvalidCredentialsMessage('contain', 'Invalid credentials')      
    })
})