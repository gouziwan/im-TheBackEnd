const mysql = require("../../module/Mysql");
const jwt = require("../../dao/jwt");

const ParameterError = {
    code: 500,
    msg: "手机不正确"
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

// 参数 phone token
function mobilePhone(req, res) {
    const { phone, token } = req.body;
    // 验证手机号
    let rel = /^1[3456789]\d{9}$/;

    if (!rel.test(phone)) {
        res.send(JSON.stringify(ParameterError));
        return;
    }

    if (token == undefined) {
        return res.send(JSON.stringify(TokenError));
    }

    jwt.verifyToken(token).then(
        v => {
            const userid = v.id;

            mysql
                .modifyThe({
                    name: "schemauser",
                    update: {
                        phone
                    },
                    options: {
                        userid
                    }
                })
                .then(
                    () => {
                        res.send(JSON.stringify(Success));
                    },
                    () => {
                        res.send(JSON.stringify(UploadError));
                    }
                );
        },
        () => {
            res.send(JSON.stringify(TokenError));
        }
    );
}

module.exports = mobilePhone;