(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,n,a){e.exports={login:"Login_login__u3zdV",control:"Login_control__1dBGn",invalid:"Login_invalid__3JeH7",actions:"Login_actions__kYD_s"}},,,,function(e,n,a){e.exports={card:"Card_card__1nlQ1"}},function(e,n,a){e.exports={button:"Button_button__3MY5e"}},function(e,n,a){e.exports={home:"Home_home__3Y86X"}},function(e,n,a){e.exports={nav:"Navigation_nav__1MYcE"}},function(e,n,a){e.exports={"main-header":"MainHeader_main-header__2zysR"}},,,,,function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),i=a(6),o=a.n(i),s=(a(16),a(4)),l=a(2),r=a(7),d=a.n(r),u=a(0),j=function(e){return Object(u.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},b=a(3),h=a.n(b),m=a(8),p=a.n(m),O=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(p.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},g="change_Email_value",_="change_Email_value_Validation",x="change_password_value",f="change_password_value_Validation",v=function(e,n){return console.log(n),n.type===g?Object(l.a)(Object(l.a)({},e),{},{email:n.payload}):n.type===_?Object(l.a)(Object(l.a)({},e),{},{isEamilValid:e.email.includes("@")}):n.type===x?Object(l.a)(Object(l.a)({},e),{},{password:n.payload}):n.type===f?Object(l.a)(Object(l.a)({},e),{},{isPasswordValid:e.password.trim().length>6}):void 0},y=function(e){var n=Object(t.useReducer)(v,{email:"",isEmailValid:!0,password:"",isPasswordValid:!0,isFormValid:!1}),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(u.jsx)(j,{className:h.a.login,children:Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.onLogin(c.email,c.password)},children:[Object(u.jsxs)("div",{className:"".concat(h.a.control," ").concat(c.isEmailValid?"":h.a.invalid),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:c.email,onChange:function(e){i({type:g,payload:e.target.value})},onBlur:function(){i({type:_})}})]}),Object(u.jsxs)("div",{className:"".concat(h.a.control," ").concat(c.isPasswordValid?"":h.a.invalid),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",autoComplete:"true",value:c.password,onChange:function(e){i({type:x,payload:e.target.value})},onBlur:function(){i({type:f})}})]}),Object(u.jsx)("div",{className:h.a.actions,children:Object(u.jsx)(O,{type:"submit",className:h.a.btn,disabled:!(c.email.includes("@")&&c.password.trim().length>6),children:"Login"})})]})})},w=a(9),L=a.n(w),N=function(e){return Object(u.jsx)(j,{className:L.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},V=a(10),E=a.n(V),k=function(e){return Object(u.jsx)("nav",{className:E.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},C=a(11),B=a.n(C),I=function(e){return Object(u.jsxs)("header",{className:B.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(k,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var P=function(){var e=Object(t.useState)(!1),n=Object(s.a)(e,2),a=n[0],i=n[1],o=function(){i(!1)};return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(I,{isAuthenticated:a,onLogout:o}),Object(u.jsxs)("main",{children:[!a&&Object(u.jsx)(y,{onLogin:function(e,n){i(!0)}}),a&&Object(u.jsx)(N,{onLogout:o})]})]})};o.a.render(Object(u.jsx)(P,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f403c72e.chunk.js.map