const { Router } = require("express");
const { weatherByCoord, weatherCityId } = require("../controllers/weather");

const router = Router();

router.get("/", weatherByCoord);
router.get("/:city/:id", weatherCityId);

module.exports = router;
