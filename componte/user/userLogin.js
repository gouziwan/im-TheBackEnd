const mysql = require("../../module/Mysql");
const Token = require("../../dao/jwt");
const bcrypt = require("bcryptjs");

// 用户不存在
let userExist = {
    code: 500,
    msg: "用户不存在"
};

let passwrodError = {
    code: 500,
    msg: "密码错误"
};

// 先判断 account password
function userLogin(req, res) {
    let data = req.body;

    if (data.account == undefined || data.password == undefined)
        return res.send(JSON.stringify({ code: 500, msg: "参数错误" }));

    // 然后判断 是注册时账号的还是邮箱登录
    const rex = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

    let val = {};

    if (rex.test(data.account)) {
        // 邮箱登录
        val.email = data.account;
    } else {
        // 注册的时候输入的账号登录
        val.account = data.account;
    }

    // 然后进数据库查找是否有这个账号在
    mysql
        .query({
            name: "schemauser",
            data: val
        })
        .then(
            async value => {
                if (value.length <= 0) {
                    res.send(JSON.stringify(userExist));
                } else {
                    let result = await verifyUser(value[0], data);
                    res.send(result);
                }
            },
            reject => {
                res.send(JSON.stringify(userExist));
            }
        );
}

// 如果用户存在就会执行这个函数

function verifyUser(value, data) {
    // 取出数据库的密码跟传入的密码验证
    return new Promise(resolve => {
        let boolean = bcrypt.compareSync(data.password, value.password);

        // 如果为true 则密码正确  false 密码错误
        if (boolean) {
            // 生成Token
            let token = Token.createToken({ id: value.userid });
            // 遍历他除了密码其他都返回
            let keys = Object.keys(value);
            let val = {};
            for (let item of keys) {
                if (item !== "password") {
                    val[item] = value[item];
                }
            }
            //在数据库中保存toke
            mysql
                .modifyThe({
                    name: "schemauser",
                    update: {
                        token
                    },
                    options: {
                        userid: value.userid
                    }
                })
                .then(() => {
                    resolve(JSON.stringify({ code: 200, data: val, token }));
                });
        } else {
            resolve(JSON.stringify(passwrodError));
        }
    });
}

module.exports = userLogin;