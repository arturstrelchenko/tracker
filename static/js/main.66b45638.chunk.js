(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(17),i=c.n(s),a=(c(105),c(106),c(45)),j=(c(107),c(2)),l=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"header__link",children:Object(j.jsx)(a.b,{to:"/list",activeClassName:"selected",exact:!0,children:"List of tracked"})}),Object(j.jsx)("div",{className:"header__link",children:Object(j.jsx)(a.b,{to:"/",exact:!0,activeClassName:"selected",children:"Tracker"})})]})},o=c(11),u=c(3),d=c(124),b=c(126),O=c(127),h=(c(116),function(e){var t,c,n=e.user,r=Object(j.jsxs)(d.a,{children:[Object(j.jsxs)(d.a.Item,{children:["WebSite: ",Object(j.jsx)("b",{children:null===n||void 0===n?void 0:n.website})]},"0"),Object(j.jsxs)(d.a.Item,{children:["Email: ",Object(j.jsx)("b",{children:null===n||void 0===n?void 0:n.email})]},"1"),Object(j.jsxs)(d.a.Item,{children:["Company: ",Object(j.jsx)("b",{children:null===n||void 0===n||null===(t=n.company)||void 0===t?void 0:t.name})]},"3"),Object(j.jsxs)(d.a.Item,{children:["Task: ",Object(j.jsx)("b",{children:null===n||void 0===n||null===(c=n.company)||void 0===c?void 0:c.bs})]},"4"),Object(j.jsx)(d.a.Item,{children:0===n.tracker?Object(j.jsx)("p",{children:"Dont work now"}):Object(j.jsxs)(j.Fragment,{children:["Last time Tracker:",Object(j.jsxs)("span",{children:[("0"+Math.floor(n.tracker/6e4%60)).slice(-2),":"]}),Object(j.jsxs)("span",{children:[("0"+Math.floor(n.tracker/1e3%60)).slice(-2),":"]}),Object(j.jsx)("span",{children:("0"+n.tracker/10%100).slice(-2)})]})},"5")]});return console.log(n),Object(j.jsx)("div",{children:Object(j.jsx)(b.a,{overlay:r,trigger:["click"],children:Object(j.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:[null===n||void 0===n?void 0:n.name,Object(j.jsx)(O.a,{})]})})})}),x=c(34),m=(c(77),c(69)),p=c(16),f=c(1),v="ADD_MANY_USER",k="DELETE_USER",y="ADD_USER",_={users:[]},g=function(){var e=Object(x.c)((function(e){return e.users.users})),t=Object(x.b)(),c=Object(n.useState)(""),r=Object(u.a)(c,2),s=r[0],i=r[1],a=function(e){var c;t((c=e.id,{type:k,payload:c}))},l=function(e){var c={id:Date.now(),name:e,tracker:null};e.length?t({type:y,payload:c}):alert("write correct name ")};return Object(j.jsx)("div",{className:"content__admin",children:e.length?Object(j.jsx)(j.Fragment,{children:e.map((function(e,t){return Object(j.jsxs)("div",{className:"user__item",children:[Object(j.jsx)(h,{user:e}),Object(j.jsx)(m.a,{type:"danger",onClick:function(){a(e)},children:" X"})]},t)}))}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Dont have users"}),Object(j.jsx)("p",{children:"You can add user"}),Object(j.jsx)("input",{type:"text",value:s,onChange:function(e){i(e.target.value)}}),Object(j.jsx)(m.a,{type:"primary",onClick:function(){l(s)},children:"Add user"})]})})},N=(c(120),function(e){var t=e.user,c=Object(n.useState)(0),r=Object(u.a)(c,2),s=r[0],i=r[1],a=Object(n.useState)(!1),l=Object(u.a)(a,2),o=l[0],d=l[1],b=Object(n.useState)(!1),O=Object(u.a)(b,2),h=O[0],x=O[1];return Object(n.useEffect)((function(){var e=null;return o?e=setInterval((function(){i((function(e){return e+10}))}),10):o||clearInterval(e),function(){return clearInterval(e)}}),[o]),Object(j.jsxs)("div",{className:"Timers",children:[Object(j.jsx)("p",{children:"Tracker"}),Object(j.jsxs)("div",{id:"display",children:[Object(j.jsxs)("span",{children:[("0"+Math.floor(s/6e4%60)).slice(-2),":"]}),Object(j.jsxs)("span",{children:[("0"+Math.floor(s/1e3%60)).slice(-2),":"]}),Object(j.jsx)("span",{children:("0"+s/10%100).slice(-2)})]}),Object(j.jsxs)("div",{id:"buttons",children:[!o&&0===s&&Object(j.jsx)("button",{onClick:function(){return d(!0)},children:"Start"}),o&&Object(j.jsx)("button",{onClick:function(){d(!1),t.tracker=s,x(!h)},children:"Stop"}),!o&&s>0&&Object(j.jsx)("button",{onClick:function(){return i(0)},children:"Reset"}),!o&&s>0&&Object(j.jsx)("button",{onClick:function(){return d(!0)},children:"Resume"})]})]})}),S=function(e){var t=e.time,c=e.setTime,n=Object(x.c)((function(e){return e.users.users}));return Object(j.jsx)("div",{className:"content__user",children:n.length?Object(j.jsx)(j.Fragment,{children:n.map((function(e,n){return Object(j.jsxs)("div",{className:"user__item",children:[Object(j.jsx)("b",{children:e.name}),Object(j.jsx)(N,{user:e,time:t,setTime:c})]},n)}))}):Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Dont have users"})})})},C=r.a.memo(S),D=function(){return function(e){e&&fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){var t=[];return e.map((function(e){return t.push(Object(f.a)(Object(f.a)({},e),{},{tracker:0}))})),t})).then((function(t){return e({type:v,payload:t})}))}};var w=function(){var e=Object(x.b)();Object(n.useEffect)((function(){t()}),[]);var t=function(){e(D())};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(C,{})}}),Object(j.jsx)(o.a,{path:"/list",component:g})]})]})},E=c(54),I=c(95),T=c(96),M=Object(E.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(f.a)(Object(f.a)({},e),{},{users:[].concat(Object(p.a)(e.users),Object(p.a)(t.payload))});case k:return Object(f.a)(Object(f.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});case y:return Object(f.a)(Object(f.a)({},e),{},{users:[].concat(Object(p.a)(e.users),[t.payload])});default:return e}}}),R=Object(E.createStore)(M,Object(I.composeWithDevTools)(Object(E.applyMiddleware)(T.a)));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(x.a,{store:R,children:Object(j.jsx)(w,{})}),","]})}),document.getElementById("root"))},77:function(e,t,c){}},[[121,1,2]]]);
//# sourceMappingURL=main.66b45638.chunk.js.map