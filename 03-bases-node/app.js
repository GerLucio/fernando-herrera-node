const { multiplicationTable } = require("./helpers/multiplica");
const argv = require("./config/yargs");
const colors = require('colors');

console.clear();

const { base, to, list } = argv;

multiplicationTable(base, to, list)
  .then((fileName) => {
    console.log(`Generated file: ${fileName}`.green);
  })
  .catch((err) => console.error(err.red));
