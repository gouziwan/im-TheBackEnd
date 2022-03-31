var express = require("express");
var router = express.Router();
var downloadImgRouter = require("../componte/downloadFile/downloadImg");

router.get("/downImg", downloadImgRouter);

module.exports = router;