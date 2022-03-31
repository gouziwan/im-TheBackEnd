const mysql = require("../../module/Mysql");
const Token = require("../../dao/jwt");

// 参数需要 token       name 修改后的名字
function changingName(req, res) {
    let data = req.body;

    if (data.token == undefined || data.name == undefined) {
        return res.send(JSON.stringify({ code: 500, msg: "参数错误" }));
    }

    data.name = data.name.trim();

    if (data.name.length > 18 || data.name.length < 1) {
        return res.send(JSON.stringify({ code: 500, msg: "名字至少1-18个字符" }));
    }

    Token.verifyToken(data.token).then(
        v => {
            // 修改数据
            mysql
                .modifyThe({
                    name: `schemauser`,
                    update: {
                        name: data.name
                    },
                    options: {
                        userid: v.id
                    }
                })
                .then(
                    val => {
                        try {
                            if (val.protocol41) {
                                setTimeout(() => {
                                    res.send(JSON.stringify({ code: 200, msg: `修改成功` }));
                                }, 3000);
                            }
                        } catch (e) {
                            res.send(JSON.stringify({ code: 500, msg: `修改失败` }));
                        }
                    },
                    e => {
                        res.send(JSON.stringify({ code: 500, msg: `修改失败` }));
                    }
                );
        },
        e => {
            res.send(JSON.stringify({ code: 500, msg: `token失效` }));
        }
    );
}

module.exports = changingName;