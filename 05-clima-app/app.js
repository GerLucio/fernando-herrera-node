const colors = require('colors');
const {
  inquirerPrincipalMenu,
  inquirerPause,
  readInput,
  inquirerCitiesMenu,
} = require('./helpers/inquirer');
const { showCityWeather } = require('./helpers/messages');
const Search = require('./models/Search');
require('dotenv').config();

const main = async () => {
  let opt = '';
  search = new Search();

  do {
    console.clear();
    opt = await inquirerPrincipalMenu();
    console.log(`   You selected: ${opt}\n`);

    switch (opt) {
      case 1:
        const value = await readInput('Type a city name: ');
        await search.getCity(value);

        if (!search.coincidences.length) {
          console.log(`\n   No cities found\n`.red);
          break;
        }

        search.currentCity = await inquirerCitiesMenu(
          search.coincidences,
          value
        );
        if (search.currentCity === 0) {
          break;
        }

        search.currentWeather = await search.getCityWeather();
        showCityWeather(search.currentCity, search.currentWeather);
        break;
      case 2:
        search.showCitiesHistory();
        break;
    }

    await inquirerPause();
  } while (opt !== 3);
};

main();
