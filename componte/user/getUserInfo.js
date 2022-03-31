// 这个是通过id查找用户的信息
//有一个通过 token 是判断用户是否登录
const mysql = require('../../module/Mysql');
const { whetherEmpty } = require('../../module/R')

async function getUserInfo(req, res) {
    const { userid } = req.body;

    if (whetherEmpty(userid)) return res.send({ code: 500, msg: '参数错误' })

    let result = await mysql.query({
        name: "schemauser",
        data: {
            userid
        },
        options: [
            "userid",
            "name",
            "account",
            "email",
            "sex",
            "birth",
            "phone",
            "register_tiem",
            "exp",
            "imgurl"
        ]
    })

    res.send({ code: 200, data: result[0] == undefined ? [] : result[0] })
}

module.exports = getUserInfo