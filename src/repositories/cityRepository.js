const axios = require("axios");
const config = require("../config");
const logger = require("../loaders/logger");

class CityRepository {
  constructor() {
    this.limit = 10;
    this.language = "es";
    this.basePath = config.mapbox.pathBase;
    this.apiKey = config.mapbox.api_key;
  }

  async findCities(city) {
    try {
      const instance = axios.create({
        baseURL: `${this.basePath}${city}.json`,
        params: {
          access_token: this.apiKey,
          limit: this.limit,
          language: this.language,
        },
      });

      const response = await instance.get();

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
