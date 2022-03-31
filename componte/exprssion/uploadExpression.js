const mysql = require('../../module/Mysql')
const fs = require("fs");
const imgPath = "./public/images/";
const uuid = require('uuid');

// userid 文件
async function uploadExpression(req, res) {
    const { userid } = req.body;


    let { path, mimetype, filename } = req.file


    mimetype = mimetype.split('/')[1];

    let newPath = `${imgPath}/${filename}.${mimetype}`;

    let loadPath = `./dest/${filename}`

    fs.rename(loadPath, newPath, async(err) => {
        if (err) {
            return
        }

        let data = {
            id: uuid.v4(),
            userid,
            name: `${filename}.${mimetype}`
        }

        let val = await mysql.insert({
            name: 'expression',
            options: data
        })
        res.send({ code: 200, data })
    })
}



module.exports = uploadExpression