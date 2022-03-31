const mysql = require('../../module/Mysql');

async function deleteExpression(req, res) {
    let { arr } = req.body;

    console.log(typeof arr)

    if (!(arr instanceof Array)) return res.send({ code: 500, msg: `` });

    let sql = `delete from expression where `

    for (let i = 0; i < arr.length; i++) {
        let id = arr[i]

        sql += `id = '${id}'`

        if (i < arr.length - 1) {
            sql += ' || '
        }
    }

    let result = await mysql.linkMySql(sql);

    res.send({ code: 200 })
}

module.exports = deleteExpression;