(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0840":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("588f"),i={data:function(){return{}},computed:{getHeight:function(){var t={height:"calc(".concat(this.innerHeight,"px - 50px)")};return t}},methods:{toUserInfo:function(){uni.navigateTo({url:"../userdetails/userdetails"})},logOut:function(){this.$refs.uToast.show({type:"loading",message:"加载中...",title:"正在加载"}),(0,a.logOut)(this.token,(function(t){uni.removeStorageSync("user_token"),uni.reLaunch({url:"../login/login"})}))}}};e.default=i},"25d8":function(t,e,n){"use strict";n.r(e);var a=n("4ac5"),i=n("25de");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("963a");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"4ebe7776",null,!1,a["a"],o);e["default"]=c.exports},"25de":function(t,e,n){"use strict";n.r(e);var a=n("0840"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"4ac5":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("c7ea").default,uAvatar:n("2881").default,uCellGroup:n("7a39").default,uCell:n("a498").default,uToast:n("5c8c").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user",style:t.getHeight},[n("u-navbar",{attrs:{placeholder:!0}},[n("template",{slot:"left"},[n("v-uni-view")],1)],2),n("v-uni-view",{staticClass:"user-head",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUserInfo.apply(void 0,arguments)}}},[n("u-avatar",{attrs:{src:t.getAvataImg,size:"130rpx",mode:"aspectFit",shape:"square"}}),n("v-uni-view",{staticClass:"user-head-content"},[n("v-uni-view",{staticClass:"user-head_name"},[t._v(t._s(t.userInfo.name))]),n("v-uni-view",{staticClass:"user-head_text"},[n("v-uni-view",{staticClass:"user-head_text_acc"},[t._v("账号:"+t._s(t.userInfo.email))]),n("v-uni-view",{staticClass:"iconfont icon-fanhui1"})],1)],1)],1),n("v-uni-view",{staticClass:"user-content"},[n("v-uni-view",{staticClass:"user-content-item"},[n("u-cell-group",[n("u-cell",{attrs:{title:"收藏"}},[n("template",{slot:"icon"},[n("v-uni-text",{staticClass:"iconfont icon-shoucang",staticStyle:{color:"#2979FF","font-size":"18px","margin-right":"10px"}})],1),n("template",{slot:"value"},[n("v-uni-text",{staticClass:"iconfont icon-next"})],1)],2),n("u-cell",{attrs:{title:"表情"}},[n("template",{slot:"icon"},[n("v-uni-text",{staticClass:"iconfont icon-biaoqing-xue",staticStyle:{color:"#ffca0a","font-size":"18px","margin-right":"10px"}})],1),n("template",{slot:"value"},[n("v-uni-text",{staticClass:"iconfont icon-next"})],1)],2),n("u-cell",{attrs:{title:"个性装扮"}},[n("template",{slot:"icon"},[n("v-uni-text",{staticClass:"iconfont icon-zhuangban",staticStyle:{color:"#ff5805","font-size":"18px","margin-right":"10px"}})],1),n("template",{slot:"value"},[n("v-uni-text",{staticClass:"iconfont icon-next"})],1)],2)],1)],1),n("v-uni-view",{staticClass:"user-content-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logOut.apply(void 0,arguments)}}},[n("u-cell-group",[n("u-cell",{attrs:{title:"退出登录"}},[n("template",{slot:"icon"},[n("v-uni-text",{staticClass:"iconfont icon-tuichu",staticStyle:{color:"#11a4ff","font-size":"18px","margin-right":"10px"}})],1)],2)],1)],1)],1),n("u-toast",{ref:"uToast"})],1)},s=[]},"54c0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.user[data-v-4ebe7776]{background-color:#f3f3f3;height:100vh}.user-head[data-v-4ebe7776]{display:flex;padding:0 20px 20px 20px;background-color:#fff;box-sizing:border-box}.user-head .user-head-content[data-v-4ebe7776]{display:flex;flex-direction:column;justify-content:space-around;width:calc(100% - 20px - %?130?% - 10px);margin-left:10px}.user-head .user-head-content .user-head_name[data-v-4ebe7776]{width:100%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-head .user-head-content .user-head_text[data-v-4ebe7776]{display:flex;align-items:center}.user-head .user-head-content .user-head_text .user-head_text_acc[data-v-4ebe7776]{font-size:14px;color:#999;flex:1;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.user-head .user-head-content .user-head_text .iconfont[data-v-4ebe7776]{font-size:12px;color:#999}.user-content .user-content-item[data-v-4ebe7776]{background-color:#fff;margin-top:20px}.user-content .user-content-item .iconfont[data-v-4ebe7776]{color:#999}',""]),t.exports=e},"963a":function(t,e,n){"use strict";var a=n("c3d5"),i=n.n(a);i.a},c3d5:function(t,e,n){var a=n("54c0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("442a97e6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);