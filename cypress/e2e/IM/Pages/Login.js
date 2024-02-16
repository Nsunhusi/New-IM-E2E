export class Loginpage{

    Enteremail(email){

        cy.get('#email').type(email)

    }

    EnterPassword(Password){

        cy.get('#password').type(Password)

    }

    ShowPassword(){

        cy.get('small > span').click()

    }

    RememberPassword(){

        cy.get('.w-5').click()

    }

    Clicklogin(){

        cy.get('.buttons_siteBtn__3Nyc_').click()

    }

}