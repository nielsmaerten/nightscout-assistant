(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,g=[];d<r.length;d++)o=r[d],a[o]&&g.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/nightscout-assistant/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0819":function(t,e,s){},"4fc5":function(t,e){t.exports="^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9¡-￿](?:-)*)*(?:[a-z0-9¡-￿])+)(?:\\.(?:[a-z0-9¡-￿](?:-)*)*(?:[a-z0-9¡-￿])+)*(?:\\.(?:[a-z0-9¡-￿]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=s("5f34"),i=s("55d9"),o=s("fe83"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],l=(s("96cf"),s("3b8d")),u=s("2f62"),d=s("5fb0");n["a"].use(u["a"]);var g=new u["a"].Store({state:{app:{gaEnabled:!1},languages:{active:void 0,available:d.languages.available,loaded:[]},user:{settings:{nsUrl:void 0,unit:void 0,secretHash:void 0},isAuthenticated:!1,email:void 0}},mutations:{setAuthStatus:function(t,e){t.user.isAuthenticated=e},setLanguage:function(t,e){t.languages.active=e},setUser:function(t,e){t.user.email=e,t.user.isAuthenticated=!0},setUserSettings:function(t,e){t.user.nsUrl=e.nsUrl,t.user.unit=e.unit},enableGa:function(t){t.app.gaEnabled=!0}},actions:{changeLanguage:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].changeLanguage(s);case 2:e.commit("setLanguage",s);case 3:case"end":return t.stop()}},t)}));function e(e,s){return t.apply(this,arguments)}return e}()}}),m=g,p={created:function(){if(!(firebase.apps.length>0)){var t={apiKey:"AIzaSyArdp0nQPWy--mMYCNIuR5WfAiaJBylAOk",authDomain:"nightscout-974f6.firebaseapp.com",databaseURL:"https://nightscout-974f6.firebaseio.com",projectId:"nightscout-974f6",storageBucket:"nightscout-974f6.appspot.com",messagingSenderId:"348868123018"};firebase.initializeApp(t),firebase.auth().onAuthStateChanged(function(t){if(t&&(m.commit("setUser",t.email),!m.state.app.gaEnabled)){var e=document.createElement("script");e.src="https://www.googletagmanager.com/gtag/js?id=UA-68993648-4",document.head.appendChild(e),m.commit("enableGa")}})}}},h=p,v=s("2877"),f=Object(v["a"])(h,r,c,!1,null,null,null),_=f.exports,b=s("8c4f"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ns-notification"),s("ns-header"),s("ns-example-conversation"),t.$store.state.user.isAuthenticated?s("ns-user-settings"):t._e(),t.$store.state.user.isAuthenticated?t._e():s("ns-user-signin"),s("ns-footer"),s("github-ribbon")],1)},x=[],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"notification is-warning"},[t._v("\n    I am aware Nightscout Status is currently down. 🙁\n    "),s("a",{attrs:{href:"https://github.com/nielsmaerten/nightscout-assistant/discussions/118"}},[t._v("More info here")]),t._v(".\n    "),s("br"),s("a",{attrs:{href:"https://glucocheck.app"}},[t._v("Gluco Check")]),t._v(" is a possible alternative, though it is only available in English.\n  ")])])}],$=(s("7514"),s("7f7f"),{name:"ns-notification",computed:{currentLanguage:function(){var t=this;return this.$store.state.languages.available.find(function(e){return e.code===t.$store.state.languages.active}).name}}}),E=$,O=Object(v["a"])(E,y,S,!1,null,null,null),w=O.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-5 mx-10"},[s("h1",[t._v(t._s(t.$t("index.header.title")))]),s("h2",{staticClass:"mb-1"},[t._v(t._s(t.$t("index.header.subtitle")))]),s("div",{staticClass:"has-text-right"},[s("language-selector")],1),t.comingSoon?s("div",{staticClass:"is-offset-one-quarter column notification is-half"},[s("span",{staticClass:"has-text-weight-bold"},[t._v("Coming soon!")]),t._v("\n    Support for\n    "),s("em",[t._v(t._s(t.currentLanguage))]),t._v(" is under way.\n    "),s("br"),s("br"),t._v("\n    If you're fluent in English and "+t._s(t.currentLanguage)+", we could use your\n    help! "),s("br"),t._v("Reach out on\n    "),s("a",{attrs:{href:"https://github.com/nielsmaerten/nightscout-assistant/issues"}},[t._v("GitHub")]),t._v("\n    or\n    "),s("a",{attrs:{href:"https://go.niels.me/nightscout-reddit"}},[t._v("Reddit")]),t._v("\n    if you'd like to help translating.\n  ")]):t._e()])},A=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select is-small"},[s("select",{on:{change:t.changeLanguage}},t._l(t.$store.state.languages.available,function(e){return s("option",{key:e.code,domProps:{value:e.code,selected:e.code===t.$store.state.languages.active}},[t._v(t._s(e.name))])}),0)])},T=[],N={name:"language-selector",methods:{changeLanguage:function(t){this.$router.push("/".concat(t.target.value,"/").concat(this.$route.name,"/"))}}},U=N,L=Object(v["a"])(U,R,T,!1,null,null,null),k=L.exports,j=s("5fb0"),H={name:"ns-header",components:{LanguageSelector:k},computed:{currentLanguage:function(){var t=this;return this.$store.state.languages.available.find(function(e){return e.code===t.$store.state.languages.active}).name},comingSoon:function(){return-1!==j.languages.comingSoon.indexOf(this.$store.state.languages.active)}}},P=H,M=Object(v["a"])(P,I,A,!1,null,null,null),D=M.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-8 mx-10"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-offset-one-quarter is-half"},[s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[t._m(0),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.$t("index.example-conversation.hey-google")))]),s("br"),s("i18next",{attrs:{path:"index.example-conversation.ask-google",tag:"span"}},[s("em",[t._v(t._s(t.$t("common.invocation")))])])],1)])])])]),s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[t._m(1),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.$t("common.invocation")))]),s("br"),t._v("\n                "+t._s(t.$t("index.example-conversation.nightscout-status-resp"))+"\n              ")])])])])])])])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-64x64"},[n("img",{attrs:{src:s("b2ff"),alt:"Google Assistant logo"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-64x64"},[n("img",{attrs:{src:s("7990"),alt:"Nightscout logo"}})])])}],W={name:"ns-example-conversation"},B=W,Y=Object(v["a"])(B,F,G,!1,null,null,null),z=Y.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mt-8 mx-10",attrs:{id:"nightscout-settings"}},[s("form",{on:{submit:t.submit}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-three-fifths"},[s("label",{staticClass:"label"},[t._v(t._s(t.$t("index.settings.your-site")))]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.settings.nsUrl,expression:"user.settings.nsUrl"}],staticClass:"input",class:{"is-danger":!t.nsUrlIsValid},attrs:{type:"text",id:"nightscout-url",placeholder:"https://MY-NS-SITE.herokuapp.com"},domProps:{value:t.user.settings.nsUrl},on:{input:function(e){e.target.composing||t.$set(t.user.settings,"nsUrl",e.target.value)}}})]),t.nsUrlIsValid?t._e():s("p",{staticClass:"help is-danger"},[t._v("\n          "+t._s(t.$t("index.settings.invalid-url"))+"\n        ")])]),s("div",{staticClass:"column"},[s("label",{staticClass:"label"},[t._v(t._s(t.$t("index.settings.unit")))]),s("div",{staticClass:"control"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.user.settings.unit,expression:"user.settings.unit"}],attrs:{required:"",id:"nightscout-unit"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.user.settings,"unit",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"mg/dl"}},[t._v(t._s(t.$t("index.settings.mg-dl")))]),s("option",{attrs:{value:"mmol/l"}},[t._v("\n                "+t._s(t.$t("index.settings.mmol-l"))+"\n              ")])])])])]),s("div",{staticClass:"column"},[s("label",{staticClass:"label"},[t._v("\n          "+t._s(t.$t("index.settings.api-secret"))+"\n          "),s("span",{staticClass:"text-xs has-text-grey-light"},[t._v("\n            "+t._s(t.$t("index.settings.optional"))+"\n          ")])]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.settings.apiSecret,expression:"user.settings.apiSecret"}],staticClass:"input",attrs:{placeholder:t.$t("index.settings.unchanged"),type:"password",id:"nightscout-api-secret"},domProps:{value:t.user.settings.apiSecret},on:{focus:function(e){t.showApiSecretInfo=!0},input:function(e){e.target.composing||t.$set(t.user.settings,"apiSecret",e.target.value)}}})])])]),s("article",{directives:[{name:"show",rawName:"v-show",value:t.showApiSecretInfo,expression:"showApiSecretInfo"}],staticClass:"message",attrs:{id:"api-secret-info"}},[s("div",{staticClass:"message-header"},[s("p",{staticClass:"text-sm"},[t._v("\n          "+t._s(t.$t("index.settings.api-secret-info.title"))+"\n        ")]),s("button",{staticClass:"delete",attrs:{type:"button","aria-label":"delete"},on:{click:function(e){t.showApiSecretInfo=!1}}})]),s("div",{staticClass:"message-body"},[s("p",{staticClass:"text-sm"},[s("i18next",{attrs:{path:"index.settings.api-secret-info.info"}},[s("span",{staticClass:"is-family-code has-text-info"},[t._v("AUTH_DEFAULT_ROLES")]),s("span",{staticClass:"is-family-code has-text-info"},[t._v("denied")])])],1)])]),s("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n      "+t._s(t.$t("index.settings.save"))+"\n    ")]),s("button",{staticClass:"button is-secondary ml-3",on:{click:t.signOut}},[t._v("\n      "+t._s(t.$t("index.settings.sign-out"))+"\n    ")])]),t.saveSuccess?s("ns-modal-saved",{attrs:{nsUrl:t.user.settings.nsUrl},on:{closed:function(e){t.saveSuccess=!1}}}):t._e()],1)},q=[],J=(s("4917"),s("3b2b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal is-active"},[s("div",{staticClass:"modal-background",on:{click:function(e){return t.close()}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.$t("index.settings.settings-saved"))+"\n      ")])]),s("section",{staticClass:"modal-card-body"},[s("article",{staticClass:"message mt-2",class:{"is-warning":t.siteStatus<0,"is-success":t.siteStatus>0}},[0===t.siteStatus?s("div",{staticClass:"message-header"},[t._v("\n          "+t._s(t.$t("index.settings.one-moment-please"))+"\n        ")]):t._e(),0===t.siteStatus?s("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.$t("index.settings.testing-your-site"))+"\n          "),s("progress",{staticClass:"progress is-small is-dark mt-5",attrs:{max:"100"}})]):t._e(),t.siteStatus<0?s("div",{staticClass:"message-header"},[t._v("\n          "+t._s(t.$t("index.settings.oops"))+"\n        ")]):t._e(),t.siteStatus<0?s("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.$t("index.settings.unable-to-get-reading"))+"\n          "),s("br"),s("em",[t._v(t._s(t.nsUrl))]),s("div",{staticClass:"content"},[s("ul",[s("li",[t._v(t._s(t.$t("index.settings.invalid-url")))]),s("li",[t._v(t._s(t.$t("index.settings.use-token-url")))])])])]):t._e(),t.siteStatus>0?s("div",{staticClass:"message-header"},[t._v("\n          "+t._s(t.$t("index.settings.done"))+"\n        ")]):t._e(),t.siteStatus>0?s("div",{staticClass:"message-body"},[t._v("\n          "+t._s(t.$t("index.settings.success-msg"))+"\n          "),s("em",[t._v(t._s(t.$t("common.full-invocation")))])]):t._e()]),t.routinesSupported&&t.siteStatus>0?s("article",{staticClass:"message is-info mt-2"},[s("div",{staticClass:"message-header"},[t._v("\n          "+t._s(t.$t("index.settings.hint-header"))+"\n        ")]),s("div",{staticClass:"message-body"},[s("i18next",{attrs:{path:"index.settings.hint"}},[s("a",{attrs:{target:"_blank",href:"https://support.google.com/googlehome/answer/7029585?co=GENIE.Platform%3DAndroid&hl="+this.$i18n.i18next.language}},[t._v(t._s(t.$t("index.settings.hint-routines")))]),s("br")])],1)]):t._e()]),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success",on:{click:t.close}},[t._v("OK")]),s("br")])])])}),K=[],X=s("5fb0"),Z={name:"ns-modal-saved",props:{nsUrl:{required:!0}},computed:{routinesSupported:function(){return-1!==X.languages.supportingRoutines.indexOf(this.$i18n.i18next.language)}},data:function(){return{siteStatus:0}},methods:{close:function(){document.getElementById("root").classList.remove("is-clipped"),this.$emit("closed")}},mounted:function(){var t=this;document.getElementById("root").classList.add("is-clipped");var e=firebase.functions().httpsCallable("validateUrl");e().then(function(e){t.siteStatus=e.data.ok?1:-1}).catch(function(t){console.error("Network failure"),console.error(t)})}},Q=Z,tt=Object(v["a"])(Q,J,K,!1,null,null,null),et=tt.exports,st={name:"ns-user-settings",components:{nsModalSaved:et},computed:{nsUrlIsValid:function(){if(!this.user.settings.nsUrl)return!0;var t=RegExp(s("4fc5")),e=this.user.settings.nsUrl.match(t);return e&&e.length>0}},data:function(){return{saveSuccess:!1,showApiSecretInfo:!1,user:{settings:{nsUrl:void 0,unit:void 0,apiSecret:void 0}}}},mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,firebase.firestore().collection("users").doc(this.$store.state.user.email).get();case 2:e=t.sent,e.exists&&(s=e.data(),this.user.settings.nsUrl=s.nsUrl,this.user.settings.unit=s.unit,this.$store.commit("setUserSettings",this.user.settings));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{signOut:function(){firebase.auth().signOut().then(function(){window.location.reload()})},submit:function(t){var e=this;t.preventDefault();var s={nsUrl:this.user.settings.nsUrl,unit:this.user.settings.unit};if(null!=this.user.settings.apiSecret&&this.user.settings.apiSecret.length>0){var n=new jsSHA("SHA-1","TEXT");n.update(this.user.settings.apiSecret),s.secretHash=n.getHash("HEX")}firebase.firestore().collection("users").doc(this.$store.state.user.email).set(s,{merge:!0}).then(function(){e.saveSuccess=!0})}}},nt=st,at=Object(v["a"])(nt,V,q,!1,null,null,null),it=at.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container",attrs:{id:"authentication"}},[s("p",{staticClass:"has-text-centered mt-8"},[t._v("\n    "+t._s(t.$t("index.settings.connect"))+"\n  ")]),s("div",{attrs:{id:"firebaseui-auth-container"}})])},rt=[],ct={name:"ns-user-settings",mounted:lt};function lt(){var t={signInSuccessUrl:location.href,signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],tosUrl:ut,privacyPolicyUrl:ut},e=firebaseui.auth.AuthUI.getInstance()||new firebaseui.auth.AuthUI(firebase.auth());e.start("#firebaseui-auth-container",t)}function ut(){Ht.push("/terms")}var dt=ct,gt=Object(v["a"])(dt,ot,rt,!1,null,null,null),mt=gt.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"mx-10 mt-10"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"text-xs"},[s("a",{attrs:{href:"https://go.niels.me/nightscout-reddit"}},[t._v("\n          "+t._s(t.$t("index.footer.help-faq")))]),s("br"),s("a",{attrs:{href:"https://github.com/nielsmaerten/nightscout-assistant/issues"}},[t._v(t._s(t.$t("index.footer.bugs")))])])]),s("div",{staticClass:"column"},[s("p",{staticClass:"text-xs has-text-right"},[s("router-link",{attrs:{to:"/"+t.$store.state.languages.active+"/terms"}},[t._v("\n          "+t._s(t.$t("index.footer.tos"))+"\n        ")]),s("br"),t._v("\n        "+t._s(t.$t("common.google-tm"))+"\n        "),s("br"),s("i18next",{attrs:{path:"common.nightscout-no-affl"}},[s("a",{attrs:{href:"http://nightscout.info"}},[t._v("\n            "+t._s(t.$t("common.nightscout-project"))+"\n          ")])]),s("br")],1)])])])},ht=[],vt={name:"ns-footer"},ft=vt,_t=Object(v["a"])(ft,pt,ht,!1,null,null,null),bt=_t.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:"github-corner",attrs:{href:"https://github.com/nielsmaerten/nightscout-assistant","aria-label":"View source on GitHub"}},[s("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},xt=[],yt={name:"github-ribbon"},St=yt,$t=(s("7613"),Object(v["a"])(St,Ct,xt,!1,null,null,null)),Et=$t.exports,Ot={name:"home",components:{nsHeader:D,nsExampleConversation:z,nsUserSettings:it,nsUserSignin:mt,nsFooter:bt,nsNotification:w,githubRibbon:Et}},wt=Ot,It=Object(v["a"])(wt,C,x,!1,null,null,null),At=It.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"is-pulled-right mt-4"},[s("language-selector"),s("router-link",{staticClass:"button mx-4 is-small",attrs:{to:"/"+t.$store.state.languages.active+"/"}},[t._v(t._s(t.$t("terms.back")))])],1),s("section",{staticClass:"mx-4 mt-5 text-sm",attrs:{id:"tos"}},[s("h2",{staticClass:"mb-4 text-base"},[s("span",{staticClass:"mr-5"},[t._v(t._s(t.$t("terms.privacy-policy.title")))])]),s("i18next",{attrs:{path:"terms.privacy-policy.intro",tag:"p"}},[t._v("\n      https://nielsmaerten.github.io/nightscout-assistant\n    ")]),s("strong",[t._v(t._s(t.$t("terms.privacy-policy.collection-title")))]),s("p",[t._v(t._s(t.$t("terms.privacy-policy.collection-desc")))]),s("strong",[t._v(t._s(t.$t("terms.privacy-policy.use-title")))]),s("p",[t._v(t._s(t.$t("terms.privacy-policy.use-desc")))]),s("strong",[t._v(t._s(t.$t("terms.privacy-policy.sharing-title")))]),s("p",{domProps:{innerHTML:t._s(t.$t("terms.privacy-policy.sharing-desc"))}}),s("strong",[t._v(t._s(t.$t("terms.privacy-policy.deleting-title")))]),s("i18next",{attrs:{path:"terms.privacy-policy.deleting-desc",tag:"p"}},[s("a",{attrs:{href:"https://myaccount.google.com/permissions"}},[t._v(t._s(t.$t("terms.privacy-policy.deleting-google-account")))])]),s("strong",[t._v(t._s(t.$t("terms.privacy-policy.analytics-title")))]),s("i18next",{attrs:{path:"terms.privacy-policy.analytics-desc",tag:"p"}},[s("span",[t._v("https://nielsmaerten.github.io/nightscout-assistant")]),s("a",{attrs:{href:"https://tools.google.com/dlpage/gaoptout/"}},[t._v("https://tools.google.com/dlpage/gaoptout/")])]),s("h2",{staticClass:"mb-4 mt-10 text-base"},[t._v(t._s(t.$t("terms.health.title")))]),s("p",[t._v(t._s(t.$t("terms.health.disclaimer")))]),s("h2",{staticClass:"mb-4 mt-10 text-base"},[t._v(t._s(t.$t("terms.license-and-tos")))]),s("p",[t._v("MIT License: Copyright 2019 Niels Maerten")]),s("p",[t._v('\n      Permission is hereby granted, free of charge, to any person obtaining a\n      copy of this software and associated documentation files (the\n      "Software"), to deal in the Software without restriction, including\n      without limitation the rights to use, copy, modify, merge, publish,\n      distribute, sublicense, and/or sell copies of the Software, and to\n      permit persons to whom the Software is furnished to do so, subject to\n      the following conditions:\n    ')]),s("p",[t._v("\n      The above copyright notice and this permission notice shall be included\n      in all copies or substantial portions of the Software.\n    ")]),s("p",[t._v('\n      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n      OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\n      IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\n      CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\n      TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\n      SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n    ')]),s("p",{staticClass:"has-text-right text-xs"},[s("br"),t._v(t._s(t.$t("common.google-tm"))+"\n      "),s("br"),s("i18next",{attrs:{path:"common.nightscout-no-affl"}},[s("a",{attrs:{href:"http://nightscout.info"}},[t._v("\n          "+t._s(t.$t("common.nightscout-project"))+"\n        ")])])],1)],1)])},Tt=[],Nt={name:"terms",components:{LanguageSelector:k}},Ut=Nt,Lt=(s("ab3b"),Object(v["a"])(Ut,Rt,Tt,!1,null,"9ed33d30",null)),kt=Lt.exports;n["a"].use(b["a"]);var jt=new b["a"]({mode:"hash",base:"/nightscout-assistant/",routes:[{path:"/",redirect:"/en/home"},{path:"/terms",redirect:"/en/terms"},{path:"/:lng",redirect:"/:lng/home"},{path:"/:lng/home",name:"home",component:At},{path:"/:lng/terms",name:"terms",component:kt}]});jt.beforeEach(function(t,e,s){m.state.languages.active!==t.params.lng&&m.dispatch("changeLanguage",t.params.lng),s()});var Ht=jt;n["a"].config.productionTip=!1,n["a"].use(i["a"]),a["a"].use(o["a"]).init({fallbackLng:"en",defaultNS:"translation",backend:{loadPath:location.origin+"/nightscout-assistant/locales/{{lng}}.json"}});var Pt=new i["a"](a["a"]);new n["a"]({router:Ht,store:m,i18n:Pt,render:function(t){return t(_)}}).$mount("#app")},"5fb0":function(t,e){t.exports={languages:{supportingRoutines:["en","it","nl","de","ja","ko","es","fr","no"],comingSoon:["ja","pt","no"],available:[{name:"Dansk",code:"da"},{name:"Deutsch",code:"de"},{name:"English",code:"en"},{name:"Español",code:"es"},{name:"Français",code:"fr"},{name:"Italiano",code:"it"},{name:"Polski",code:"pl"},{name:"Português",code:"pt"},{name:"Nederlands",code:"nl"},{name:"Norsk",code:"no"},{name:"Svenska",code:"sv"},{name:"日本語",code:"ja"}]}}},7613:function(t,e,s){"use strict";var n=s("ede3"),a=s.n(n);a.a},7990:function(t,e,s){t.exports=s.p+"img/nightscout.319c2df7.png"},ab3b:function(t,e,s){"use strict";var n=s("0819"),a=s.n(n);a.a},b2ff:function(t,e,s){t.exports=s.p+"img/assistant.cfcb8291.png"},ede3:function(t,e,s){}});
//# sourceMappingURL=app.bab7baf8.js.map