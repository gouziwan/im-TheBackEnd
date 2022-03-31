// 需要传一个邮箱 验证码
const verifyEmailAccounts = require('./verifyEmailAccounts');

async function isCodeCrounted(req, res, upPasswrodMap) {
    let { account, email, code } = req.body

    if (account == undefined || email == undefined || code == undefined) return res.send({ code: 500, msg: '参数错误' });

    let boolean = await verifyEmailAccounts(account, email);


    if (!boolean) return res.send({ code: 200, data: boolean, msg: `邮箱与绑定的账号不一致` });


    let emailCode = upPasswrodMap.get(email);

    emailCode == code ? res.send({ code: 200, data: true, msg: `验证成功` }) : res.send({ code: 200, data: false, msg: `验证码不正确` })
}


module.exports = isCodeCrounted