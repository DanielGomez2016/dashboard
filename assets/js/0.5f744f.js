/*! Copyright (c) WEDN.NET */
webpackJsonp([0,18],{116:function(t,e,n){var r,o;n(148),r=n(132);var c=n(160);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=c.render,o.staticRenderFns=c.staticRenderFns,t.exports=r},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"proxy",data:function(){return{topics:{},error:!1}},mounted:function(){},methods:{fetch:function(){var t=this;this.$http.get("/api/v1/topics").then(function(e){t.topics=e.data}).catch(function(e){t.error=e})}}}},143:function(t,e,n){e=t.exports=n(107)(),e.push([t.i,"",""])},148:function(t,e,n){var r=n(143);"string"==typeof r&&(r=[[t.i,r,""]]);n(108)(r,{});r.locals&&(t.exports=r.locals)},160:function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._c("div",[t._c("h1",{staticClass:"content-title"},[t._v("HTTP "+t._s(t.$t("proxy")))]),t._v(" "),t._c("div",[t._c("button",{on:{click:function(e){t.fetch()}}},[t._v("Fetch cnode api by proxy")])]),t._v(" "),t.error?t._c("div",[t._c("h2",[t._v(t._s(t.error.status)+" - "+t._s(t.error.statusText))]),t._v(" "),t._c("p",[t._v(t._s(t.error.body))])]):t._e(),t._v(" "),t.error?t._e():t._c("ul",t._l(t.topics.data,function(e){return t._c("li",[t._c("span",[t._v(t._s(e.title))])])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=0.5f744f.js.map