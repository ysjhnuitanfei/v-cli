webpackJsonp([12],{"8Ria":function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("IcnI"),o={name:"error",components:{},data:function(){return{}},methods:{error:function(){n.a.commit("setError",{msg:"哎呀，竟然出错了1。",show:!0})}},mounted:function(){}},i=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"error",attrs:{id:"error"}},[r._v("\n  这个页面我们来做点实验 😏"),t("br"),r._v(" 如果系统发生错误了，前端展示错误页 🤕\n  "),t("br"),r._v(" 但是经过用户不断的刷新，系统恢复了，就应该关闭错误页。😂\n  "),t("br"),r._v(" "),t("a",{staticStyle:{color:"red"},attrs:{href:"javacript:void 0"},on:{click:r.error}},[r._v("\n    点击我，我会出错。\n  ")])])},a=[];i._withStripped=!0;var c=t("18Nq"),s=Object(c.a)(o,i,a,!1,null,null,null);s.options.__file="src\\views\\Demo\\Error\\Index.vue";e.default=s.exports}});