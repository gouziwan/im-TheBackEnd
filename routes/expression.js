const express = require("express");
const router = express.Router();
const getExpression = require("../componte/exprssion/getExprssion");
const uploadExpression = require("../componte/exprssion/uploadExpression")
const multer = require("multer");
const upload = multer({ dest: "./dest", fileFilter });
const deleteExpression = require("../componte/exprssion/deleteExpression")

function fileFilter(req, file, cd) {
    const { mimetype } = file;
    const rex = /^\bimage\b\/(png|jpeg|jpg|gif)$/;
    if (rex.test(mimetype)) {
        cd(null, true);
        return;
    }
    cd(null, false);
}


// 获取表情包列表
router.post("/getExpression", getExpression);
// 上传表情包
router.post("/uploadExpression", upload.single("expression"), uploadExpression);
// 移除表情包
router.post("/deleteExpression", deleteExpression);

module.exports = router;