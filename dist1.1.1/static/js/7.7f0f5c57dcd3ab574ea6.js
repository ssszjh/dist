webpackJsonp([7],{Rvy4:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={data:function(){return{imgs:[]}},created:function(){var t=this;this.$axios.get("https://www.apiopen.top/journalismApi").then(function(i){t.imgs=i.data.data.war;for(var e=0;e<t.imgs.length;e++)t.imgs[e].picInfo[0].url=t.imgs[e].picInfo[0].url.replace("http","https")}).catch(function(t){console.log(t)})}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tmpl"},[e("nav-bar",{attrs:{title:"新闻列表"}}),t._v(" "),e("ul",{staticClass:"mui-table-view mui-table-view-chevron"},t._l(t.imgs,function(i,s){return e("li",{key:s,staticClass:"mui-table-view-cell mui-media"},[e("router-link",{attrs:{to:{name:"newscontent",query:{title:i.title}}}},[e("a",{staticClass:"mui-navigate-right"},[e("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:i.picInfo[0].url}}),t._v(" "),e("div",{staticClass:"mui-media-body"},[t._v("\n                        "+t._s(i.title)+"\n                        "),e("p",{staticClass:"mui-ellipsis"},[t._v("\n                            "+t._s(i.digest)+"\n                        ")])])])])],1)}))],1)},staticRenderFns:[]};var n=e("VU/8")(s,a,!1,function(t){e("dxKl")},null,null);i.default=n.exports},dxKl:function(t,i){}});