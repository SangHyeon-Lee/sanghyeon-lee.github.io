(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["thankyou"],{"1b61":function(e,r,t){e.exports=t.p+"img/search.4c11b867.png"},"28ea":function(e,r,t){e.exports=t.p+"img/home.796065fa.png"},"2a03":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("html",{attrs:{lang:"en"}},[o("body",[o("div",{staticClass:"content_project",attrs:{"padding-top":"50px",align:"center"}},[o("br"),o("br"),o("br"),o("br"),o("br"),o("br"),o("h2",[e._v("Thank you!")]),o("h3",[e._v("Team FYEESH")]),o("br"),o("br"),o("form",{on:{submit:function(r){return r.preventDefault(),e.send(r)}}},[o("router-link",{staticClass:"button",staticStyle:{height:"60px",width:"150px"},attrs:{to:{path:"/library",query:{userId:e.$route.query.userId,projName:e.$route.query.projName}},tag:"button"},nativeOn:{click:function(r){return e.send(r)}}},[e._v(" Home ")])],1)]),o("nav",{attrs:{id:"tabbar"}},[o("ul",{attrs:{id:"tab_wrap"}},[o("li",[o("router-link",{attrs:{to:{path:"/library",query:{userId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("28ea"),width:"100px"}})])],1),o("li",[o("router-link",{attrs:{to:{path:"/projects_page",query:{userId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("1b61"),width:"100px"}})])],1),o("li",[o("router-link",{attrs:{to:{path:"/teamFormation",query:{userId:e.$route.query.userId,profileId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("fbc1"),width:"100px"}})])],1),o("li",[o("router-link",{attrs:{to:{path:"/profile",query:{userId:e.$route.query.userId,profileId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("b31e"),width:"100px"}})])],1)])])])])},n=[],a=(t("b0c0"),t("dc59"),firebase.firestore().collection("projects")),i=firebase.firestore().collection("userinfo"),s={data:function(){return{projInfo:{team:"",song:"",parts:"",level:"",blurb:"",members:[],ongoing:!1},userinfo:{name:"",image_url:"",best_num:0},members_url:[]}},created:function(){var e=this,r=this.$route.query.projName;console.log("hihihi"),a.doc(r).get().then((function(r){if(r.exists){var t,o=r.data();for(e.projInfo=o,t=0;t<e.projInfo.members.length;t++)i.doc(e.projInfo.members[t]).get().then((function(r){if(r.exists){var t=r.data();e.userinfo=t,e.members_url.push([e.userinfo.name,e.userinfo.image_url,e.userinfo.best_num])}}))}else window.alert("ERROR: No such project exist!")}))["catch"]((function(e){console.log("Error retrieving project info: ",e)}))},methods:{send:function(){console.log("byebyebye");this.$route.query.userId;var e=this.$route.query.projName;a.doc(e).update({ongoing:!1})["catch"]((function(e){console.error("Error yee : ",e)}))}}},u=s,c=t("2877"),p=Object(c["a"])(u,o,n,!1,null,null,null);r["default"]=p.exports},b0c0:function(e,r,t){var o=t("83ab"),n=t("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,u="name";o&&!(u in a)&&n(a,u,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},b31e:function(e,r,t){e.exports=t.p+"img/profile.1b4b8a61.png"},dc59:function(e,r,t){"use strict";t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return u}));var o=t("cc84"),n="firebase",a="8.1.1";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
o["a"].registerVersion(n,a,"app");t("2e66"),t("e71f");var i={apiKey:"AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",authDomain:"fyeesh.firebaseapp.com",databaseURL:"https://fyeesh.firebaseio.com",projectId:"fyeesh",storageBucket:"fyeesh.appspot.com",messagingSenderId:"167708075968",appId:"1:167708075968:web:7b487c33ee10ec616fca25",measurementId:"G-LGEWZSYSGG"};o["a"].initializeApp(i);var s=o["a"].firestore(),u=o["a"].storage()},fbc1:function(e,r,t){e.exports=t.p+"img/add.1e36be99.png"}}]);
//# sourceMappingURL=thankyou.94e36e8d.js.map