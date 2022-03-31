const mysql = require("../../module/Mysql");
const { execute, allCorrect } = require("../../module/R");
const uuid = require("uuid");

/*
    // 添加好友
    参数个参数  userid friendid 好友id  可选参数 添加备注
*/
const errArr = [{
        code: 500,
        msg: '参数不能为空'
    },
    {
        code: 500,
        msg: '不能重复添加好友'
    },
    {
        code: 500,
        msg: '申请已发送,不能重复申请'
    }, {
        code: 200,
        msg: '申请成功'
    },
    {
        code: 500,
        msg: '申请失败'
    }
];


function addFriend(req, res) {
    const { userid, friendid, content } = req.body;
    // 查找添加好友

    // console.log(userid, friendid)
    // 添加首先还要查数据库  列如 用户添加了 好友 但是没有通过 这个时候直接就响应请问重复申请
    let arr = [
        () => {
            return allCorrect(userid, friendid)
        },
        // 查找是否添加过好友
        async() => {
            let data = {
                name: `friend`,
                data: {
                    userid,
                    friendid,
                }
            }
            let res = await mysql.query(data);

            return res.length === 0 ? true : false;
        },
        // 是否有过好友记录但是没有同意
        async() => {
            let data = {
                name: `friendapplay`,
                data: {
                    userid,
                    friendid,
                }
            }
            let res = await mysql.query(data)
            return res.filter(el => el.friend_state == 1).length === 0 ? true : false
        }
    ];
    execute(...arr).then(async() => {
        let result = await sendFriendRequest(userid, friendid, content);

        result == true ? res.send(JSON.stringify(errArr[3])) : res.send(JSON.stringify(errArr[4]))

    }, (index) => {
        res.send(JSON.stringify(errArr[index]));
    })
}

function sendFriendRequest(userid, friendid, content = '') {
    return new Promise(resolve => {
        mysql.insert({
            name: 'friendapplay',
            options: {
                id: uuid.v1().replace(/-|[a-zA-Z]/g, "") + Date.now(),
                userid,
                friendid,
                friend_state: '1',
                create_tiem: Date.now(),
                content
            }
        }).then(() => {
            resolve(true);
        }, (e) => {
            resolve(false);
        })
    })
}



module.exports = addFriend;