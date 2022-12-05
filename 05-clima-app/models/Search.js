const axios = require('axios');
const { saveHistory, readHistory } = require('../helpers/file');
const { showCity } = require('../helpers/messages');

class Search {
  currentCity = null;
  currentWeather = null;

  coincidences = [];
  citiesHistory = [];

  constructor() {
    this.citiesHistory = readHistory();
  }

  openWeatherParams(coordinates) {
    return {
      lat: coordinates[1],
      lon: coordinates[0],
      appid: process.env.OPEN_WEATHER_KEY,
      units: 'metric',
      lang: 'en',
    };
  }

  get mapboxParams() {
    return {
      proximity: 'ip',
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      types: 'place,country,region',
    };
  }

  get headers() {
    return {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'application/json',
    };
  }

  async getCity(text = '') {
    try {
      const axiosInstance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`,
        params: this.mapboxParams,
        headers: this.headers,
      });

      const res = await axiosInstance.get();
      const coincidences = res?.data?.features || [];

      this.coincidences = coincidences.map((item) => {
        const { id, place_name, center } = item;
        return {
          id,
          name: place_name,
          coordinates: [...center],
        };
      });
    } catch (error) {
      this.coincidences = [];
    }
  }

  async getCityWeather() {
    try {
      const { coordinates } = this.currentCity;
      const axiosInstance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: this.openWeatherParams(coordinates),
        headers: this.headers,
      });
      const res = await axiosInstance.get();
      this.saveSearch();

      return res.data;
    } catch (error) {
      return null;
    }
  }

  saveSearch() {
    const existing = this.citiesHistory.find(
      (item) => item.id === this.currentCity.id
    );

    if (existing) {
      return;
    }

    this.citiesHistory.unshift(this.currentCity);
    this.citiesHistory = this.citiesHistory.slice(0, 10);
    saveHistory(this.citiesHistory);
  }

  showCitiesHistory() {
    console.log(`\n   City weather history \n`.yellow);
    if (!this.citiesHistory.length) {
      console.log(`\n   History is empty \n`.red);
      return;
    }

    this.citiesHistory.forEach((city, index) => {
      console.log(showCity(city, index));
    });

    console.log('\n');
  }
}

module.exports = Search;
