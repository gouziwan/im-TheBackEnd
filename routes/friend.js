const express = require("express");
const pinyin = require("pinyin");
const router = express.Router();
const addFriend = require("../componte/friend/addFrued")
const friendApplihistory = require("../componte/friend/friendApplihistory")
const agreeWithFriendRequests = require("../componte/friend/agreeWithFriendRequests")
const getNewFriendPrompts = require("../componte/friend/getNewFriendPrompts")
const rejectAddFriend = require("../componte/friend/rejectAddFriend")
const deleteFriendRecord = require("../componte/friend/deleteFriendRecord")
const getAddFriend = require("../componte/friend/getAddFriend")
const isFriend = require("../componte/friend/isFriend")

// 发送好友申请
router.post("/addFriend", addFriend);
// 查找好友的申请记录
router.post("/friendApplihistory", friendApplihistory);
// 同意好友申请
router.post("/agreeWithFriendRequests", agreeWithFriendRequests);
// 获取好友新的申请消息 就相当于查看有没有没有读取好友消息 新添加一个好友 但是我没有点开新朋友他就会出一个提示消息 小红点
router.post("/getNewFriendPrompts", getNewFriendPrompts);
// 拒绝好友的申请
router.post("/rejectAddFriend", rejectAddFriend);
// 删除记录
router.post("/deleteFriendRecord", deleteFriendRecord)
    // 获取已添加的好友
router.post("/getAddFriend", getAddFriend);
// 是否为好友 0为好友 1不为好友
router.post("/isFriend", isFriend)
module.exports = router;