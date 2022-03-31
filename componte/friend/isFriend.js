const { whetherEmpty } = require('../../module/R')
const mysql = require('../../module/Mysql')
async function isFriend(req, res) {
    const { userid, friendid } = req.body

    if (whetherEmpty(userid, friendid)) return res.send({ code: 500, msg: '参数错误' })

    let sql = `select * from friend where (userid=${userid} and friendid=${friendid}) or (userid=${friendid} and friendid=${userid})`

    let result = await mysql.linkMySql(sql);

    let boolean = result.length == 0 ? false : true

    res.send({ code: 200, isFriend: boolean })
}


module.exports = isFriend