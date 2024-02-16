"use strict";

var _Login = require("../Pages/Login.js");

var loginpage = new _Login.Loginpage();
describe('InsideMarket New user flow', function () {
  before(function () {
    // Visit the website before each test
    cy.viewport(1280, 800);
    cy.visit('https://insidemarket-web-frontend.vercel.app/login');
  });
  beforeEach(function () {
    // Click on login button
    // cy.contains('Login').click()
    loginpage.Enteremail('namisow335@fkcod.com'); // cy.wait(3000)

    loginpage.EnterPassword('Test12345'); // cy.wait(3000)

    loginpage.ShowPassword();
    loginpage.RememberPassword();
    loginpage.Clicklogin();
  });
  it('Create a shop', function () {
    cy.get('#basic-button').click(); // cy.wait(4000)

    cy.get('.MuiList-root > :nth-child(3)').click();
    cy.get('.hidden > :nth-child(1) > .buttons_siteBtn__3Nyc_').click();
    cy.get(':nth-child(1) > .hidden > :nth-child(1) > :nth-child(2) > :nth-child(1) > .shadow-none').type("rtyuiokjhgfhhhhygggtgtgtgtg");
    cy.get(':nth-child(1) > .hidden > :nth-child(1) > :nth-child(2) > [style="position: relative;"] > .shadow-none').type("sdfghjklkjhggguyguygguygug"); // cy.get(':nth-child(1) > .hidden > :nth-child(1) > :nth-child(2) > :nth-child(3) > .shadow-none > .grid > .col-span-11 > .MuiInputBase-root > #phone').type("08077776512")

    cy.wait(4000);
    cy.get(':nth-child(1) > .hidden > :nth-child(1) > [style="padding-top: 88px;"] > .justify-center > .col-span-7 > .gap-4 > :nth-child(1) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); width: 100%; height: auto; padding: 12px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(2); // cy.wait(5000)

    cy.get(':nth-child(1) > .hidden > :nth-child(1) > [style="padding-top: 88px;"] > .justify-center > .col-span-7 > .gap-4 > :nth-child(2) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); width: auto; height: auto; padding: 12px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(2);
    cy.get(':nth-child(1) > .hidden > :nth-child(1) > [style="padding-top: 88px;"] > .justify-center > .col-span-7 > .gap-4 > .col-span-12 > :nth-child(1) > .bg-white').type('Ikeja,Nigeria').type("{enter}"); // cy.wait(5000)
    // cy.get(':nth-child(1) > .hidden > :nth-child(1) > [style="padding-top: 88px;"] > .justify-center > .col-span-7 > .gap-4 > .col-span-12 > :nth-child(2) > .col-span-8 > :nth-child(1) > :nth-child(1) > .shadow-none').clear().type('10:50 {enter}')
    // cy.get(':nth-child(1) > .hidden > :nth-child(1) > [style="padding-top: 88px;"] > .justify-center > .col-span-7 > .gap-4 > .col-span-12 > :nth-child(2) > .col-span-8 > :nth-child(2) > :nth-child(1) > .shadow-none').clear().type('11:45')

    cy.get(':nth-child(1) > .hidden > :nth-child(1) > [style="padding-top: 50px;"] > .container > .col-span-7 > :nth-child(2) > .shadow-none > .grid > .col-span-11 > .MuiInputBase-root > #whatsapp').type('09099998764'); // cy.wait(5000)

    cy.contains('Next').click();
    cy.wait(8000);
    cy.contains('Finish').click();
    cy.wait(5000);
    cy.contains('View shop').click();
  });
}); // afterEach(function(){
//     cy.get(':nth-child(2) > [style="overflow: hidden;"] > :nth-child(1) > [style="background-color: white;"] > .MuiPaper-root > .MuiContainer-root > .MuiToolbar-root > .MuiTypography-root > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="Insidemarket"]').click()
//     })