// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       projectId: '9svb9o'
//     }
//   }
// })

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "56fqyf",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
