const mysql = require("../../module/Mysql");

//   email   邮箱地址
function isEmailRegistered(req, res) {
    const data = req.body;

    mysql
        .query({
            name: "schemauser",
            data: {
                email: data.email
            }
        })
        .then(
            value => {
                let data = {};
                if (value.length == 0) {
                    data.code = 200;
                } else {
                    data.code = 500;
                    data.msg = "邮箱已被注册";
                }

                res.send(JSON.stringify(data));
            },
            err => {
                res.send(JSON.stringify({ code: 0, msg: `参数错误` }));
            }
        );
}

module.exports = isEmailRegistered;