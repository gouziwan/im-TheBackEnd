const Token = require("../../dao/jwt");

const mysql = require("../../module/Mysql");

// 修改 个性签名 参数 有     sig 个性签名 token
function signature(req, res) {
    let data = req.body;

    if (data.sig == undefined || data.token == undefined) {
        res.send(JSON.stringify({ code: 500, msg: "参数错误" }));
        return;
    }

    Token.verifyToken(data.token).then(
        v => {
            let id = v.id;

            mysql
                .modifyThe({
                    name: "schemauser",
                    update: {
                        exp: data.sig
                    },
                    options: {
                        userid: id
                    }
                })
                .then(
                    val => {
                        res.send(JSON.stringify({ code: 200, msg: "修改成功" }));
                    },
                    e => {
                        res.send(JSON.stringify({ code: 500, msg: "修改失败用户不存在" }));
                    }
                );
        },
        e => {
            res.send(JSON.stringify({ code: 500, msg: "token已失效" }));
        }
    );
}

module.exports = signature;