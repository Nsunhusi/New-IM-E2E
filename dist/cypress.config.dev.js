"use strict";

// const { defineConfig } = require("cypress");
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       projectId: '9svb9o'
//     }
//   }
// })
var _require = require("cypress"),
    defineConfig = _require.defineConfig;

module.exports = defineConfig({
  projectId: "56fqyf",
  e2e: {
    setupNodeEvents: function setupNodeEvents(on, config) {// implement node event listeners here
    }
  }
});