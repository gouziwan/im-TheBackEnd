const mysql = require("../../module/Mysql");
const verifyEmailAccounts = require("./verifyEmailAccounts")
const bcrypt = require("bcryptjs");

async function upAccountPasswrold(req, res, upPasswrodMap) {
    let { account, email, code, password } = req.body

    if (account == undefined || email == undefined || code == undefined || password == undefined) return res.send({ code: 500, msg: '参数错误' });

    let boolean = await verifyEmailAccounts(account, email);

    if (!boolean) return res.send({ code: 200, data: boolean, msg: `邮箱与绑定的账号不一致` });

    let emailCode = upPasswrodMap.get(email);

    console.log(code)


    if (emailCode != code) return res.send({ code: 200, data: false, msg: `验证码不正确` })



    const salt = bcrypt.genSaltSync(10);

    const value = bcrypt.hashSync(password + "", salt);

    await mysql.modifyThe({
        name: 'schemauser',
        update: {
            password: value
        },
        options: {
            account,
            email
        }
    })

    upPasswrodMap.delete(email)

    res.send({ code: 200, data: true, msg: `修改成功` })


}



module.exports = upAccountPasswrold