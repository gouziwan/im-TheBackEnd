const mysql = require("../../module/Mysql");
const fs = require("fs");
const jwt = require("../../dao/jwt");
const imgPath = "./public/images/";

// 需要参数 上传 的文件 但是需要 content-type 为 multipart/form-data token
function uploadImg(req, res) {
    if (req.file == undefined) {
        res.send(JSON.stringify({ code: 500, msg: "文件类型错误" }));
        return;
    }


    const token = req.body.token;

    if (token == undefined) {
        res.send(JSON.stringify({ code: 500, msg: "用户不存在" }));
        return;
    }

    const { filename, destination, originalname, mimetype } = req.file;
    const loadPath = destination + "/" + filename;
    const imgType = mimetype.replace("image/", "");
    const name = filename + "." + imgType;
    const newPath = imgPath + name;

    jwt.verifyToken(token).then(
        v => {
            const userid = v.id;
            fs.rename(loadPath, newPath, err => {
                // 删除原来的文件
                if (err) {
                    return res.send(JSON.stringify({ code: 500, message: "服务器错误" }));
                }
                upAvatar(name, userid).then(
                    v => {
                        res.send(
                            JSON.stringify({
                                code: 200,
                                msg: "头像修改成功",
                                imgurl: name
                            })
                        );
                    },
                    e => {
                        res.send(
                            JSON.stringify({
                                code: 500,
                                msg: "头像修改失败"
                            })
                        );
                    }
                );
            });
        },
        e => {
            res.send(JSON.stringify({ code: 500, msg: "用户不存在" }));
        }
    );
}

// 修改头像
function upAvatar(name, userid) {
    return mysql.modifyThe({
        name: "schemauser",
        update: {
            imgurl: name
        },
        options: {
            userid
        }
    });
}

module.exports = uploadImg;