const express = require("express");
const Success = require("../handlers/successHandler");
const { findCities } = require("../services/cityService");
const {
  weatherWithCoordinates,
  weatherByCityId,
} = require("../services/weatherService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const weatherByCoord = async (req, res, next) => {
  try {
    const { lon, lat } = req.query;
    const weather = await weatherWithCoordinates(lon, lat);
    const success = new Success(weather);

    res.json(success);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const weatherCityId = async (req, res, next) => {
  try {
    const { city, id } = req.params;
    const weather = await weatherByCityId(city, id);
    const success = new Success(weather);

    res.json(success);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  weatherByCoord,
  weatherCityId,
};
