const mysql = require('../../module/Mysql')


// 参数id
async function rejectAddFriend(req, res) {
    const { id } = req.body

    if (id === undefined) {
        res.send({ code: 500, msg: '参数错误' })
        return
    }
    try {
        let result = await mysql.modifyThe({
            name: 'friendapplay',
            update: {
                friend_state: '2'
            },
            options: {
                id,
                friend_state: '1'
            }
        })
        result.changedRows === 1 ? res.send({ code: 200, msg: '已拒绝' }) : res.send({ code: 500, msg: '请勿重复申请' })
    } catch (err) {
        res.send({ code: 500, msg: '未知错误！！！' })
    }
}

module.exports = rejectAddFriend