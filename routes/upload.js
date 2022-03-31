var express = require("express");
var router = express.Router();
var uploadImgRoute = require("../componte/uploadFile/uploadImg");
var uploadMsgImgRoute = require("../componte/uploadFile/uploadMsgImg")
var uploadVideoRoute = require("../componte/uploadFile/uploadVideo")

const multer = require("multer");
const upload = multer({ dest: "./dest", fileFilter });

function fileFilter(req, file, cd) {

    const { mimetype } = file;
    const rex = /^\bimage\b\/(png|jpeg|jpg|gif)$/;

    const videoRex = /^\bvideo\b\/(mp4|mov|m4v|3gp|avi)$/

    if (rex.test(mimetype) || videoRex.test(mimetype)) {
        cd(null, true);
        return;
    }
    cd(null, false);
}

//修改用户的头像文件上传
router.post("/uploadImg", upload.single("fileimg"), uploadImgRoute);
// 聊天上传的图片
router.post("/uploadMsgImg", upload.single("fileimg"), uploadMsgImgRoute);

// 处理上传聊天的视频

router.post("/uploadVideo", upload.single("video"), uploadVideoRoute);

module.exports = router;