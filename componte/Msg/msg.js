const mysql = require("../../module/Mysql");

// 获取消息数据
// 用户id
async function getAllMssageDate(req, res) {
    const { id } = req.body;

    let sql = `SELECT * FROM msg WHERE userId = '${id}' || friendId = '${id}' `

    try {
        let reuslt = await mysql.linkMySql(sql);

        let map = {}

        reuslt.forEach(el => {
            const { userId, friendId } = el;

            let sid = userId == id ? friendId : userId;

            let val = map[sid]

            val = val instanceof Array ? val : []
            el.msg = el.msg.toString()
            val.push(el);
            map[sid] = val
        })

        let keys = Object.keys(map);

        let user;

        if (keys.length > 0) {
            user = await mysql.query({
                name: 'schemauser',
                data: {
                    userid: keys
                },
                options: ['userid', 'name', 'imgurl']
            })
        }
        res.send(JSON.stringify({ code: 200, data: map, user }))
    } catch (e) {
        return res.send({ code: 500, msg: '失败' })
    }
}


module.exports = getAllMssageDate