const mysql = require('../../module/Mysql')
const uuid = require('uuid')

// userId friendId msg types 1 send_tiem static
async function SaveMsg(value) {
    const { userId, friendId, msg, types = 1, send_tiem = Date.now(), static = 1 } = value
    let data = {
        id: uuid.v1().replace(/-|[a-zA-Z]/g, "") + Date.now(),
        userId,
        friendId,
        msg,
        types,
        send_tiem,
        static
    }
    try {
        result = await mysql.insert({
            name: 'msg',
            options: data
        })
    } catch (e) {
        return false
    }

    return data
}

module.exports = SaveMsg