const sendEmaild = require("../../dao/emailSever");

// 发送邮箱 参数 email 用户注册时的邮箱

function round() {
    let str = "";
    for (let i = 0; i < 6; i++) {
        let round = Math.floor(Math.random() * 10);
        str += round;
    }

    return Number(str);
}

// 200为成功 500为失败
function email(req, res, map, subject = "欢迎注册狗子通讯") {
    let data = req.body;
    //邮箱地址
    // 随机生成6位注册码
    let rounds = round();

    sendEmaild({
        to: data.email,
        subject: subject,
        html: `<div>你的注册码为:${rounds}</div>有效期为10分钟`,
        callback: () => {
            // 保存
            map.set(data.email, rounds);
            map.timeToRemove(data.email, 60 * 1000 * 10);
            res.send(JSON.stringify({ code: 200, msg: `发送成功` }));
        },
        error: err => {
            res.send(JSON.stringify({ code: 500, msg: `发送失败请重试` }));
        }
    });
}



module.exports = email;