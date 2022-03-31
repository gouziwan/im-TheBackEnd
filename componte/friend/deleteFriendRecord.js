const mysql = require('../../module/Mysql')
    // 参数 id 
async function deleteFriendRecord(req, res) {
    const { id } = req.body;

    if (id == undefined) {
        res.send({ code: 500, msg: '参数错误' });
        return
    }

    try {
        let result = await mysql.deleteRecord({
            name: 'friendapplay',
            options: {
                id
            }
        })

        res.send({ code: 200, msg: '删除成功' })
    } catch (err) {
        res.send({ code: 500, msg: '未知错误' })
    }

}
module.exports = deleteFriendRecord