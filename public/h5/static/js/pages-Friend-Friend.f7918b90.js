(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Friend-Friend"],{"0224":function(t,e,n){"use strict";n.r(e);var a=n("1aae"),r=n("cce6");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("6ccf");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"55cfca04",null,!1,a["a"],o);e["default"]=u.exports},"04b6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("588f"),r={data:function(){return{indexList:[],itemArr:[],value:0,img:a.img}},created:function(){this.getCacheDate(),this.getCachFriendDate()},mounted:function(){this.getNewFriendTitleNumber(),this.getFriendList()},computed:{getHeight:function(){var t={height:"calc(".concat(this.innerHeight,"px - 50px)")};return t}},methods:{onClickToSeachPage:function(){uni.navigateTo({url:"../search/search"})},onClickToFriendRequestPage:function(){uni.navigateTo({url:"../FriendRequest/FriendRequest"})},getNewFriendTitleNumber:function(){var t=this,e=this.userInfo.userid;(0,a.getNewFriendTitleNumber)(e,(function(n){var a=n.data,r=a.code,i=a.newMsg;200==r&&(t.value==i&&t.$setStorage({key:"user_friend_newTitle",kes:e,data:i}),t.value=i)}))},getCacheDate:function(){var t=this,e=this.userInfo.userid;void 0!=e&&""!=e&&this.$getStorage({key:"user_friend_newTitle",success:function(n){t.value=n[e]?n[e]:0}})},getFriendList:function(){var t=this,e=this.userInfo.userid;(0,a.getFriendList)(e,(function(n){var a=n.data,r=a.code,i=a.pinyinArr;if(200==r){var o=t.processDate(i),s=o.keyArr,u=o.valArr;t.indexList=s,t.itemArr=u,t.$setStorage({key:"user_friend",data:i,kes:e})}}))},processDate:function(t){var e=[],n=[];for(var a in t){var r=t[a];e.push(a),n.push(r)}return{keyArr:e,valArr:n}},getCachFriendDate:function(){var t=this;this.$getStorage({key:"user_friend",success:function(e){var n=t.userInfo.userid,a=e[n];if(a instanceof Object){var r=t.processDate(a),i=r.keyArr,o=r.valArr;t.indexList=i,t.itemArr=o}}})},toFriendDetailsPage:function(t){uni.navigateTo({url:"../details/details?id="+t})}}};e.default=r},"0551":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{}};e.default=a},"0e10":function(t,e,n){"use strict";var a=n("112c"),r=n.n(a);r.a},"112c":function(t,e,n){var a=n("57f0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("19bfa858",a,!0,{sourceMap:!1,shadowMode:!1})},"1aae":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show&&(0!==Number(t.value)||t.showZero||t.isDot)?n("v-uni-text",{staticClass:"u-badge",class:[t.isDot?"u-badge--dot":"u-badge--not-dot",t.inverted&&"u-badge--inverted","horn"===t.shape&&"u-badge--horn","u-badge--"+t.type+(t.inverted?"--inverted":"")],style:[t.$u.addStyle(t.customStyle),t.badgeStyle]},[t._v(t._s(t.isDot?"":t.showValue))]):t._e()},i=[]},"1cce":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{isDot:{type:Boolean,default:uni.$u.props.badge.isDot},value:{type:[Number,String],default:uni.$u.props.badge.value},show:{type:Boolean,default:uni.$u.props.badge.show},max:{type:[Number,String],default:uni.$u.props.badge.max},type:{type:String,default:uni.$u.props.badge.type},showZero:{type:Boolean,default:uni.$u.props.badge.showZero},bgColor:{type:[String,null],default:uni.$u.props.badge.bgColor},color:{type:[String,null],default:uni.$u.props.badge.color},shape:{type:String,default:uni.$u.props.badge.shape},numberType:{type:String,default:uni.$u.props.badge.numberType},offset:{type:Array,default:uni.$u.props.badge.offset},inverted:{type:Boolean,default:uni.$u.props.badge.inverted},absolute:{type:Boolean,default:uni.$u.props.badge.absolute}}};e.default=a},"261a":function(t,e,n){"use strict";n.r(e);var a=n("ce2d"),r=n("5be3");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("963b");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"23bee877",null,!1,a["a"],o);e["default"]=u.exports},"26ef":function(t,e,n){var a=n("e660");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("97832e32",a,!0,{sourceMap:!1,shadowMode:!1})},2883:function(t,e,n){"use strict";n.r(e);var a=n("9d46"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},3363:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("1cce")),i={name:"u-badge",mixins:[uni.$u.mpMixin,r.default,uni.$u.mixin],computed:{boxStyle:function(){var t={};return t},badgeStyle:function(){var t={};if(this.color&&(t.color=this.color),this.bgColor&&!this.inverted&&(t.backgroundColor=this.bgColor),this.absolute&&(t.position="absolute",this.offset.length)){var e=this.offset[0],n=this.offset[1]||e;t.top=uni.$u.addUnit(e),t.right=uni.$u.addUnit(n)}return t},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}};e.default=i},3439:function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("0551")),i={name:"u-index-item",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{top:0,height:0,id:""}},created:function(){this.anchor={}},mounted:function(){this.init()},methods:{init:function(){var t=this;if(this.getParentData("u-index-list"),!this.parent)return uni.$u.error("u-index-item必须要搭配u-index-list组件使用");uni.$u.sleep().then((function(){t.getIndexItemRect().then((function(e){t.top=Math.ceil(e.top),t.height=Math.ceil(e.height)}))}))},getIndexItemRect:function(){var t=this;return new Promise((function(e){t.$uGetRect(".u-index-item").then((function(t){e(t)}))}))}}};e.default=i},"39f9":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=a},"4c75":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.inited?n("v-uni-view",{ref:"u-transition",staticClass:"u-transition",class:t.classes,style:[t.mergeStyle],on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},"51efd":function(t,e,n){var a=n("7635");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("50b2d9a4",a,!0,{sourceMap:!1,shadowMode:!1})},5219:function(t,e,n){var a=n("9764");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("332b70d7",a,!0,{sourceMap:!1,shadowMode:!1})},"57f0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nuni-view[data-v-a75f7a08], uni-scroll-view[data-v-a75f7a08], uni-swiper-item[data-v-a75f7a08]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\r\n\r\n/**\r\n * vue版本动画内置的动画模式有如下：\r\n * fade：淡入\r\n * zoom：缩放\r\n * fade-zoom：缩放淡入\r\n * fade-up：上滑淡入\r\n * fade-down：下滑淡入\r\n * fade-left：左滑淡入\r\n * fade-right：右滑淡入\r\n * slide-up：上滑进入\r\n * slide-down：下滑进入\r\n * slide-left：左滑进入\r\n * slide-right：右滑进入\r\n */.u-fade-enter-active[data-v-a75f7a08],\r\n.u-fade-leave-active[data-v-a75f7a08]{transition-property:opacity}.u-fade-enter[data-v-a75f7a08],\r\n.u-fade-leave-to[data-v-a75f7a08]{opacity:0}.u-fade-zoom-enter[data-v-a75f7a08],\r\n.u-fade-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95);opacity:0}.u-fade-zoom-enter-active[data-v-a75f7a08],\r\n.u-fade-zoom-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.u-fade-down-enter-active[data-v-a75f7a08],\r\n.u-fade-down-leave-active[data-v-a75f7a08],\r\n.u-fade-left-enter-active[data-v-a75f7a08],\r\n.u-fade-left-leave-active[data-v-a75f7a08],\r\n.u-fade-right-enter-active[data-v-a75f7a08],\r\n.u-fade-right-leave-active[data-v-a75f7a08],\r\n.u-fade-up-enter-active[data-v-a75f7a08],\r\n.u-fade-up-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.u-fade-up-enter[data-v-a75f7a08],\r\n.u-fade-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.u-fade-down-enter[data-v-a75f7a08],\r\n.u-fade-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.u-fade-left-enter[data-v-a75f7a08],\r\n.u-fade-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.u-fade-right-enter[data-v-a75f7a08],\r\n.u-fade-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.u-slide-down-enter-active[data-v-a75f7a08],\r\n.u-slide-down-leave-active[data-v-a75f7a08],\r\n.u-slide-left-enter-active[data-v-a75f7a08],\r\n.u-slide-left-leave-active[data-v-a75f7a08],\r\n.u-slide-right-enter-active[data-v-a75f7a08],\r\n.u-slide-right-leave-active[data-v-a75f7a08],\r\n.u-slide-up-enter-active[data-v-a75f7a08],\r\n.u-slide-up-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-slide-up-enter[data-v-a75f7a08],\r\n.u-slide-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.u-slide-down-enter[data-v-a75f7a08],\r\n.u-slide-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-slide-left-enter[data-v-a75f7a08],\r\n.u-slide-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-slide-right-enter[data-v-a75f7a08],\r\n.u-slide-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-zoom-enter-active[data-v-a75f7a08],\r\n.u-zoom-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-zoom-enter[data-v-a75f7a08],\r\n.u-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95)}',""]),t.exports=e},"5be3":function(t,e,n){"use strict";n.r(e);var a=n("9890"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"5e2e":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uTransition:n("d01c").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-index-list"},[n("v-uni-scroll-view",{ref:"uList",style:{height:t.$u.addUnit(t.scrollViewHeight)},attrs:{scrollTop:t.scrollTop,scrollIntoView:t.scrollIntoView,"offset-accuracy":1,"scroll-y":!0},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollHandler.apply(void 0,arguments)}}},[t.$slots.header?n("v-uni-view",[t._t("header")],2):t._e(),t._t("default"),t.$slots.header?n("v-uni-view",[t._t("footer")],2):t._e()],2),n("v-uni-view",{ref:"u-index-list__letter",staticClass:"u-index-list__letter",style:{top:t.$u.addUnit(t.letterInfo.top||100)},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)},touchcancel:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}},t._l(t.uIndexList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"u-index-list__letter__item",style:{backgroundColor:t.activeIndex===a?t.activeColor:"transparent"}},[n("v-uni-text",{staticClass:"u-index-list__letter__item__index",style:{color:t.activeIndex===a?"#fff":t.inactiveColor}},[t._v(t._s(e))])],1)})),1),n("u-transition",{attrs:{mode:"fade",show:t.touching,customStyle:{position:"fixed",right:"50px",top:t.$u.addUnit(t.indicatorTop),zIndex:2}}},[n("v-uni-view",{staticClass:"u-index-list__indicator",class:["u-index-list__indicator--show"],style:{height:t.$u.addUnit(t.indicatorHeight),width:t.$u.addUnit(t.indicatorHeight)}},[n("v-uni-text",{staticClass:"u-index-list__indicator__text"},[t._v(t._s(t.uIndexList[t.activeIndex]))])],1)],1)],1)},i=[]},"5e53":function(t,e,n){var a=n("e394");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("9125d800",a,!0,{sourceMap:!1,shadowMode:!1})},"5e72":function(t,e,n){"use strict";n.r(e);var a=n("cfa8"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"5e86":function(t,e,n){"use strict";var a=n("c836"),r=n.n(a);r.a},6689:function(t,e,n){"use strict";n.r(e);var a=n("7d68"),r=n("b192");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("5e86");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"dafe24dc",null,!1,a["a"],o);e["default"]=u.exports},6955:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("c7ea").default,uIndexList:n("730a").default,uIndexItem:n("6689").default,uCellGroup:n("7a39").default,uCell:n("a498").default,uBadge:n("0224").default,uIndexAnchor:n("261a").default,uAvatar:n("2881").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"friend",style:t.getHeight},[n("u-navbar",{attrs:{title:"好友列表",fixed:!0,placeholder:!0}},[n("template",{slot:"left"},[n("v-uni-text",{staticClass:"iconfont icon-tianjiahaoyou1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickToSeachPage.apply(void 0,arguments)}}})],1)],2),n("u-index-list",{attrs:{"index-list":t.indexList,activeColor:"#FBE836"}},[n("u-index-item",[n("u-cell-group",[n("u-cell",{attrs:{icon:"setting-fill",title:"新的好友",arrow:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickToFriendRequestPage.apply(void 0,arguments)}}},[n("template",{slot:"icon"},[n("v-uni-text",{staticClass:"iconfont icon-zu",staticStyle:{"font-size":"30px"}})],1),n("template",{slot:"right-icon"},[n("u-badge",{attrs:{max:"99",value:t.value}})],1)],2)],1)],1),t._l(t.itemArr,(function(e,a){return n("u-index-item",{key:a},[n("u-index-anchor",{attrs:{text:t.indexList[a],height:"25",size:"12"}}),n("u-cell-group",t._l(e,(function(e,a){return n("u-cell",{key:e.userid,attrs:{title:e.name,"arrow-direction":"down"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toFriendDetailsPage(e.userid)}}},[n("template",{slot:"icon"},[n("u-avatar",{staticStyle:{"margin-right":"10px"},attrs:{src:t.img+e.imgurl}})],1)],2)})),1)],1)})),n("u-index-item",[n("v-uni-view",{staticStyle:{opacity:"0"}},[n("u-navbar",{staticStyle:{opacity:"0"},attrs:{title:"好友列表",placeholder:!0}},[n("template",{slot:"left"},[t._v("占位"),n("v-uni-view",{staticClass:"iconfont icon-tianjiahaoyou1"})],1)],2)],1)],1)],2)],1)},i=[]},"6ccf":function(t,e,n){"use strict";var a=n("5e53"),r=n.n(a);r.a},"701c":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{inactiveColor:{type:String,default:uni.$u.props.indexList.inactiveColor},activeColor:{type:String,default:uni.$u.props.indexList.activeColor},indexList:{type:Array,default:uni.$u.props.indexList.indexList},sticky:{type:Boolean,default:uni.$u.props.indexList.sticky},customNavHeight:{type:[String,Number],default:uni.$u.props.indexList.customNavHeight}}};e.default=a},"730a":function(t,e,n){"use strict";n.r(e);var a=n("5e2e"),r=n("5e72");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("f181");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"24020c70",null,!1,a["a"],o);e["default"]=u.exports},"753f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}};e.default=a},7635:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.friend[data-v-653e018c]{width:100%;overflow:hidden;border:soloid 1px red;height:100vh}.friend .iconfont[data-v-653e018c]{font-size:20px}.friend .iconfont.icon-zu[data-v-653e018c]{color:#f9ce2f;margin-right:5px}.friend .iconfont.icon-qunliao[data-v-653e018c]{color:#17ff17;margin-right:5px}.friend .friend-list[data-v-653e018c]{margin-bottom:100px}.friend[data-v-653e018c]::-webkit-scrollbar{display:none}.list-cell[data-v-653e018c]{display:flex;box-sizing:border-box;width:100%;padding:10px %?24?%;overflow:hidden;color:#323233;font-size:14px;line-height:24px;background-color:#fff}',""]),t.exports=e},"76b6":function(t,e,n){"use strict";n.r(e);var a=n("04b6"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"7d68":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-index-item",class:["u-index-item-"+t.id],attrs:{id:"u-index-item-"+t.id}},[t._t("default")],2)},i=[]},"963b":function(t,e,n){"use strict";var a=n("5219"),r=n.n(a);r.a},9764:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nuni-view[data-v-23bee877], uni-scroll-view[data-v-23bee877], uni-swiper-item[data-v-23bee877]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\n.u-index-anchor[data-v-23bee877]{position:-webkit-sticky;position:sticky;top:0;\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;padding-left:15px;z-index:1}.u-index-anchor__text[data-v-23bee877]{\r\ndisplay:flex;\r\nflex-direction:row;align-items:center}',""]),t.exports=e},9890:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("c3e1")),i={name:"u-index-anchor",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t=uni.$u.$parent.call(this,"u-index-list");if(!t)return uni.$u.error("u-index-anchor必须要搭配u-index-list组件使用");t.anchors.push(this);var e=uni.$u.$parent.call(this,"u-index-item");if(!e)return uni.$u.error("u-index-anchor必须要搭配u-index-item组件使用");e.id=this.text.charCodeAt(0)}}};e.default=i},"9d46":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530")),i=a(n("39f9")),o=a(n("c0f3")),s={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return(0,r.default)((0,r.default)({transitionDuration:"".concat(this.duration,"ms"),transitionTimingFunction:this.timingFunction},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,i.default],watch:{show:{handler:function(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}};e.default=s},b192:function(t,e,n){"use strict";n.r(e);var a=n("3439"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},b5d4:function(t,e,n){"use strict";n.r(e);var a=n("6955"),r=n("76b6");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("c537");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"653e018c",null,!1,a["a"],o);e["default"]=u.exports},c0f3:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=(a(n("753f")),function(t){return{enter:"u-".concat(t,"-enter u-").concat(t,"-enter-active"),"enter-to":"u-".concat(t,"-enter-to u-").concat(t,"-enter-active"),leave:"u-".concat(t,"-leave u-").concat(t,"-leave-active"),"leave-to":"u-".concat(t,"-leave-to u-").concat(t,"-leave-active")}}),o={methods:{clickHandler:function(){this.$emit("click")},vueEnter:function(){var t=this,e=i(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=e.enter,this.$nextTick((0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,uni.$u.sleep(20);case 2:t.$emit("afterEnter"),t.transitionEnded=!1,t.classes=e["enter-to"];case 5:case"end":return n.stop()}}),n)}))))},vueLeave:function(){var t=this;if(this.display){var e=i(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=e.leave,this.$nextTick((function(){t.transitionEnded=!1,setTimeout(t.onTransitionEnd,t.duration),t.classes=e["leave-to"]}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=o},c3e1:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{text:{type:[String,Number],default:uni.$u.props.indexAnchor.text},color:{type:String,default:uni.$u.props.indexAnchor.color},size:{type:[String,Number],default:uni.$u.props.indexAnchor.size},bgColor:{type:String,default:uni.$u.props.indexAnchor.bgColor},height:{type:[String,Number],default:uni.$u.props.indexAnchor.height}}};e.default=a},c537:function(t,e,n){"use strict";var a=n("51efd"),r=n.n(a);r.a},c836:function(t,e,n){var a=n("d272");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("d4eb85c2",a,!0,{sourceMap:!1,shadowMode:!1})},cce6:function(t,e,n){"use strict";n.r(e);var a=n("3363"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},ce2d:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{ref:"u-index-anchor-"+t.text,staticClass:"u-index-anchor u-border-bottom",style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-text",{staticClass:"u-index-anchor__text",style:{fontSize:t.$u.addUnit(t.size),color:t.color}},[t._v(t._s(t.text))])],1)},i=[]},cfa8:function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=a(n("701c")),o=function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t},s={name:"u-index-list",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{activeIndex:-1,touchmoveIndex:1,letterInfo:{height:0,itemHeight:0,top:0},indicatorHeight:50,touching:!1,scrollTop:0,scrollViewHeight:0,sys:uni.$u.sys(),scrolling:!1,scrollIntoView:""}},computed:{uIndexList:function(){return this.indexList.length?this.indexList:o()},indicatorTop:function(){var t=this.letterInfo,e=t.top,n=t.itemHeight;return Math.floor(e+n*this.activeIndex+n/2-this.indicatorHeight/2)}},watch:{uIndexList:{immediate:!0,handler:function(){var t=this;uni.$u.sleep().then((function(){t.setIndexListLetterInfo()}))}}},created:function(){this.children=[],this.anchors=[],this.init()},mounted:function(){this.setIndexListLetterInfo()},methods:{init:function(){this.scrollViewHeight=this.sys.windowHeight},touchStart:function(t){var e=t.changedTouches[0];if(e){this.touching=!0;var n=e.pageY,a=this.getIndexListLetter(n);this.setValueForTouch(a)}},touchMove:function(t){var e=t.changedTouches[0];if(e){this.touching||(this.touching=!0);var n=e.pageY,a=this.getIndexListLetter(n);this.setValueForTouch(a)}},touchEnd:function(t){var e=this;uni.$u.sleep(300).then((function(){e.touching=!1}))},getIndexListLetterRect:function(){var t=this;return new Promise((function(e){t.$uGetRect(".u-index-list__letter").then((function(t){e(t)}))}))},setIndexListLetterInfo:function(){var t=this;this.getIndexListLetterRect().then((function(e){var n=e.height,a=uni.$u.sys(),r=a.windowHeight,i=0;i=0==t.customNavHeight?a.windowTop:uni.$u.getPx(t.customNavHeight),t.letterInfo={height:n,top:(r-n)/2+i/2,itemHeight:Math.floor(n/t.uIndexList.length)}}))},getIndexListLetter:function(t){var e=this.letterInfo,n=e.top,a=e.height,r=e.itemHeight;return t+=uni.$u.sys().windowTop,t<n?0:t>=n+a?this.uIndexList.length-1:Math.floor((t-n)/r)},setValueForTouch:function(t){t!==this.activeIndex&&(this.activeIndex=t,this.scrollIntoView="u-index-item-".concat(this.uIndexList[t].charCodeAt(0)))},getHeaderRect:function(){var t=this;return new Promise((function(e){dom.getComponentRect(t.$refs.header,(function(t){e(t.size)}))}))},scrollHandler:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a,r,i,o,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.touching&&!e.scrolling){n.next=2;break}return n.abrupt("return");case 2:e.scrolling=!0,uni.$u.sleep(10).then((function(){e.scrolling=!1})),a=0,r=e.children.length,i=e.children,e.anchors,a=t.detail.scrollTop,o=0;case 10:if(!(o<r)){n.next=28;break}if(s=i[o],u=i[o+1],!(a<=i[0].top||a>=i[r-1].top+i[r-1].height)){n.next=17;break}return e.activeIndex=-1,n.abrupt("break",28);case 17:if(u){n.next=22;break}return e.activeIndex=r-1,n.abrupt("break",28);case 22:if(!(a>s.top&&a<u.top)){n.next=25;break}return e.activeIndex=o,n.abrupt("break",28);case 25:o++,n.next=10;break;case 28:case"end":return n.stop()}}),n)})))()}}};e.default=s},d01c:function(t,e,n){"use strict";n.r(e);var a=n("4c75"),r=n("2883");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("0e10");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"a75f7a08",null,!1,a["a"],o);e["default"]=u.exports},d272:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nuni-view[data-v-dafe24dc], uni-scroll-view[data-v-dafe24dc], uni-swiper-item[data-v-dafe24dc]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\r\n',""]),t.exports=e},e394:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nuni-view[data-v-55cfca04], uni-scroll-view[data-v-55cfca04], uni-swiper-item[data-v-55cfca04]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\n.u-badge[data-v-55cfca04]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;\r\ndisplay:flex;\r\nflex-direction:row;line-height:11px;text-align:center;font-size:11px;color:#fff}.u-badge--dot[data-v-55cfca04]{height:8px;width:8px}.u-badge--inverted[data-v-55cfca04]{font-size:13px}.u-badge--not-dot[data-v-55cfca04]{padding:2px 5px}.u-badge--horn[data-v-55cfca04]{border-bottom-left-radius:0}.u-badge--primary[data-v-55cfca04]{background-color:#3c9cff}.u-badge--primary--inverted[data-v-55cfca04]{color:#3c9cff}.u-badge--error[data-v-55cfca04]{background-color:#f56c6c}.u-badge--error--inverted[data-v-55cfca04]{color:#f56c6c}.u-badge--success[data-v-55cfca04]{background-color:#5ac725}.u-badge--success--inverted[data-v-55cfca04]{color:#5ac725}.u-badge--info[data-v-55cfca04]{background-color:#909399}.u-badge--info--inverted[data-v-55cfca04]{color:#909399}.u-badge--warning[data-v-55cfca04]{background-color:#f9ae3d}.u-badge--warning--inverted[data-v-55cfca04]{color:#f9ae3d}',""]),t.exports=e},e660:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* hover相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nuni-view[data-v-24020c70], uni-scroll-view[data-v-24020c70], uni-swiper-item[data-v-24020c70]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\n.u-index-list__letter[data-v-24020c70]{position:fixed;right:0;text-align:center;z-index:3;padding:0 6px}.u-index-list__letter__item[data-v-24020c70]{width:16px;height:16px;border-radius:100px;margin:1px 0;\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;justify-content:center}.u-index-list__letter__item--active[data-v-24020c70]{background-color:#3c9cff}.u-index-list__letter__item__index[data-v-24020c70]{font-size:12px;text-align:center;line-height:12px}.u-index-list__indicator[data-v-24020c70]{width:50px;height:50px;border-radius:100px 100px 0 100px;text-align:center;color:#fff;background-color:#c9c9c9;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);\r\ndisplay:flex;\r\nflex-direction:row;justify-content:center;align-items:center}.u-index-list__indicator__text[data-v-24020c70]{font-size:28px;line-height:28px;font-weight:700;color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);text-align:center}',""]),t.exports=e},f181:function(t,e,n){"use strict";var a=n("26ef"),r=n.n(a);r.a}}]);