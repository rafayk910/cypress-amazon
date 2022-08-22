const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

        reporterOptions:{
reportFilename:"AmazonWebAutomationCypress",
overwrite:false,
code:false,
    },
    
    reporter:'mochawesome',

   // pageLoadTimeout:30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
