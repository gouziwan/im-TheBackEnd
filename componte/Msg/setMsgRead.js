const mysql = require('../../module/Mysql');
// 传入 一个 id 数组 arr
async function setMsgRead(req, res) {
    const id = req.body.id;
    let arr;
    try {
        arr = JSON.parse(id);
        if (!(arr instanceof Array)) return res.send({ code: 500, message: `缺少参数` });
    } catch (err) {
        if (!(arr instanceof Array)) return res.send({ code: 500, message: `参数错误` });
    }

    let result = await mysql.modifyTheArr({
        name: 'msg',
        update: {
            static: 0
        },
        options: {
            id: arr
        }
    })

    res.send({ code: 200, msg: '成功' })
}



module.exports = setMsgRead;