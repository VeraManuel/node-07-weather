const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  port: process.env.PORT,
  api: {
    prefix: "/api/v1",
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
  swagger: {
    path: "/documentation",
  },
  mapbox: {
    pathBase: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    api_key: process.env.MAPBOX_API_KEY,
  },
  open_weather: {
    pathBase: "https://api.openweathermap.org/data/2.5/weather",
    api_key: process.env.OPEN_WEATHER_API_KEY,
  },
};
