"use strict";

var _Login = require("../Pages/Login.js");

var loginpage = new _Login.Loginpage();
it.only('should log in with valid credentials', function () {
  cy.viewport(1280, 800);
  cy.visit('https://insidemarket-web-frontend.vercel.app/login');
  cy.viewport(1280, 800);
  loginpage.Enteremail('namisow335@fkcod.com');
  loginpage.EnterPassword('Test12345');
  loginpage.ShowPassword();
  cy.wait(3000);
  loginpage.RememberPassword();
  cy.wait(3000);
  loginpage.Clicklogin();
  cy.wait(3000);
  cy.scrollTo('center');
  cy.wait(3000);
  cy.scrollTo('bottom');
  cy.wait(3000);
  cy.scrollTo('top');
  cy.wait(3000);
}); // it('should create a shop', () => {
//   // cy.visit('https://insidemarket-web-frontend.vercel.app')
//   cy.visit('https://insidemarket-web-frontend.vercel.app/login')
//   cy.viewport(1280, 800)
// })
//   // Click on profile button
//   // cy.get('#basic-button').click()