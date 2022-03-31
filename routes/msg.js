var express = require("express");
var router = express.Router();
var getAllMssageDate = require("../componte/Msg/msg")
var setMsgRead = require("../componte/Msg/setMsgRead")
    /* GET home page. */
router.post("/allmsg", getAllMssageDate);
// 设置消息已读
router.post("/setMsgRead", setMsgRead);

module.exports = router;