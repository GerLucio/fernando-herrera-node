const fs = require("fs");
const colors = require("colors");

const multiplicationTable = async (myNumber = 1, to = 10, list = false) => {
  try {
    let title = `Multiply table: number ${myNumber}, ${to} times\n`;
    let outputString = "";
    let outputStringColors = "";

    if (list) {
      console.log(colors.bold(title.rainbow));
    }

    Array.from({ length: to }).forEach((element, index) => {
      const result = myNumber * (index + 1);
      const operation = `${myNumber} x ${index + 1} x ${result}\n`;
      const operationColors = `${myNumber} ${"x".cyan} ${index + 1} ${
        "=".magenta
      } ${colors.bold(result)}\n`;

      outputString += operation;
      outputStringColors += operationColors;
    });

    const fileName = `./storage/table${myNumber}.txt`;

    if (list) {
      console.log(outputStringColors);
    }

    fs.writeFileSync(fileName, outputString);

    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  multiplicationTable,
};
