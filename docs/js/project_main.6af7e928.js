(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project_main"],{"1b61":function(t,e,r){t.exports=r.p+"img/search.4c11b867.png"},2532:function(t,e,r){"use strict";var n=r("23e7"),o=r("5a34"),a=r("1d80"),i=r("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(a(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"28ea":function(t,e,r){t.exports=r.p+"img/home.796065fa.png"},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),a=r("b622"),i=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6f63":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("html",{attrs:{lang:"en"}},[n("body",[n("div",{staticClass:"content_project",attrs:{"padding-top":"5px",align:"center"}},[n("h1",[t._v(t._s(t.$route.query.projName))]),n("h2",[t._v(t._s(t.projInfo.song))]),n("router-link",{staticClass:"button",staticStyle:{height:"70px",width:"400px"},attrs:{to:{path:"/project_summary_joined",query:{userId:t.$route.query.userId,projName:t.$route.query.projName}},tag:"button"}},[t._v("Summary Page")]),n("router-link",{staticClass:"button",staticStyle:{height:"70px",width:"400px"},attrs:{to:{path:"/sheetmusic",query:{userId:t.$route.query.userId,projName:t.$route.query.projName}},tag:"button"}},[t._v("Sheet Music")]),n("router-link",{staticClass:"button",staticStyle:{height:"70px",width:"400px"},attrs:{to:{path:"/all_threads",query:{userId:t.$route.query.userId,projName:t.$route.query.projName}},tag:"button"}},[t._v("View All Threads")]),n("router-link",{staticClass:"button",staticStyle:{height:"70px",width:"195px"},attrs:{to:{path:"/waitlist",query:{userId:t.$route.query.userId,projName:t.$route.query.projName}},tag:"button"}},[t._v("Wait List")]),n("router-link",{staticClass:"button",staticStyle:{height:"70px",width:"195px"},attrs:{to:{path:"/invite",query:{userId:t.$route.query.userId,projName:t.$route.query.projName}},tag:"button"}},[t._v("Invite")]),n("div",{staticClass:"box"},[n("h3",{staticStyle:{color:"black","text-align":"left"}},[t._v("Announcements")]),n("ul",{staticStyle:{color:"black"}},[t._l(t.announcements,(function(e){return n("li",{key:e},[n("h4",{staticStyle:{color:"black","text-align":"left"}},[t._v(" "+t._s(e)+" ")])])})),0===t.announcements.length?n("span",[t._v(" <empty> ")]):t._e()],2),n("form",{on:{submit:function(e){return e.preventDefault(),t.add_announcement(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.new_announcement,expression:"new_announcement"}],attrs:{type:"text",placeholder:"write new announcement here",required:""},domProps:{value:t.new_announcement},on:{input:function(e){e.target.composing||(t.new_announcement=e.target.value)}}}),n("button",{staticClass:"button",staticStyle:{color:"white","background-color":"#f2c94c",width:"auto"},attrs:{id:"app",type:"submit"}},[t._v(" Post Announcement ")])])]),t.ongoing?n("div",[n("a",{staticClass:"music_submit_button",staticStyle:{width:"380px"},attrs:{href:"https://cs473pitchperfect-my.sharepoint.com/:f:/g/personal/elianakim_cs473pitchperfect_onmicrosoft_com/EttkFl9TrLNKrSXENEIs-TgBcQAw8NVS0QK8124XMJEQwQ"},on:{click:t.show_instruction}},[t._v(" Submit Your Recordings ")]),n("router-link",{staticClass:"button",staticStyle:{height:"70px",width:"400px"},attrs:{to:{path:"/endcollaboration",query:{userId:t.$route.query.userId,projName:t.$route.query.projName}},tag:"button"}},[t._v("End Collaboration")])],1):t._e()],1),n("br"),n("br"),n("br"),n("br"),n("nav",{attrs:{id:"tabbar"}},[n("ul",{attrs:{id:"tab_wrap"}},[n("li",[n("router-link",{attrs:{to:{path:"/library",query:{userId:t.$route.query.userId}}}},[n("img",{attrs:{src:r("28ea"),width:"100px"}})])],1),n("li",[n("router-link",{attrs:{to:{path:"/projects_page",query:{userId:t.$route.query.userId}}}},[n("img",{attrs:{src:r("1b61"),width:"100px"}})])],1),n("li",[n("router-link",{attrs:{to:{path:"/teamFormation",query:{userId:t.$route.query.userId}}}},[n("img",{attrs:{src:r("fbc1"),width:"100px"}})])],1),n("li",[n("router-link",{attrs:{to:{path:"/profile",query:{userId:t.$route.query.userId,profileId:t.$route.query.userId}}}},[n("img",{attrs:{src:r("b31e"),width:"100px"}})])],1)])])])])},o=[],a=(r("caad"),r("2532"),r("dc59"),firebase.firestore().collection("projects")),i={data:function(){return{projInfo:{team:"",song:"",parts:"",level:"",blurb:"",members:[],projs_end:[],ongoing:!0,announcements:[]},ongoing:!0,announcements:[],new_announcement:""}},created:function(){var t=this,e=this.$route.query.projName;a.doc(e).get().then((function(r){if(r.exists){var n=r.data();t.projInfo=n,t.projInfo.projs_end.includes(e)?t.ongoing=!1:t.ongoing=!0,t.announcements=t.projInfo.announcements}else window.alert("ERROR: No such project exist!")}))["catch"]((function(t){console.log("Error retrieving project info: ",t)}))},methods:{add_announcement:function(){var t=this.new_announcement;if(""==t)window.alert("empty input!");else{var e=this.$route.query.projName;this.announcements.push(t),a.doc(e).update({announcements:firebase.firestore.FieldValue.arrayUnion(t)})}},show_instruction:function(){window.alert("For 'First Name', please fill your 'team name'. For 'Last Name', please write down your 'nickname'.")}}},s=i,u=r("2877"),c=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),a=r("5135"),i=Object.defineProperty,s={},u=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var r=[][t],c=!!a(e,"ACCESSORS")&&e.ACCESSORS,p=a(e,0)?e[0]:u,l=a(e,1)?e[1]:void 0;return s[t]=!!r&&!o((function(){if(c&&!n)return!0;var t={length:-1};c?i(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,p,l)}))}},b31e:function(t,e,r){t.exports=r.p+"img/profile.1b4b8a61.png"},caad:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").includes,a=r("44d2"),i=r("ae40"),s=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!s},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},dc59:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("cc84"),o="firebase",a="8.1.1";
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
n["a"].registerVersion(o,a,"app");r("2e66"),r("e71f");var i={apiKey:"AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",authDomain:"fyeesh.firebaseapp.com",databaseURL:"https://fyeesh.firebaseio.com",projectId:"fyeesh",storageBucket:"fyeesh.appspot.com",messagingSenderId:"167708075968",appId:"1:167708075968:web:7b487c33ee10ec616fca25",measurementId:"G-LGEWZSYSGG"};n["a"].initializeApp(i);var s=n["a"].firestore(),u=n["a"].storage()},fbc1:function(t,e,r){t.exports=r.p+"img/add.1e36be99.png"}}]);
//# sourceMappingURL=project_main.6af7e928.js.map