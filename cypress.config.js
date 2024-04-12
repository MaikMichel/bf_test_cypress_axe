const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9080/ords/r/a11y_tasks/tasks',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message);
          return null;
        },
      }
      )
    },
    defaultCommandTimeout:10000
  },
});
