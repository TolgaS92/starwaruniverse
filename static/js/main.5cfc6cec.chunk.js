(this.webpackJsonpstarwaruniverse=this.webpackJsonpstarwaruniverse||[]).push([[0],{12:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(6),a=c.n(n),i=(c(12),c(0));var l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-light bg-danger p-5 d-flex justify-content-center",children:Object(i.jsx)("h1",{className:"mb-0",children:"Starwars Cast"})})})},j=c(4),h=c(3),o=c.n(h),d=c(5),b=c(7);function u(){return(u=Object(b.a)(o.a.mark((function e(t,c){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/".concat(t),Object(d.a)(Object(d.a)({},null!==c&&void 0!==c?c:{}),{},{headers:{Accept:"application/json","Content-Type":"application/json"}}));case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){var t=e.person;return Object(i.jsxs)("div",{className:"mb-5 mt-5",children:[Object(i.jsxs)("li",{children:[" Name : ",t.name]}),Object(i.jsxs)("li",{children:[" height : ",t.height]}),Object(i.jsxs)("li",{children:[" mass : ",t.mass]}),Object(i.jsxs)("li",{children:[" hair_color : ",t.hair_color]}),Object(i.jsxs)("li",{children:[" skin_color : ",t.skin_color]}),Object(i.jsxs)("li",{children:[" eye_color : ",t.eye_color]}),Object(i.jsxs)("li",{children:[" birth_year : ",t.birth_year]}),Object(i.jsxs)("li",{children:[" gender : ",t.gender]}),Object(i.jsxs)("li",{children:[" homeworld : ",t.homeworld]}),Object(i.jsxs)("li",{children:[" films : ",t.films]}),Object(i.jsxs)("li",{children:[" species : ",t.species]}),Object(i.jsxs)("li",{children:[" vehicles : ",t.vehicles]}),Object(i.jsxs)("li",{children:[" starships : ",t.starships]}),Object(i.jsxs)("li",{children:[" created : ",t.created]}),Object(i.jsxs)("li",{children:[" edited : ",t.edited]}),Object(i.jsxs)("li",{children:[" url : ",t.url]})]})};var x=function(e){return Object(i.jsx)("div",{className:"container mt-3 mb-3",children:Object(i.jsx)("form",{className:"search",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-2",children:Object(i.jsx)("label",{className:"text-center",children:Object(i.jsx)("h3",{children:"Search:"})})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("input",{name:"search",onChange:e.handleInputChange,type:"text",className:"form-control",placeholder:"Search for Cast Member",id:"search",autoComplete:"off"})})]})})})};var p=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=r.a.useState([]),l=Object(j.a)(a,2),h=l[0],o=l[1];return r.a.useEffect((function(){(function(e,t){return u.apply(this,arguments)})("people/?search="+c).then((function(e){return o(e.results)}))}),[c]),console.log(c),Object(i.jsxs)("div",{children:[Object(i.jsx)(x,{handleInputChange:function(e){if("search"===e.target.name){var t=e.target.value.toLowerCase();n(t)}},search:c}),Object(i.jsx)("table",{className:"table table-light",children:Object(i.jsx)("tbody",{children:Object(i.jsx)("tr",{children:Object(i.jsx)("th",{scope:"row",children:h.map((function(e){return Object(i.jsx)(O,{person:e},e.name)}))})})})})]})};var m=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(p,{})]})};c(15);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5cfc6cec.chunk.js.map