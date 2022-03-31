const mysql = require('../../module/Mysql');
// 获取用户的表情包列表
// userid
async function getExpression(req, res) {
    const { userid } = req.body;

    if (userid === undefined) return res.send({ code: 500, msg: '用户id不能为空' });


    let reuslt = await mysql.query({
        name: 'expression',
        data: {
            userid: userid
        }
    })


    res.send({ code: 200, data: reuslt })
}


module.exports = getExpression;