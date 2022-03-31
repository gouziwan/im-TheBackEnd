const mysql = require("../../module/Mysql");

const jwt = require("../../dao/jwt");

const TokenError = JSON.stringify({ code: 500, msg: "token失效" });

// 接收参数 token 登录字符   birt 这个是 日期格式  数字格式的字符 不是 那种 xxxx年xx月xx日
function upBirthday(req, res) {
    let { token, birt } = req.body;

    if (birt == undefined) {
        res.send(JSON.stringify({ code: 500, msg: "参数错误" }));
        return;
    }

    if (token == undefined) {
        res.send(TokenError);
        return;
    }

    jwt.verifyToken(token).then(
        v => {
            let userid = v.id;

            mysql
                .modifyThe({
                    name: "schemauser",
                    update: {
                        birth: birt
                    },
                    options: {
                        userid
                    }
                })
                .then(
                    s => {
                        res.send(JSON.stringify({ code: 200, msg: "修改成功" }));
                    },
                    e => {
                        res.send(JSON.stringify({ code: 500, msg: "修改失败" }));
                    }
                );
        },
        e => {
            res.send(TokenError);
        }
    );
}

module.exports = upBirthday;