const inquirer = require('inquirer');
const colors = require('colors');
const { showTask } = require('./messages');

const principalMenuOptions = [
  {
    type: 'list',
    name: 'option',
    message: colors.bold('Task app').green,
    choices: [
      {
        value: 1,
        name: `${'1.'.cyan} Create task`,
      },
      {
        value: 2,
        name: `${'2.'.cyan} Show all tasks`,
      },
      {
        value: 3,
        name: `${'3.'.cyan} Show completed tasks`,
      },
      {
        value: 4,
        name: `${'4.'.cyan} Show pending tasks`,
      },
      {
        value: 5,
        name: `${'5.'.cyan} Mark task as completed`,
      },
      {
        value: 6,
        name: `${'6.'.cyan} Delete task`,
      },
      {
        value: 7,
        name: `${'7.'.cyan} Exit`,
      },
    ],
  },
];

const inquirerPrincipalMenu = async () => {
  const { option } = await inquirer.prompt(principalMenuOptions);
  return option;
};

const inquirerPause = async () => {
  const pause = [
    {
      type: 'input',
      name: 'pause',
      message: `Press ${'ENTER'.green} to continue`,
    },
  ];
  await inquirer.prompt(pause);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (!value?.length) {
          return 'Type a value';
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);

  return description;
};

const inquirerListMenu = async (list) => {
  const choices = list.map((task, index) => {
    return {
      value: task,
      name: showTask(task, index),
    };
  });

  choices.unshift({
    value: 0,
    name: `   ${colors.cyan(0)}. Exit`,
  });

  const listMenuOptions = [
    {
      type: 'list',
      name: 'task',
      message: colors.bold('Which task do you want to delete?').green,
      choices,
    },
  ];

  const { task } = await inquirer.prompt(listMenuOptions);
  return task;
};

const inquirerConfirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

const inquirerCheckboxMenu = async (list) => {
  const choices = list.map((task, index) => {
    return {
      value: task,
      name: showTask(task, index),
      checked: !!task.completed,
    };
  });

  const checkboxMenuOptions = [
    {
      type: 'checkbox',
      name: 'tasks',
      message: colors.bold('Select tasks that you want to mark as selected')
        .green,
      choices,
    },
  ];

  const { tasks } = await inquirer.prompt(checkboxMenuOptions);
  return tasks;
};

module.exports = {
  inquirerPrincipalMenu,
  inquirerPause,
  readInput,
  inquirerListMenu,
  inquirerConfirm,
  inquirerCheckboxMenu,
};
