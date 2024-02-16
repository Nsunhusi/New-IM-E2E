export class Registerpage{

    Firstname(firstname){

        cy.get('#firstName').type(firstname)


    }

    Lastname(lastname){

        cy.get('#lastName').type(lastname)

    }

    Email(email){

        cy.get('#email').type(email)

    }

    Phonenumber(phonenumber){

        cy.get('#phone').type(phonenumber)

    }

    Password(password){

        cy.get('#password').type(password)

    }

    ConfirmPassword(confirmpassword){
        
        cy.get('#confirm_password').type(confirmpassword)

    }

    Terms_Condition(){

        cy.get('.w-5').click()

    }

    ClickRegister(){

        cy.get('.buttons_siteBtn__3Nyc_').click()

    }

}