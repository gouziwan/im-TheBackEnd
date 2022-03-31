const mysql = require('../../module/Mysql');
const uuid = require("uuid")
const pathVideo = "./public/video"
const { whetherEmpty } = require("../../module/R")
const fs = require("fs")


// 上传视频的参数 需要 friendId  userId videoHeight videoWidth
function video(req, res) {
    const { friendId, userId, height, width } = req.body;

    if (whetherEmpty(friendId, userId, height, width, req.file)) return res.send({ code: 500, msg: '参数错误' })

    let { path, mimetype, filename } = req.file

    mimetype = mimetype.split('/')[1];

    let newPath = `${pathVideo}/${filename}.${mimetype}`;

    let loadPath = `./dest/${filename}`

    fs.rename(loadPath, newPath, async(err) => {
        if (err) {
            return
        }

        let data = {
            id: uuid.v4(),
            friendId,
            userId,
            msg: JSON.stringify({
                msg: `${filename}.${mimetype}`,
                height,
                width
            }),
            types: 3,
            send_tiem: Date.now(),
            static: 1
        }

        try {
            await mysql.insert({
                name: 'msg',
                options: data
            })
            res.send({ code: 200, data })
        } catch (e) {
            res.send({ code: 500, msg: '上传失败' })
        }
    })
}





module.exports = video