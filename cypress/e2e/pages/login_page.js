export class LoginPage{

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'
    invalid_credentials = '.oxd-alert-content > .oxd-text'
  

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLoginButton(){
        cy.get(this.login_button).click()
    }

    assertInvalidCredentialsMessage(assertion, text){
        cy.get(this.invalid_credentials).should(assertion, text)
    }


}