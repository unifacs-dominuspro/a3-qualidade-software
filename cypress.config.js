const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    NODE_PORT: 3333,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
