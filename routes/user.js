var express = require("express");
var router = express.Router();

const isAccountRegistration = require("../componte/user/isAccountRegistration");
const isEmailRegistration = require("../componte/user/isEmaliRegistation");
const userRegister = require("../componte/user/userRegistation");
const sendEmaild = require("../componte/user/sendEmail");
const userLogin = require("../componte/user/userLogin");
const userInfo = require("../componte/user/userInfo");
const changingName = require("../componte/user/changingName");
const signature = require("../componte/user/signature");
const upSex = require("../componte/user/upSex");
const upBirthday = require("../componte/user/upBirthday");
const upPhone = require("../componte/user/upPhone");
const getUserInfo = require("../componte/user/getUserInfo");
const logout = require("../componte/user/logout");
const isCodeCrounted = require("../componte/user/isCodeCrounted");
const verifyEmailAccounts = require("../componte/user/verifyEmailAccounts");
const upAccountPasswrold = require("../componte/user/upAccountPasswrold");

// 定时移除
Map.prototype.timeToRemove = function(key, item) {
    setTimeout(() => {
        this.delete(key);
    }, item);
};

// map 用户存储验证码的
const map = new Map();

// 存储修改密码的
const upPasswrodMap = new Map();

// 判断用户账号是否被注册
router.post("/accres", isAccountRegistration);
// 判断用户是否注册邮箱
router.post("/email", isEmailRegistration);
// 邮箱注册发送
router.post("/sendEmaild", (req, res) => {
    sendEmaild(req, res, map);
});
/*用户注册*/
router.post("/register", (req, res) => {
    userRegister(req, res, map);
});
//   注册时使用的账号 或者邮箱都可以登录
// 用户登录接口
router.post("/login", userLogin);
// 验证用户是否登录
router.post("/userInfo", userInfo);
// 修改用户的 名字
router.post("/changingName", changingName);
// 修改用户的个性签名
router.post("/signature", signature);
// 修改用户的性别
router.post("/upsex", upSex);
// 修改用户的生日
router.post("/upbirthday", upBirthday);
// 修改用户的手机号
router.post("/upPhone", upPhone);
// 用户
router.post("/getUserInfo", getUserInfo);
// 退出登录
router.post("/logout", logout);
// 修改密码的邮箱发送
router.post("/upSendEmaild", (req, res) => {
    sendEmaild(req, res, upPasswrodMap, `修改密码`);
})

// 验证验证码的是否正确
router.post("/isCodeCrounted", (req, res) => {
    isCodeCrounted(req, res, upPasswrodMap)
})

// 验证 账号跟修改密码的时候邮箱号是否正确
router.post("/verifyEmailAccounts", async(req, res) => {
    let { account, email } = req.body

    if (account == undefined || email == undefined) return res.send({ code: 500, msg: '邮箱账号不能为空' })

    let boolean = await verifyEmailAccounts(account, email)

    let data = {
        code: 200,
        data: boolean,
        msg: boolean == true ? 'ok' : `邮箱与绑定的账号不一致`
    }
    res.send(data)
})


router.post("/upAccountPasswrold", (req, res) => {
    upAccountPasswrold(req, res, upPasswrodMap)
})

module.exports = router;