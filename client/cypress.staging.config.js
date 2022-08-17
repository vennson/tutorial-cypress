const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    celtics: "Boston Celtics",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://google.com',
  },
});
