export class UserPage{

    dashboard = '.oxd-topbar-header-breadcrumb > .oxd-text'

    assertUserIsLogetIn(assertion, text){
        cy.get(this.dashboard).should(assertion, text)
    }

}