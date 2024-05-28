const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // "reporter": "cypress-multi-reporters",
  // "reporterOptions": {
  //   "reporterEnabled": ["mochawesome"],
  //   "mochawesomeReporterOptions": {
  //     "reportDir": "cypress/results",
  //     "overwrite": false,
  //     "html": false,
  //     "json": true
  //   }
  // }
  reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: false,
      json: true,
    }
});
