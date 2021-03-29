const axios = require("axios");
const config = require("../config");
const logger = require("../loaders/logger");

class WeatherRepository {
  constructor() {
    this.unit = "metric";
    this.lang = "es";
    this.basePath = config.open_weather.pathBase;
    this.appid = config.open_weather.api_key;
  }

  async weatherByCoordinates(lon, lat) {
    try {
      const instance = axios.create({
        baseURL: `${this.basePath}`,
        params: {
          appid: this.appid,
          units: this.unit,
          lang: this.lang,
          lon,
          lat,
        },
      });

      const response = await instance.get();

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = WeatherRepository;
