var express = require("express");
var router = express.Router();
var getlocation = require("../componte/city/getlocation");
var SeacthCity = require("../componte/city/seachCity")

router.get('/getlocation', getlocation);

router.get('/seachCity', SeacthCity)

module.exports = router;