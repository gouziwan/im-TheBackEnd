const nodemailer = require("nodemailer");

function sendEmail({ to, subject, html, callback, error }) {
    const transport = nodemailer.createTransport({
        service: "qq",
        secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
        auth: {
            user: "943781166@qq.com",
            // 这里密码不是qq密码，是你设置的smtp授权码
            pass: "prdmaypucrcobdcj"
        }
    });

    let mailOptions = {
        from: '"943781166@qq.com', // 发件人地址
        to: to, //接收者列表
        subject: subject, // Subject line
        // 发送text或者html格式
        html // html body
    };

    transport.sendMail(mailOptions, (e, info) => {
        if (e) {
            error(e);
            return;
        }
        callback();
    });
}

module.exports = sendEmail;