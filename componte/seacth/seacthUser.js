const mysql = require("../../module/Mysql");


/*
    搜索用户 需要传入    用户的 id 和 搜索的内容 content
   userid 用户id  必填
   content 搜索内容 必填
   list 返回内容数量 选填   默认返回10条  最少 10条 最多100条
   offset 返回内容偏移量  默认0


*/

function searchUser(req, res) {
    let { userid, content, list, offset } = req.body;
    console.log(req.body);

    if (userid == undefined || content == undefined) {
        return res.send(JSON.stringify({ code: 500, msg: '参数错误' }));
    }



    // 初始化数据
    if (isNaN(list) || list * 1 > 100) {
        list = 10;

    }

    if (isNaN(offset)) {
        offset = 0;
    }


    let userSql = ''

    // 如果 搜索内容  可以转成数字的 话 就搜索 账号信息
    if (isNaN(content) == false && content.length >= 5) {
        userSql = `select userid,name,account,sex,phone,exp,imgurl from schemauser where account='${content}'`
    } else {
        userSql = `select userid,name,account,sex,phone,exp,imgurl from schemauser where name like '%${content}%'`
    }

    mysql.linkMySql(userSql).then(async v => {
        // 如果有数据返回
        let arr = v.slice(offset, offset + list);
        // 默认有一页
        let nextPage = true
            // 如果截取的数据小于 list 那说明没有下一页了 大于就有下页
        if (arr.length < list || v.length == list) {
            nextPage = false
        }

        let result = await mysql.query({
            name: `friendapplay`,
            data: {
                userid: userid,
                friend_state: '0'
            }
        })

        // // 好友的 id 等于用户的id 那 他们就是好友    1添加了好友 0没有添加好友 2就是自己本人
        arr.forEach(r => {
                r.isFriend = result.filter(el => el.friendId === r.userid)[0] instanceof Object || userid == r.userid ? 1 : 0
            })
            // 是否有添加过好友的要排除在外边
        res.send(JSON.stringify({ code: 200, data: arr, nextPage }))
    }, e => {
        res.send(JSON.stringify({ code: 500, msg: '查找失败' }));
    })


}

module.exports = searchUser