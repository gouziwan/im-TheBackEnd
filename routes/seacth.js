var express = require("express");
var router = express.Router();

const searchUser = require("../componte/seacth/seacthUser")

router.post('/seacthUser', searchUser);



module.exports = router;