const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      default: 1,
      demandOption: false,
      describe: "Base to generate multiply table",
    },
    t: {
      alias: "to",
      type: "number",
      default: 10,
      demandOption: false,
      describe: "Multiply table is going to be from 0 to to",
    },
    l: {
      alias: "list",
      type: "boolean",
      default: false,
      demandOption: false,
      describe: "Table list should be shown in console",
    },
  })
  .check((argv) => {
    const { base, to } = argv;

    if (isNaN(base)) {
      throw "Argument base should be a number".red;
    }
    if (isNaN(to)) {
      throw "Argument to should be a number".red;
    }
    if (to < 1 && to > 1000) {
      throw "Argument to should be greater tan 1 and less than 1000".red;
    }
    return true;
  }).argv;

module.exports = argv;
