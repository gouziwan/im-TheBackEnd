const mysql = require('../../module/Mysql')
const fs = require('fs');
const _path = "./public/images"
const { whetherEmpty } = require("../../module/R");
const uuid = require("uuid");


function uploadMsgImg(req, res) {
    const { friendId, userId } = req.body
    if (whetherEmpty(friendId, userId, req.file)) return res.send({ code: 500, msg: '参数不能为空' });

    let { filename, mimetype } = req.file

    mimetype = mimetype.split("/")[1]

    let loadPath = `./dest/${filename}`
    let newPath = `${_path}/${filename}.${mimetype}`


    fs.rename(loadPath, newPath, (err) => {
        if (err) {
            console.log(err)
            return null
        }
        // 如果保存成功了
        let data = {
            id: uuid.v4(),
            userId,
            friendId,
            msg: `${filename}.${mimetype}`,
            types: 2,
            send_tiem: Date.now(),
            static: 1,
        }

        mysql.insert({
            name: `msg`,
            options: data
        }).then(val => {
            res.send({ code: 200, data })
        })

    })
}




module.exports = uploadMsgImg