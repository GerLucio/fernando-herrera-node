const inquirer = require('inquirer');
const colors = require('colors');
const { showCity } = require('./messages');

const principalMenuOptions = [
  {
    type: 'list',
    name: 'option',
    message: colors.bold('Weather app').green,
    choices: [
      {
        value: 1,
        name: `${'1.'.cyan} Search City`,
      },
      {
        value: 2,
        name: `${'2.'.cyan} History`,
      },
      {
        value: 3,
        name: `${'3.'.cyan} Exit`,
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
      name: 'value',
      message,
      validate(value) {
        if (!value?.length) {
          return 'Type a value';
        }
        return true;
      },
    },
  ];

  const { value } = await inquirer.prompt(question);

  return value;
};

const inquirerCitiesMenu = async (cities, text) => {
  const choices = cities.map((city, index) => {
    return {
      value: city,
      name: showCity(city, index),
    };
  });

  choices.unshift({
    value: 0,
    name: `  	  ${colors.cyan(0)}. Exit`,
  });

  const citiesMenuOptions = [
    {
      type: 'list',
      name: 'city',
      message: `\n   City coincidences for ${text}:`.cyan,
      choices,
    },
  ];

  const { city } = await inquirer.prompt(citiesMenuOptions);
  return city;
};


module.exports = {
  inquirerPrincipalMenu,
  inquirerPause,
  readInput,
  inquirerCitiesMenu,
};
