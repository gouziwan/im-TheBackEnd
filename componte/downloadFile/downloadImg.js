// 这个接口主要解决的是浏览器跨域的问题
const img = "./public/images/";

const fs = require("fs");

// get请求 name 就是img图片名字
function downloadImg(req, res) {
    let imgName = req.query.name;
    if (imgName == undefined || imgName == "") {
        res.send({ code: 500, msg: "图片参数错误" });
        return;
    }

    fs.readFile(img + imgName, err => {
        if (err) {
            res.send(JSON.stringify({ code: 500, msg: "下载图片失败" }));
            return;
        }
        res.download(img + imgName);
    });
}

module.exports = downloadImg;