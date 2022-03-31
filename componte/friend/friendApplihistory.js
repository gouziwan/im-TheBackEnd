// 查找好友的申请记录
const { allCorrect, execute } = require('../../module/R');
const mysql = require('../../module/Mysql')
    /**
     * 
     * @param {* userid} 用户id  
     * @param {*} 查找用户好友申请记录 默认查找全部  0 是查找 已同意的记录 1是查找申请中 2是查找拒绝
     * 
     */
function friendApplihistory(req, res) {
    const { userid, condition } = req.body;
    const funArr = [
        () => {
            return allCorrect(userid)
        }
    ]
    execute(...funArr).then(async v => {
        let val = [0, 1, 2];

        let options = {}

        if (val.indexOf(condition * 1) !== -1) {
            options.friend_state = condition
        }

        let result = await query(userid, options);

        result !== false ? res.send({ code: 200, data: result }) : res.send({ code: 500, msg: `搜索失败` })
    }, (e) => {
        res.send({ code: 500, msg: `参数错误` })
    })
}

async function query(userid, options) {
    let res;
    let data = {
        name: 'friendapplay',
        data: {...options, userid },
    }

    let datas = {
        name: 'friendapplay',
        data: {...options, friendid: userid }
    }



    try {
        res = await mysql.query(data);
        let result = await mysql.query(datas);

        let num = res.push(...result);

        if (num.length !== 0) {
            let friendArr = [];
            // 这里的map 对应的作用是遍历取出来的时候记录数据的下标 key 是id 然后value 数组的下标
            let map = new Map();

            res.forEach((el, index) => {
                let id = el.userid == userid ? el.friendid : el.userid;
                friendArr.push(id);
                map.set(id, index);
            })

            // 查表
            let userResult = await mysql.query({
                name: 'schemauser',
                data: {
                    userid: friendArr
                },
                options: ['name', 'userid', "imgurl"],
            })

            userResult.forEach(el => {
                let id = el.userid;
                let index = map.get(id);
                res[index].friendInfo = el;
            })
        }

    } catch (err) {
        console.log(err)
        res = false
    }
    return res
}




module.exports = friendApplihistory