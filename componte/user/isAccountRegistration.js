const mysql = require("../../module/Mysql");

// 参数 account  用户的账号
function isAccountRegistration(req, res) {
    let data = req.body;

    mysql
        .query({
            name: "schemauser",
            data: {
                account: data.account
            }
        })
        .then(
            value => {
                let data = {};
                if (value.length == 0) {
                    data.code = 200;
                } else {
                    data.code = 500;
                    data.msg = "账号已被注册";
                }

                console.log(data)
                res.send(JSON.stringify(data));
            },
            err => {
                res.send(JSON.stringify({ code: 0, msg: `参数错误` }));
            }
        );
}

module.exports = isAccountRegistration;