it ('Google search', () => {

    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type('sinoptik.bg {Enter}')
    cy.get('.DiqQLb > :nth-child(3) > .Hg3NO > .lv7K9c > .sjVJQd').click()
    cy.get('[style="margin-top:0;font-weight:bold;font-size:13px;color:#202124"]').click()
    cy.wait(5000)
    cy.get('.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
        .should('contain', 'Sinoptik.bg - Времето в София')
})