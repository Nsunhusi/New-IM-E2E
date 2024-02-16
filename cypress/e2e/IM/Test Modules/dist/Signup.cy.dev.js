"use strict";

var _Signup = require("../Pages/Signup.js");

var registerPage = new _Signup.Registerpage();
describe('Automating Signup flow', function () {
  it.only('should Register with valid credentials', function () {
    cy.visit('https://insidemarket-web-frontend.vercel.app/register');
    registerPage.Firstname("CYPRESS");
    registerPage.Lastname('REX');
    registerPage.Email('namisow335@fkcod.com');
    registerPage.Phonenumber(11527287052);
    registerPage.Password('Test12345');
    registerPage.ConfirmPassword('Test12345');
    registerPage.Terms_Condition();
    registerPage.ClickRegister(); // cy.wait(6000)

    cy.url('https://insidemarket-web-frontend.vercel.app/register').should('contain', '/authentication'); // cy.wait(6000)

    cy.get('.shadow-none').type(111111);
    cy.get('.buttons_siteBtn__3Nyc_').click(); // cy.wait(6000)
  });
});