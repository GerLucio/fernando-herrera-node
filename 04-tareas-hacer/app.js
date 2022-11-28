const colors = require('colors');
const { saveList, readList } = require('./helpers/file');
const {
  inquirerPrincipalMenu,
  inquirerPause,
  readInput,
  inquirerListMenu,
  inquirerConfirm,
  inquirerCheckboxMenu,
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();
  tasks.list = readList();

  do {
    console.clear();
    opt = await inquirerPrincipalMenu();
    console.log(`   You selected: ${opt}\n`);

    switch (opt) {
      case 1:
        const desc = await readInput('Task description');
        tasks.createTask(desc);
        break;
      case 2:
        tasks.showTasks();
        break;
      case 3:
        tasks.showTasks('completed');
        break;
      case 4:
        tasks.showTasks('pending');
        break;
      case 5:
        const selectedTasks = await inquirerCheckboxMenu(tasks.list);
        tasks.changeTasksStatus(selectedTasks);
        break;
      case 6:
        const task = await inquirerListMenu(tasks.list);

        if (task === 0) {
          break;
        }

        const { description, id } = task;
        const message = `\n   Do you want to delete task: ${
          colors.bold(description).green
        }\n`;

        if (await inquirerConfirm(message)) {
          tasks.deleteTask(id);
        }
        break;
      default:
        break;
    }

    saveList(tasks.list);

    await inquirerPause();
  } while (opt !== 7);
};

main();
