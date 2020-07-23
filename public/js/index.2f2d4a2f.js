(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={index:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("keep-alive",{attrs:{include:["Index"]}},[r("router-view")],1)],1)},c=[],o={name:"App",components:{}},u=o,i=(r("034f"),r("2877")),s=Object(i["a"])(u,a,c,!1,null,null,null),d=s.exports,l=r("4af9"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{search:e.onSearch,cancel:e.onCancel},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e.categoryList.length?r("van-row",{staticClass:"layout-content",attrs:{gutter:"10"}},[r("van-col",{staticClass:"layout-content-left",attrs:{span:"6"}},[r("van-sidebar",{staticStyle:{width:"100px"},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.categoryList,(function(e){return r("van-sidebar-item",{key:e,attrs:{title:e}})})),1)],1),r("van-col",{staticClass:"layout-content-right",attrs:{span:"18"}},e._l(e.productListByCategory,(function(t){return r("van-card",{key:t.id,staticStyle:{"text-align":"left"},attrs:{price:t.price,desc:t.description,title:t.name,thumb:t.image||e.defaultImg},on:{click:function(r){return e.showDetail(t)}}})})),1)],1):r("div",{staticClass:"no-data"},[e._v("暂无数据")]),r("van-button",{staticClass:"add-btn",attrs:{round:"",type:"primary",size:"large"},on:{click:e.addProduct}},[e._v("+")])],1)},f=[],m=(r("4de4"),r("caad"),r("c975"),r("13d5"),r("b0c0"),r("2532"),r("96cf"),r("1da1")),h=(r("4160"),r("b64b"),r("d3b7"),r("159b"),r("7338")),v=r.n(h),g=v.a.create({timeout:12e4});g.interceptors.response.use((function(e){return e.data}),(function(e){var t=e.config||{};if("ECONNABORTED"!==e.code||-1===e.message.indexOf("timeout")||t._retry||(e.message="".concat(t.url,"接口请求超时")),e&&e.response){var r=e.response.data.errorMsg,n=void 0===r?"":r;switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",addRedirect();break;case 403:e.message="拒绝访问";break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message=n||"服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}}return console.log("".concat(t.url,"请求出错")),console.log("err"+JSON.stringify(e)),Promise.reject(e)}));var b=g;function y(e,t){return new Promise(function(){var r=Object(m["a"])(regeneratorRuntime.mark((function r(n,a){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b({url:e,method:"post",data:t});case 3:c=r.sent,n(c),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),a(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,t){return r.apply(this,arguments)}}())}function x(e,t){return console.log(e),new Promise(function(){var r=Object(m["a"])(regeneratorRuntime.mark((function r(n,a){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b({url:e,method:"get",params:t});case 3:c=r.sent,n(c),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),a(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,t){return r.apply(this,arguments)}}())}function w(e,t){return new Promise(function(){var r=Object(m["a"])(regeneratorRuntime.mark((function r(n,a){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b({url:e,method:"delete",params:t});case 3:c=r.sent,n(c),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),a(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,t){return r.apply(this,arguments)}}())}var k={name:"Index",data:function(){return{searchText:"",activeKey:0,active:0,productList:[],defaultImg:r("cc70")}},computed:{categoryList:function(){return this.productListBySearch.reduce((function(e,t){return e.includes(t.category)||e.push(t.category),e}),[])},productListBySearch:function(){var e=this;return this.productList.filter((function(t){return t.name.indexOf(e.searchText)>-1}))},productListByCategory:function(){var e=this;return this.productListBySearch.filter((function(t){return t.category===e.categoryList[e.activeKey]}))}},methods:{onSearch:function(){},onCancel:function(){},showDetail:function(e){this.$router.push("./editProduct?id=".concat(e.id))},addProduct:function(){this.$router.push("./editProduct")},getProductList:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x("/app/getProductList");case 2:e.productList=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},activated:function(){this.getProductList()},mounted:function(){this.getProductList()}},O=k,P=(r("c20c"),Object(i["a"])(O,p,f,!1,null,"b598dd34",null)),j=P.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("van-nav-bar",{attrs:{title:e.editType+"商品","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),r("van-form",{on:{submit:e.onSubmit}},[r("van-field",{attrs:{name:"rate",label:"商品图片"},scopedSlots:e._u([{key:"input",fn:function(){return[r("img",{staticClass:"product-img",attrs:{src:e.product.image||e.defaultImg,alt:""}}),r("van-uploader",{attrs:{"after-read":e.afterRead}})]},proxy:!0}])}),r("van-field",{attrs:{name:"商品名",label:"商品名",placeholder:"商品名",rules:[{required:!0,message:"请填写商品名"}]},model:{value:e.product.name,callback:function(t){e.$set(e.product,"name",t)},expression:"product.name"}}),r("van-field",{attrs:{name:"类别",label:"类别",placeholder:"类别",rules:[{required:!0,message:"请填写类别"}]},model:{value:e.product.category,callback:function(t){e.$set(e.product,"category",t)},expression:"product.category"}}),r("van-field",{attrs:{name:"价格",label:"价格",placeholder:"价格",rules:[{required:!0,message:"请填写商品名"}]},model:{value:e.product.price,callback:function(t){e.$set(e.product,"price",t)},expression:"product.price"}}),r("van-field",{attrs:{name:"描述",label:"描述",placeholder:"描述",rules:[{required:!1,message:"请填写描述"}]},model:{value:e.product.description,callback:function(t){e.$set(e.product,"description",t)},expression:"product.description"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),e.productId?r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"danger"},on:{click:e.deleteProduct}},[e._v("删除")])],1):e._e()],1)},R=[],L=r("5530"),S=r("f564"),I=r("2241"),T={name:"edit-product",data:function(){return{product:{image:""},imageFile:"",defaultImg:r("cc70")}},computed:{editType:function(){return console.log(this.$route),this.$route.query.id?"修改":"新增"},productId:function(){return this.$route.query.id}},methods:{onClickLeft:function(){this.$router.push("/index")},afterRead:function(e){new FileReader;this.product.image=e.content},onSubmit:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.productId){t.next=8;break}return t.next=3,y("./app/updateProduct",Object(L["a"])(Object(L["a"])({},e.product),{},{id:e.productId}));case 3:r=t.sent,r.id,Object(S["a"])({type:"success",message:"提交成功"}),t.next=15;break;case 8:return t.next=10,y("./app/addProduct",Object(L["a"])({},e.product));case 10:return n=t.sent,a=n.id,Object(S["a"])({type:"success",message:"新增成功"}),setTimeout((function(){e.$router.push("./editProduct?id=".concat(a))}),1e3),t.abrupt("return");case 15:e.getProduct();case 16:case"end":return t.stop()}}),t)})))()},getProduct:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x("./app/getProduct?id=".concat(e.productId));case 2:e.product=t.sent;case 3:case"end":return t.stop()}}),t)})))()},deleteProduct:function(){var e=this;I["a"].confirm({title:"提示",message:"是否要删除".concat(this.product.name)}).then(Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w("./app/deleteProduct?id=".concat(e.productId));case 2:Object(S["a"])({type:"success",message:"删除成功"}),setTimeout((function(){e.$router.push("/index")}),1e3);case 4:case"end":return t.stop()}}),t)})))).catch((function(){}))}},mounted:function(){this.productId&&this.getProduct(this.productId)}},$=T,C=(r("edca"),Object(i["a"])($,_,R,!1,null,"3e025965",null)),q=C.exports;n["a"].use(l["a"]);var B=new l["a"]({routes:[{path:"/index",name:"Index",component:j},{path:"/editProduct",name:"EditProduct",component:q}]}),E=B,K=r("b970");r("157a");n["a"].config.productionTip=!1,n["a"].use(K["a"]),new n["a"]({el:"#app",router:E,render:function(e){return e(d)}})},"7dcf":function(e,t,r){},"85ec":function(e,t,r){},c20c:function(e,t,r){"use strict";var n=r("7dcf"),a=r.n(n);a.a},cc70:function(e,t,r){e.exports=r.p+"img/null.95a36394.png"},e6ed:function(e,t,r){},edca:function(e,t,r){"use strict";var n=r("e6ed"),a=r.n(n);a.a}});
//# sourceMappingURL=index.2f2d4a2f.js.map