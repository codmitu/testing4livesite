(this["webpackJsonptypescript-tutorial1"]=this["webpackJsonptypescript-tutorial1"]||[]).push([[0],{41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o=n(6),c=n.n(o),a=n(25),i=n.n(a),r=(n(41),n(14)),u=n(15),l=n(29),b=n(35),d=n(18),s=Object(l.a)({apiKey:"AIzaSyDYLVRxxyi-YBiKxSko_D4IhdQS6f-W6Zc",authDomain:"momentz-bb0ba.firebaseapp.com",databaseURL:"https://momentz-bb0ba-default-rtdb.europe-west1.firebasedatabase.app",projectId:"momentz-bb0ba",storageBucket:"momentz-bb0ba.appspot.com",messagingSenderId:"851856767940",appId:"1:851856767940:web:c786b2d8d52b26ddce0291",measurementId:"G-D014N2TS8Z"}),p=(Object(b.a)(s),Object(d.d)());p.useDeviceLanguage();var f={google:new d.b,facebook:new d.a},m=n(31),g=n(16);var h,j=function(){var e=Object(o.useRef)(),t=Object(m.a)(p),n=Object(r.a)(t,3),c=n[0],a=(n[1],n[2],function(e){!function(e){Object(u.h)(p,e,{url:"https://codmitu.github.io/testing4livesite/",handleCodeInApp:!0}).then((function(){window.localStorage.setItem("emailToSignUp",JSON.stringify({email:e}))})).catch((function(e){}))}(e),console.log("Check your e-mail and click the link to activate your account")}),i=function(e){Object(u.k)(p,e).then((function(t){var n=(e===f.facebook?u.a:u.b).credentialFromResult(t),o=null===n||void 0===n?void 0:n.accessToken,c=t.user;console.log(n,o,c)})).catch((function(t){t.code,t.message,t.email,(e===f.facebook?u.a:u.b).credentialFromError(t)}))},l=function(){Object(u.l)(p).then((function(){console.log("signed out")})).catch((function(e){}))};return Object(o.useEffect)((function(){if(Object(u.e)(p,window.location.href)){var e=JSON.parse(localStorage.getItem("emailToSignUp")||"{}").email;e||(e=window.prompt("Te rog adauga email-ul pentru confirmare.")),console.log(e),Object(u.j)(p,e,window.location.href).then((function(e){window.localStorage.removeItem("emailToSignUp")})).catch((function(e){}))}}),[]),Object(o.useEffect)((function(){if(c&&!c.email){l();var e=window.prompt("Adauga adresa ta de e-mail pentru a putea continua");e&&a(e)}}),[c]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("input",{type:"email",placeholder:"email",ref:e}),Object(g.jsx)("button",{onClick:function(){return a(e.current.value)},children:"Sign in with Email"}),Object(g.jsx)("button",{onClick:function(){return i(f.google)},children:"Sign in with Google"}),Object(g.jsx)("button",{onClick:function(){return i(f.facebook)},children:"Sign in with Facebook"}),Object(g.jsx)("button",{onClick:l,children:"Log out"}),Object(g.jsx)("div",{children:(null===c||void 0===c?void 0:c.email)+", "+(null===c||void 0===c?void 0:c.displayName)})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))},v=n(34),w=n(24);!function(e){e.DEPOSIT="deposit",e.WITHDRAW="withdraw",e.BANKRUPT="bankrupt"}(h||(h={}));var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.DEPOSIT:return e+t.payload;case h.WITHDRAW:return e-t.payload;case h.BANKRUPT:return 0;default:return e}},S=Object(w.b)({bank:k}),I=n(33),y=Object(w.c)(S,{},Object(w.a)(I.a));i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(v.a,{store:y,children:Object(g.jsx)(j,{})})}),document.getElementById("root")),O()}},[[51,1,2]]]);
//# sourceMappingURL=main.f425f802.chunk.js.map