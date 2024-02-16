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
    cy.contains('Post Ads').click();
    cy.wait(7000);
  });
  it.only('Adding a product', function () {
    cy.wait(4000);
    cy.get('[style="position: absolute; top: 145px; bottom: 0px; right: 20px; display: flex; align-items: center;"] > .buttons_siteBtn__3Nyc_').click();
    cy.contains('Add Product').click();
    cy.get('[style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); width: 100%; height: auto; padding: 9px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(9);
    cy.get('[style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); width: auto; height: auto; padding: 9px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(8);
    cy.get('[type="file"]').eq(3).selectFile('/Users/mac/IM PROJECT/cypress/e2e/IM/Test Modules/inside market appss (1).png', {
      force: true
    });
    cy.wait(4000);
    cy.get(':nth-child(5) > .col-span-12 > [style="width: 100px; opacity: 1; color: white; border-width: 0px; border-color: rgb(51, 51, 51); font-size: 13px; padding: 8px 16px; background-color: rgb(248, 0, 0);"]').click();
    cy.get('.container > :nth-child(1) > .shadow-none').type("Testing e2e with cypress");
    cy.get(':nth-child(1) > .container > :nth-child(2) > .shadow-none').type("Testing new e2e with cypress");
    cy.get(':nth-child(1) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); padding: 8px 0px 8px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(2);
    cy.get(':nth-child(2) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); padding: 8px 0px 8px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(1);
    cy.get(':nth-child(3) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); padding: 8px 0px 8px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(1);
    cy.get(':nth-child(4) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); padding: 8px 0px 8px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(2);
    cy.get(':nth-child(5) > :nth-child(1) > [style="border-radius: 7px; border: 1px solid rgb(230, 230, 230); padding: 8px 0px 8px 11px;"] > [style="display: flex; align-items: center; width: 100%;"] > div > select').select(1);
    cy.get('.currency-input').type(5000);
    cy.get('[type="checkbox"]').check();
    cy.get('span > .buttons_siteBtn__3Nyc_').click();
    cy.get('.MuiBox-root > .df > .buttons_siteBtn__3Nyc_').click();
    cy.get('[style="opacity: 1; display: inline-flex; align-items: center; justify-content: center; border-radius: 30px; padding: 9px; background-color: rgb(220, 220, 220); color: rgb(248, 0, 0); text-align: center; width: 100%; height: auto; font-size: 0.8em; border: none;"]').click();
  });
  afterEach(function () {
    cy.contains('Go to Shop').click();
    cy.wait(4000);
    cy.get('[style="position: absolute; top: 145px; bottom: 0px; right: 20px; display: flex; align-items: center;"] > .buttons_siteBtn__3Nyc_').click();
  });
});