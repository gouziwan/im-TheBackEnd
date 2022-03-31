const mysql = require("../../module/Mysql");
const { whetherEmpty } = require("../../module/R")

// 获取好友最新的提示信息没有读取的 1为已读 0 为未读
async function getNewFriendPrompts(req, res) {
    const { userid } = req.body;

    if (whetherEmpty(userid)) return res.send({ code: 500, msg: '参数错误' })

    let sql = {
        name: 'friendapplay',
        data: {
            friendid: userid,
            ready: 0
        }
    }

    let result = await mysql.query(sql);

    let len = result.length;

    res.send({ code: 200, msg: '成功', newMsg: len })
}


module.exports = getNewFriendPrompts