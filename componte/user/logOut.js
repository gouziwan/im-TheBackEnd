// 退出登录
const mysql = require("../../module/Mysql");
const jwt = require("../../dao/jwt");

// 传token
function logout(req, res) {
    let { token } = req.body;

    jwt.parsing(token).then(val => {
        const { id } = val;
        mysql.modifyThe({
            name: 'schemauser',
            update: {
                token: jwt.secret + Date.now() + Math.floor(Math.random() * Date.now()) / Math.floor(Math.random() * 10)
            },
            options: {
                userid: id
            }
        })

        res.send({ code: 200, msg: '退出成功' })


    }, () => {
        res.send({ code: 500, msg: 'token失效' });
    })
}


module.exports = logout;