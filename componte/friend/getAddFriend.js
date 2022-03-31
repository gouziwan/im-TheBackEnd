const mysql = require("../../module/Mysql");
// 这个是把汉字转换成字母
const pinyin = require('pinyin');


// 只需要用户 userid 
async function getAddFriend(req, res) {
    const { userid } = req.body;
    if (userid == undefined) return res.send({ code: 500, msg: `参数不能为空` });

    let pinyinArr = {}

    let userArr = []

    let result = await mysql.query({
        name: 'friend',
        data: {
            userid,
            friendid: userid
        },
        ans: 'or'
    });
    // 获取到了好友表 但是还是搜索用户表
    result.forEach(el => {
        let vid = el.userid == userid ? el.friendid : el.userid
        userArr.push(vid);
    })

    if (userArr.length >= 1) {
        let userResult = await mysql.query({
            name: 'schemauser',
            data: {
                userid: userArr,
            },
            ane: 'or',
            options: ['userid', 'name', 'imgurl', "phone", "exp", "account", "sex"]
        })


        // // 获取到了好友用户的信息
        userResult.forEach(el => {
            // 取出名字 然后获取首字母
            let name = el.name

            let pin = pinyin(name)[0][0][0]

            let req = /[a-z]/;

            let key = req.test(pin) ? pin : '#'

            if (!(pinyinArr[key] instanceof Array)) {
                pinyinArr[key] = []
            }

            pinyinArr[key].push(el)
        })
    }
    res.send({ code: 200, pinyinArr })
}



module.exports = getAddFriend;