const mysql = require("../../module/Mysql");
const Token = require("../../dao/jwt");

const tokenError = {
    code: 500,
    msg: "token失效"
};

// 通过token值获取 用户的信息 参数 token
function userInfo(req, res) {
    let token = req.body.token;

    if (token == undefined) return res.send(JSON.stringify(tokenError));

    Token.verifyToken(token).then(
        value => {
            mysql
                .query({
                    name: "schemauser",
                    data: {
                        userid: value.id
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
                        "imgurl",
                        "token"
                    ]
                })
                .then(
                    v => {
                        if (v.length > 0) {
                            res.send(JSON.stringify({ code: 200, data: v[0] }));
                        } else {
                            res.send(JSON.stringify(tokenError));
                        }
                    },
                    e => {
                        res.send(JSON.stringify(tokenError));
                    }
                );
        },
        e => {
            res.send(JSON.stringify(tokenError));
        }
    );
}

module.exports = userInfo;