const mysql = require("../../module/Mysql");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");

// 用户注册 参数 account账号 password: 密码   email 邮箱 code 验证码
async function userRegister(req, res, map) {
    // 判断邮箱是否注册
    let data = req.body;

    let result = await mysql.query({
        name: "schemauser",
        data: {
            email: data.email
        }
    });

    if (result.length > 0) {
        res.send(JSON.stringify({ code: 500, msg: "邮箱已被注册" }));
        return;
    }

    result = await mysql.query({
        name: "schemauser",
        data: {
            account: data.account
        }
    });

    if (result.length > 0) {
        res.send(JSON.stringify({ code: 500, msg: "账号已被注册" }));
        return;
    }

    // 判断邮箱验证码不能为空
    if (data.vcode == undefined) {
        res.send(JSON.stringify({ code: 500, msg: "验证码不能为空" }));
        return;
    }

    if (!(map.get(data.email) == data.vcode)) {
        res.send(JSON.stringify({ code: 500, msg: "验证码错误" }));
        return;
    }
    // 如果验证码成功就移除
    map.delete(data.email);

    // 加密密码
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password + "", salt);

    mysql
        .insert({
            name: "schemauser",
            options: {
                password: data.password,
                account: data.account,
                email: data.email,
                userid: uuid.v1().replace(/-|[a-zA-Z]/g, "") + Date.now(),
                name: "schemauser11111",
                register_tiem: Date.now() + ""
            }
        })
        .then(
            value => {
                console.log(value);
                if (value.affectedRows == 1) {
                    res.send(JSON.stringify({ code: 200, msg: `注册成功` }));
                } else {
                    res.send(JSON.stringify({ code: 500, msg: `注册失败` }));
                }
            },
            err => {
                res.send(JSON.stringify({ code: 500, msg: `注册失败` }));
            }
        );
}

module.exports = userRegister;