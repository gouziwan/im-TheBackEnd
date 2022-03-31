// 修改用户的性别
const mysql = require("../../module/Mysql");
const jwt = require("../../dao/jwt");

// 修改用户的性别 参数 sex 0 未知 1男 2女

const ParameterError = {
    code: 500,
    msg: "参数错误"
};

const TokenError = {
    code: 500,
    msg: "token失效"
};

const Success = {
    code: 200,
    msg: "修改成功"
};

const UploadError = {
    code: 500,
    msg: "修改失败"
};

function upSex(req, res) {
    let { token, sex } = req.body;

    let arr = [0, 1, 2];

    if (sex == undefined || arr.indexOf(Number(sex)) == -1) {
        res.send(ParameterError);
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
                        sex
                    },
                    options: {
                        userid
                    }
                })
                .then(
                    val => {
                        res.send(Success);
                    },
                    e => {
                        res.send(UploadError);
                    }
                );
        },
        e => {
            res.send(TokenError);
        }
    );
}

module.exports = upSex;