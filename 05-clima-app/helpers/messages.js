const colors = require('colors');

const showCity = (city, index) => {
  const number = `  	  ${index + 1}`.yellow;
  const name = colors.bold(city.name);
  return `${number}. ${name}`;
};

const showCityWeather = (city, cityWeather) => {
  const { name } = city;

  if (!cityWeather) {
    console.log(`\n   No weather for ${name} found \n`.red);
    return;
  }

  const { weather, main } = cityWeather;
  const title = colors.bold(
    `\n     Weather in ${name} is ${weather[0].description}\n`
  );
  const temperature =
    `\n     Min: ${main.temp_min}° C    `.red +
    `     Current: ${main.temp}° C    `.green +
    `     Max: ${main.temp_max}° C\n`.cyan;
  console.log(title + temperature);
};

module.exports = { showCity, showCityWeather };
