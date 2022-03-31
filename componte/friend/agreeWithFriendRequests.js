const { allCorrect, execute } = require('../../module/R');
const mysql = require("../../module/Mysql")
const uuid = require("uuid")
    /**
     * 
     * @param {*} friendid 好友id
     * @param {*} userid 用户id
     */
const err = [
    { code: 500, msg: '参数错误' },
    { code: 500, msg: '请勿重复添加好友' }
]

function agreeWithFriendRequests(req, res) {
    const { userid, friendid } = req.body;

    const funArr = [
        () => allCorrect(userid, friendid),
        // 查询有没用重复添加
        async() => {
            let result = await mysql.query({
                name: 'friend',
                data: {
                    userid,
                    friendid
                }
            })
            return result.length === 0
        }
    ]

    execute(...funArr).then(async v => {
        let result = await update(userid, friendid);
        // 更新成功
        let insertSuccess = false;

        if (result && result.changedRows == 1) {
            insertSuccess = await insert(userid, friendid);
            sendFriendMessage(userid, friendid)
        }

        insertSuccess == false ? res.send({ code: 500, msg: `添加好友失败` }) : res.send({ code: 200, msg: `添加好友成功` })

    }, i => {
        res.send(err[i])
    })
}


async function update(userid, friendid) {
    let data = {
        name: 'friendapplay',
        update: {
            friend_state: '0'
        },
        options: {
            userid,
            friendid
        }
    }

    let res;

    try {
        res = await mysql.modifyThe(data);
    } catch (err) {
        res = false
    }

    return res
}
// 同意添加好友
async function insert(userid, friendid) {
    let data = {
        name: 'friend',
        options: {
            id: uuid.v1().replace(/-|[a-zA-Z]/g, "") + Date.now(),
            userid,
            friendid,
            friends_time: Date.now(),
        }
    }

    let res;

    try {
        res = mysql.insert(data)
    } catch {
        res = false
    }
    return res
}

// 添加好友成功 发送第一句消息你好啊  发消息 就是 userId 就是同意那个  friendId就是主动加我的那个好友 所有是 friendId 发消息给 userId 所有 userId 就等于friendId
async function sendFriendMessage(userid, friendid) {
    let data = {
        name: 'schemauser',
        data: {
            userid,
        }
    }

    let name = await mysql.query(data)

    name = name[0] && name[0].name

    // 0 文字 1图片链接 2音频
    //  static 是消息是否 已读 1未读 0已读
    let msgDate = {
        name: 'msg',
        options: {
            id: uuid.v1().replace(/-|[a-zA-Z]/g, "") + Date.now(),
            userid,
            friendid,
            msg: '你好啊！我叫' + name,
            types: 1,
            send_tiem: Date.now(),
            static: 1
        }
    }

    let res = await mysql.insert(msgDate);
}

module.exports = agreeWithFriendRequests