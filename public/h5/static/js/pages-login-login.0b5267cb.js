(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0cd2":function(t,n,o){var a=o("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.login-title[data-v-b7c34a7c]{margin-right:%?30?%}.login-title-loog[data-v-b7c34a7c]{text-align:center}.login-title-loog .iconfont[data-v-b7c34a7c]{font-size:%?150?%;color:#fbe836}.loogin-text[data-v-b7c34a7c]{padding:0 32px;margin-top:%?30?%}.loogin-text uni-view[data-v-b7c34a7c]{margin-top:10px}.loogin-text .loogin-text-lg[data-v-b7c34a7c]{font-size:%?40?%;font-family:600}.loogin-text .loogin-text-sm[data-v-b7c34a7c]{font-size:%?30?%;color:#999}.login-input[data-v-b7c34a7c]{padding:0 32px;margin-top:20px;box-sizing:border-box}.login-input .login-input-account[data-v-b7c34a7c], .login-input .login-input-pasword[data-v-b7c34a7c]{border-bottom:solid 1px #edecef;padding:%?15?% 20px %?15?% 0;margin-top:10px}.login-input .login-input-pasword[data-v-b7c34a7c]{padding-right:0}.login-input .login-content_input[data-v-b7c34a7c]{position:relative}.login-input .login-content_input .iconfont.icon-shanchu[data-v-b7c34a7c]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:0}.loogin-button[data-v-b7c34a7c]{margin-top:%?50?%;text-align:center}.loogin-button .loogin-button-primary[data-v-b7c34a7c]{width:%?450?%;border-radius:20px;background-color:#fbe836;outline:none;height:%?80?%;font-size:16px;line-height:%?80?%;color:#20212a;box-shadow:0 %?50?% %?35?% %?-33?% rgba(255,228,49,.4)}.loogin-button .loogin-button-primary-hover[data-v-b7c34a7c]{background-color:#fbd40f}.loogin-button .loogin-wangji[data-v-b7c34a7c]{margin-bottom:10px;font-size:14px}',""]),t.exports=n},"1cd7":function(t,n,o){"use strict";o.r(n);var a=o("cfce"),i=o("a5cf");for(var e in i)"default"!==e&&function(t){o.d(n,t,(function(){return i[t]}))}(e);o("d38d");var s,r=o("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"b7c34a7c",null,!1,a["a"],s);n["default"]=c.exports},"239f":function(t,n,o){"use strict";var a=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o("588f"),e=a(o("07ea")),s={type:"default",message:"请输入账号或密码",duration:1500},r={type:"loading",message:"登录中。。。",duration:99999999},c={type:"default",message:""},l={data:function(){return{account:"",password:""}},computed:{isShowClear:function(){return this.account.length>0}},methods:{login:function(){var t=this;this.account.length<=0||this.password.length<=0?this.$refs.Toast.show(s):(this.$refs.Toast.show(r),(0,i.userLogin)({account:this.account,password:this.password},(function(n){t.$refs.Toast.hide(),200==n.data.code?(uni.setStorageSync("user_token",n.data.token),t.$setStorage({key:"user_info",data:n.data.data}),t.$store.state.userInfo=n.data.data,t.getUserAllMssage(),t.initServiceLink(),uni.switchTab({url:"../index/index"})):(c.message=n.data.msg,t.$refs.Toast.show(c))})))},clearValue:function(){this.account=""},toRegister:function(){uni.navigateTo({url:"../register/register"})},getUserAllMssage:function(){var t=this,n=this.userInfo.userid;(0,i.getUserAllMssage)(n,(function(n){var o=n.data,a=o.data,i=o.user,e=o.code;200===e&&(t.$store.state.userChar=a,t.$store.state.userFriend=i)}))},onForgotPassword:function(){uni.navigateTo({url:"../Forgotpassword/ForgotPassword"})}},mixins:[e.default]};n.default=l},a5cf:function(t,n,o){"use strict";o.r(n);var a=o("239f"),i=o.n(a);for(var e in a)"default"!==e&&function(t){o.d(n,t,(function(){return a[t]}))}(e);n["default"]=i.a},b22b:function(t,n,o){var a=o("0cd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("215fc598",a,!0,{sourceMap:!1,shadowMode:!1})},cfce:function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return e})),o.d(n,"a",(function(){return a}));var a={uNavbar:o("c7ea").default,uToast:o("5c8c").default},i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"login",style:t.getViewPortSize},[o("u-navbar",[o("v-uni-view",{attrs:{slot:"left"},slot:"left"}),o("v-uni-view",{attrs:{slot:"right"},slot:"right"},[o("v-uni-view",{staticClass:"login-title",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toRegister.apply(void 0,arguments)}}},[t._v("注册")])],1)],1),o("v-uni-view",{staticClass:"login-title-loog"},[o("v-uni-text",{staticClass:"iconfont icon-dog"})],1),o("v-uni-view",{staticClass:"loogin-text"},[o("v-uni-view",[o("v-uni-text",{staticClass:"loogin-text-lg"},[t._v("登录")])],1),o("v-uni-view",[o("v-uni-text",{staticClass:"loogin-text-sm"},[t._v("您好欢迎来到狗子通讯！！")])],1)],1),o("v-uni-view",{staticClass:"login-input"},[o("v-uni-view",{staticClass:"login-content_input"},[o("v-uni-input",{staticClass:"login-input-account",attrs:{type:"text",placeholder:"请输入账号或者邮箱号"},model:{value:t.account,callback:function(n){t.account=n},expression:"account"}}),o("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.isShowClear,expression:"isShowClear"}],staticClass:"iconfont icon-shanchu",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clearValue.apply(void 0,arguments)}}})],1),o("v-uni-view",[o("v-uni-input",{staticClass:"login-input-pasword",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1)],1),o("v-uni-view",{staticClass:"loogin-button"},[o("v-uni-view",{staticClass:"loogin-wangji",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onForgotPassword.apply(void 0,arguments)}}},[t._v("忘记密码？")]),o("v-uni-button",{staticClass:"loogin-button-primary",attrs:{type:"default","hover-class":"loogin-button-primary-hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1),o("u-toast",{ref:"Toast"})],1)},e=[]},d38d:function(t,n,o){"use strict";var a=o("b22b"),i=o.n(a);i.a}}]);