(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-verifyDetails-pass"],{2106:function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{name:{type:[String,Number,Boolean],default:uni.$u.props.checkbox.name},shape:{type:String,default:uni.$u.props.checkbox.shape},size:{type:[String,Number],default:uni.$u.props.checkbox.size},checked:{type:Boolean,default:uni.$u.props.checkbox.checked},disabled:{type:[String,Boolean],default:uni.$u.props.checkbox.disabled},activeColor:{type:String,default:uni.$u.props.checkbox.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkbox.inactiveColor},iconSize:{type:[String,Number],default:uni.$u.props.checkbox.iconSize},iconColor:{type:String,default:uni.$u.props.checkbox.iconColor},label:{type:[String,Number],default:uni.$u.props.checkbox.label},labelSize:{type:[String,Number],default:uni.$u.props.checkbox.labelSize},labelColor:{type:String,default:uni.$u.props.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:uni.$u.props.checkbox.labelDisabled}}};t.default=i},"2f11":function(e,t,n){"use strict";var i=n("4ea4");n("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("ea7a")),a={name:"u-checkbox-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],computed:{parentData:function(){return[this.value,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass:function(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:function(){this.children.length&&this.children.map((function(e){"function"===typeof e.init&&e.init()}))}},data:function(){return{}},created:function(){this.children=[]},methods:{unCheckedOther:function(e){var t=[];this.children.map((function(e){e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("input",t)}}};t.default=a},"35ee":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uLine:n("bc68").default,"u-Form":n("1792").default,uFormItem:n("6e5a").default,uIcon:n("205a").default,uPicker:n("82d2").default,uCheckboxGroup:n("7282").default,uCheckbox:n("9fd7").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"main bgf"},[n("u-line"),n("u--form",{ref:"uForm",staticClass:"form-list bgf",attrs:{labelPosition:"left",model:e.form.shJson1,rules:e.rules}},[n("u-form-item",{attrs:{label:"转送院区",prop:"jsyq",borderBottom:!0,required:!0}},[n("v-uni-view",{staticClass:"justify-between w100"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop("jsyq")}}},[e.form.shJson1.jsyq?n("v-uni-text",{staticClass:"form-item-txt"},[e._v(e._s(e.form.shJson1.jsyq))]):[n("v-uni-text",{staticClass:"form-item-placeholder"},[e._v("请选择")])],n("u-icon",{attrs:{name:"arrow-right",size:"16",color:"#999999"}})],2)],1),n("u-picker",{attrs:{show:e.jsyqShow,columns:e.jsyqColumns,keyName:"label"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmPicker(t,"jsyq")},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPop(t,"jsyq")}}})],1),n("u-form-item",{attrs:{label:"转送科室",prop:"jsyyks",borderBottom:!0,required:!0}},[n("v-uni-view",{staticClass:"justify-between w100"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop("jsyyks")}}},[e.form.shJson1.jsyyks?n("v-uni-text",{staticClass:"form-item-txt"},[e._v(e._s(e.form.shJson1.jsyyks))]):[n("v-uni-text",{staticClass:"form-item-placeholder"},[e._v("请选择")])],n("u-icon",{attrs:{name:"arrow-right",size:"16",color:"#999999"}})],2)],1),n("u-picker",{attrs:{show:e.jsyyksShow,columns:e.jsyyksColumns,keyName:"label"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmPicker(t,"jsyyks")},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPop(t,"jsyyks")}}})],1),n("u-form-item",{attrs:{label:"调度中心",prop:"ddzx",borderBottom:!0,required:!0}},[n("v-uni-view",{staticClass:"justify-between w100"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop("ddzx")}}},[e.form.shJson1.ddzx?n("v-uni-text",{staticClass:"form-item-txt"},[e._v(e._s(e.form.shJson1.ddzx))]):[n("v-uni-text",{staticClass:"form-item-placeholder"},[e._v("请选择")])],n("u-icon",{attrs:{name:"arrow-right",size:"16",color:"#999999"}})],2)],1),n("u-picker",{attrs:{show:e.ddzxShow,columns:e.ddzxColumns,keyName:"label"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmPicker(t,"ddzx")},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPop(t,"ddzx")}}})],1),n("u-form-item",{attrs:{label:"转送医生",borderBottom:!0}},[n("v-uni-view",{staticClass:"justify-between w100"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop("zyys")}}},[e.form.shJson1.zyys?n("v-uni-text",{staticClass:"form-item-txt"},[e._v(e._s(e.form.shJson1.zyys))]):[n("v-uni-text",{staticClass:"form-item-placeholder"},[e._v("请选择")])],n("u-icon",{attrs:{name:"arrow-right",size:"16",color:"#999999"}})],2)],1),n("u-picker",{attrs:{show:e.zyysShow,columns:e.zyysColumns,keyName:"label"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmPicker(t,"zyys")},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPop(t,"zyys")}}})],1),n("u-form-item",{attrs:{label:"转送护士",borderBottom:!0}},[n("v-uni-view",{staticClass:"justify-between w100"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPop("zyhs")}}},[e.form.shJson1.zyhs?n("v-uni-text",{staticClass:"form-item-txt"},[e._v(e._s(e.form.shJson1.zyhs))]):[n("v-uni-text",{staticClass:"form-item-placeholder"},[e._v("请选择")])],n("u-icon",{attrs:{name:"arrow-right",size:"16",color:"#999999"}})],2)],1),n("u-picker",{attrs:{show:e.zyhsShow,columns:e.zyhsColumns,keyName:"label"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmPicker(t,"zyhs")},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPop(t,"zyhs")}}})],1),n("v-uni-view",{staticClass:"h16"}),n("v-uni-view",{staticClass:"bgf cell-item"},[n("v-uni-text",{staticClass:"red"},[e._v("*")]),n("v-uni-text",[e._v("携带设备")]),n("v-uni-view",{staticClass:"checkbox"},[n("u-checkbox-group",{attrs:{placement:"row"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:e.form.shJson1.xdsb,callback:function(t){e.$set(e.form.shJson1,"xdsb",t)},expression:"form.shJson1.xdsb"}},e._l(e.equipmentList,(function(e,t){return n("u-checkbox",{key:t,attrs:{customStyle:{marginBottom:"24rpx"},label:e.name,name:e.name}})})),1)],1)],1)],1),n("v-uni-view",{staticClass:"bottom-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("确认通过")])],1)},a=[]},"3f43":function(e,t,n){"use strict";n.r(t);var i=n("35ee"),o=n("9047");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("6a3b");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"145b02ae",null,!1,i["a"],r);t["default"]=c.exports},"472f":function(e,t,n){"use strict";var i=n("ad56"),o=n.n(i);o.a},"484d":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-25f39ece], uni-scroll-view[data-v-25f39ece], uni-swiper-item[data-v-25f39ece]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-checkbox-group--row[data-v-25f39ece]{display:flex;flex-direction:row}.u-checkbox-group--column[data-v-25f39ece]{display:flex;flex-direction:column}',""]),e.exports=t},"49e3":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-45c84c98], uni-scroll-view[data-v-45c84c98], uni-swiper-item[data-v-45c84c98]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-checkbox[data-v-45c84c98]{display:flex;flex-direction:row;overflow:hidden;flex-direction:row;align-items:center}.u-checkbox-label--left[data-v-45c84c98]{flex-direction:row}.u-checkbox-label--right[data-v-45c84c98]{flex-direction:row-reverse;justify-content:space-between}.u-checkbox__icon-wrap[data-v-45c84c98]{box-sizing:border-box;transition-property:border-color,background-color,color;transition-duration:.2s;color:#606266;display:flex;flex-direction:row;align-items:center;justify-content:center;color:transparent;text-align:center;margin-right:6px;font-size:6px;border-width:1px;border-color:#c8c9cc;border-style:solid}.u-checkbox__icon-wrap--circle[data-v-45c84c98]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-45c84c98]{border-radius:3px}.u-checkbox__icon-wrap--checked[data-v-45c84c98]{color:#fff;background-color:red;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-45c84c98]{background-color:#ebedf0!important}.u-checkbox__icon-wrap--disabled--checked[data-v-45c84c98]{color:#c8c9cc!important}.u-checkbox__label[data-v-45c84c98]{word-wrap:break-word;margin-left:5px;margin-right:12px;color:#606266;font-size:15px}.u-checkbox__label--disabled[data-v-45c84c98]{color:#c8c9cc}',""]),e.exports=t},"60ec":function(e,t,n){"use strict";var i=n("d418"),o=n.n(i);o.a},"6a3b":function(e,t,n){"use strict";var i=n("ff3b"),o=n.n(i);o.a},7282:function(e,t,n){"use strict";n.r(t);var i=n("c76b"),o=n("a2db");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("472f");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"25f39ece",null,!1,i["a"],r);t["default"]=c.exports},"7be3":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("205a").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-checkbox",class:["u-checkbox-label--"+e.parentData.iconPlacement,e.parentData.borderBottom&&"column"===e.parentData.placement&&"u-border-bottom"],style:[e.checkboxStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.wrapperClickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:e.iconClasses,style:[e.iconWrapStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.iconClickHandler.apply(void 0,arguments)}}},[e._t("icon",[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.elIconSize,color:e.elIconColor}})])],2),n("v-uni-text",{style:{color:e.elDisabled?e.elInactiveColor:e.elLabelColor,fontSize:e.elLabelSize,lineHeight:e.elLabelSize},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.labelClickHandler.apply(void 0,arguments)}}},[e._v(e._s(e.label))])],1)},a=[]},9047:function(e,t,n){"use strict";n.r(t);var i=n("a42f"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"9fd7":function(e,t,n){"use strict";n.r(t);var i=n("7be3"),o=n("ab27");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("60ec");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"45c84c98",null,!1,i["a"],r);t["default"]=c.exports},a2db:function(e,t,n){"use strict";n.r(t);var i=n("2f11"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},a42f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("9f55"),o=(n("8e9d"),{data:function(){return{form:{shJson1:{jsyq:"",jsyyks:"",ddzx:""}},rules:{jsyq:[{required:!0,message:"请选择转送院区",trigger:["blur","change"]}],jsyyks:[{required:!0,message:"请选择转送科室",trigger:["blur","change"]}],ddzx:[{required:!0,message:"请选择调度中心",trigger:["blur","change"]}]},equipmentList:i.mock.equipmentList(),jsyqColumns:i.mock.jsyqList(),jsyyksColumns:i.mock.jsyyksList(),ddzxColumns:i.mock.ddzxList(),zyysColumns:i.mock.zyysList(),zyhsColumns:i.mock.zyhsList(),jsyqShow:!1,jsyyksShow:!1,ddzxShow:!1,zyysShow:!1,zyhsShow:!1}},onLoad:function(){var e=this;uni.$once("form-pass",(function(t){e.form=JSON.parse(JSON.stringify(t)),e.form.shJson1={jsyq:"",jsyyks:"",ddzx:""},console.log(e.form,"form-pass")}))},onUnload:function(){uni.$off("form-pass")},methods:{submit:function(){var e=this;this.$refs.uForm.validate().then((function(t){if(!e.form.shJson1.xdsb)return e.$tip.toast("请选择携带的设备");e.form.shJson1.state="0";var n={code:e.form.code,statusId:"2",statusVal:"待复审",shJson1:JSON.stringify(e.form.shJson1)};e.$apis.xferSave(n).then((function(e){console.log(e),200===e.code&&uni.reLaunch({url:"./result?type=pass"})}))})).catch((function(e){}))},showPop:function(e){this[e+"Show"]=!0},confirmPicker:function(e,t){console.log(e),this.form.shJson1[t]=e.value[0].label,this.form.shJson1[t+"code"]=e.value[0].id,console.log(this.form.shJson1,"this.form.shJson1’"),this.$refs.uForm.clearValidate(t),this.$forceUpdate(),this.cancelPop(e,t)},cancelPop:function(e,t){this[t+"Show"]=!1},checkboxChange:function(e){console.log(e)}}});t.default=o},ab27:function(e,t,n){"use strict";n.r(t);var i=n("fb1a"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},ad56:function(e,t,n){var i=n("484d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("5a58dc67",i,!0,{sourceMap:!1,shadowMode:!1})},c6c9:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.form-list[data-v-145b02ae]  .u-form-item__body{padding:%?20?% %?32?%}.form-list .w100[data-v-145b02ae]{width:100%;padding-left:%?70?%}.form-list .w100 .radio[data-v-145b02ae]{margin-right:%?30?%}.form-list .w100 .form-item-placeholder[data-v-145b02ae]{color:#888}.form-list .w100 .form-item-txt[data-v-145b02ae]{flex:1;text-align:right;padding-right:%?10?%}.form-list .w50[data-v-145b02ae]{width:%?230?%}.form-list .w50 .line[data-v-145b02ae]{padding:0 %?20?%}.form-list .h16[data-v-145b02ae]{height:%?16?%;background-color:#f9f9f9}.red[data-v-145b02ae]{color:#ff404f}.cell-item[data-v-145b02ae]{padding:%?26?% %?32?%}.checkbox[data-v-145b02ae]{margin-top:%?28?%}[data-v-145b02ae] .u-checkbox-label--left{width:33.3%}[data-v-145b02ae] .u-checkbox-group--row{flex-wrap:wrap}',""]),e.exports=t},c76b:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-checkbox-group",class:e.bemClass},[e._t("default")],2)},a=[]},d418:function(e,t,n){var i=n("49e3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("5fec43df",i,!0,{sourceMap:!1,shadowMode:!1})},ea7a:function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{name:{type:String,default:uni.$u.props.checkboxGroup.name},value:{type:Array,default:uni.$u.props.checkboxGroup.value},shape:{type:String,default:uni.$u.props.checkboxGroup.shape},disabled:{type:Boolean,default:uni.$u.props.checkboxGroup.disabled},activeColor:{type:String,default:uni.$u.props.checkboxGroup.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkboxGroup.inactiveColor},size:{type:[String,Number],default:uni.$u.props.checkboxGroup.size},placement:{type:String,default:uni.$u.props.checkboxGroup.placement},labelSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.labelSize},labelColor:{type:[String],default:uni.$u.props.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:uni.$u.props.checkboxGroup.labelDisabled},iconColor:{type:String,default:uni.$u.props.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.iconSize},iconPlacement:{type:String,default:uni.$u.props.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:uni.$u.props.checkboxGroup.borderBottom}}};t.default=i},fb1a:function(e,t,n){"use strict";var i=n("4ea4");n("45fc"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("2106")),a={name:"u-checkbox",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,value:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor:function(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor:function(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize:function(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor:function(){var e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle:function(){var e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle:function(){var e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("检测到您将borderBottom设置为true，需要同时将u-checkbox-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.updateParentData(),this.parent||uni.$u.error("u-checkbox必须搭配u-checkbox-group组件使用"),this.checked?this.isChecked=!0:uni.$u.test.array(this.parentData.value)&&(this.isChecked=this.parentData.value.some((function(t){return t===e.name})))},updateParentData:function(){this.getParentData("u-checkbox-group")},wrapperClickHandler:function(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},iconClickHandler:function(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler:function(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){var e=this;this.$emit("change",this.isChecked),this.$nextTick((function(){uni.$u.formValidate(e,"change")}))},setRadioCheckedStatus:function(){this.isChecked=!this.isChecked,this.emitEvent(),"function"===typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked:function(){this.isChecked=this.checked}}};t.default=a},ff3b:function(e,t,n){var i=n("c6c9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("452ad3b8",i,!0,{sourceMap:!1,shadowMode:!1})}}]);