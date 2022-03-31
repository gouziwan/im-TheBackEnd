const http = require('http');
const { Server } = require("socket.io");
const jwt = require('../dao/jwt');
const SaveMsg = require('../componte/Msg/SaveMsg')
const { socketPort, host } = require('../config');

const server = http.createServer();

const socket = new Server(server, { cors: true });

function createServerSocket() {
    const map = new Map();

    socket.on('connect', (socket) => {
        let set = socket.roomsc
        setUserLoginInfo(socket, map)
        getMsg(socket, map)
        disconnect(socket, map)
    });

    server.listen(socketPort, host, () => {
        console.log(`socket服务器已启动  => http://${host}:${socketPort}`);
    })
}

// 客户端链接聊天信息的时候 就会上传当前的id跟用户的信息
// 上传token 就知道你有没有被修改密码了
function setUserLoginInfo(socket, map) {
    socket.on('validation', async(token, id) => {
        try {
            // 如果验证成功则会返回用户的信息否则就会报错
            let result = await jwt.verifyToken(token);
            map.set(result.id, id)

            socket.emit('isValidation', 'ok')
        } catch (e) {
            socket.emit('isValidation', '登录已经过期');
        }
    })
}
// 获取聊天信息
function getMsg(socket, map) {
    socket.on('sendMsg', async(val) => {
        console.log(val)
        const { friendId, types } = val
        // 得到信息生成一个编号
        // 这里是处理图片
        // 客户端通过监听这个id 来获取 对方是否收到信息  服务端 也是通过监听；
        const id = map.get(friendId);
        if (types == 2 || types == 3) {
            socket.to(id).emit('getMsg', val);
            return
        }

        // 不需要再存储一遍了
        let reuslt = await SaveMsg(val)
        if (reuslt instanceof Object) {
            socket.to(id).emit('getMsg', reuslt);
        }
    })

}
// 失去连接
function disconnect(socket, map) {
    socket.on("disconnect", (reason) => {

    });
}

createServerSocket()

module.exports = socket