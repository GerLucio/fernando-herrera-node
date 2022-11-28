const colors = require('colors');

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log(colors.bold('Task app\n').green);

    console.log(`${'1.'.cyan} Create task`);
    console.log(`${'2.'.cyan} Show all tasks`);
    console.log(`${'3.'.cyan} Show completed tasks`);
    console.log(`${'4.'.cyan} Show pending tasks`);
    console.log(`${'5.'.cyan} Mark task as completed`);
    console.log(`${'6.'.cyan} Delete task`);
    console.log(`${'0.'.cyan} Exit\n`);

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question('Select an option: ', (opt) => {
      resolve(opt);
      readLine.close();
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${'ENTER'.green} to select an option`, () => {
      readline.close();
      resolve();
    });
  });
};

const showTask = (task, index = 0) => {
  const { description, completed } = task;
  const status = completed
    ? `...COMPLETED AT ${new Date(completed).toISOString()}`.green
    : '...PENDING'.red;

  return `   ${colors.cyan(index + 1)}. ${colors.bold(description)} ${status}`;
};

module.exports = { showMenu, pause, showTask };
