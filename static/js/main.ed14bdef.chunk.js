(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{110:function(e,t,c){},237:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(34),a=c.n(r),s=(c(110),c(14)),j=c(11),i=c(248),d=c(239),l=c(250),b=(c(29),c(1)),h=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(s.c,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(s.c,{className:"nav-link",to:"/",exact:!0,activeClassName:"active",children:"Home"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/about",activeClassName:"active",children:"About"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/news/indexnews",activeClassName:"active",children:"News"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/products",activeClassName:"active",children:"Products"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/users",activeClassName:"active",children:"Users"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/countries",activeClassName:"active",children:"Countries"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/water-management",activeClassName:"active",children:"Water"}),Object(b.jsx)(s.c,{className:"nav-link",to:"/foods",activeClassName:"active",children:"Foods"})]})]})})})},O=function(){return Object(b.jsx)(d.a,{children:Object(b.jsx)("h1",{children:"Home Page"})})},o=c(7),x=c.n(o),u=c(8),p=c(6),m=c(13),v=c.n(m),f=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],r=t[1],a=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.codingthailand.com/api/version");case 2:t=e.sent,r(t.data.data.version);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(b.jsxs)(d.a,{children:[Object(b.jsx)("h1",{children:"About Page"}),Object(b.jsxs)("p",{children:["Create by Backend version : ",c]})]})},g=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)("h1",{children:"Services Page"})})})},y=c(240),N=c(241),w=c(242),S=c(243),k=c(244),C=c(247),D=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),j=Object(p.a)(a,2),i=j[0],l=j[1],h=Object(n.useState)(null),O=Object(p.a)(h,2),o=O[0],m=O[1],f=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,v.a.get("https://api.codingthailand.com/api/course");case 4:t=e.sent,r(t.data.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),m(e.t0);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),!0===i?Object(b.jsx)("div",{className:"text-center mt-3",children:Object(b.jsx)(y.a,{animation:"border",variant:"primary"})}):o?Object(b.jsxs)("div",{className:"text-center mt-3",children:[Object(b.jsx)("p",{children:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e08\u0e32\u0e01 Server \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48"}),Object(b.jsx)("p",{children:o.response.data.message})]}):Object(b.jsx)("div",{className:"mt-3 my-3",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)("h2",{children:"Products"}),Object(b.jsxs)(N.a,{bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Detail"}),Object(b.jsx)("th",{children:"Create At"}),Object(b.jsx)("th",{children:"View"}),Object(b.jsx)("th",{children:"Picture"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.detail}),Object(b.jsx)("td",{children:Object(C.a)(new Date(e.date),"dd-MMM-yyyy")}),Object(b.jsx)("td",{children:Object(b.jsx)(w.a,{pill:!0,variant:"info",children:e.view})}),Object(b.jsx)("td",{children:Object(b.jsx)(S.a,{src:e.picture,thumbnail:!0,width:100})}),Object(b.jsxs)("td",{children:[Object(b.jsx)(s.b,{to:"/detail/".concat(e.id,"/title/").concat(e.title),className:"btn btn-primary",children:"View"})," ",Object(b.jsx)(k.a,{variant:"success",children:"Add to Cart"})]})]},e.id)}))})]})]})})},E=c(245),P=c(246),T=c(251),F=function(){var e=Object(j.g)(),t=e.id,c=e.title,r=Object(j.f)(),a=Object(n.useState)([]),s=Object(p.a)(a,2),i=s[0],l=s[1],h=Object(n.useState)(!1),O=Object(p.a)(h,2),o=O[0],m=O[1],f=Object(n.useState)(null),g=Object(p.a)(f,2),N=g[0],w=g[1],S=function(){var e=Object(u.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,v.a.get("https://api.codingthailand.com/api/course/"+t);case 4:c=e.sent,l(c.data.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),w(e.t0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S(t)}),[t]),!0===o?Object(b.jsx)("div",{className:"text-center mt-3",children:Object(b.jsx)(y.a,{animation:"border",variant:"primary"})}):N?Object(b.jsxs)("div",{className:"text-center mt-3",children:[Object(b.jsx)("p",{children:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e08\u0e32\u0e01 Server \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48"}),Object(b.jsx)("p",{children:N.response.data.message})]}):Object(b.jsx)("div",{className:"mt-3 my-3",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(k.a,{onClick:function(){r.goBack()},children:"Go Back"}),Object(b.jsxs)("h2",{children:[c," - ",t]}),Object(b.jsx)(E.a,{children:Object(b.jsx)(P.a,{children:i.map((function(e,t){return Object(b.jsx)("div",{className:"col-md-4 mt-3",children:Object(b.jsx)(T.a,{children:Object(b.jsxs)(T.a.Body,{children:[Object(b.jsx)(T.a.Title,{children:e.ch_title}),Object(b.jsx)(T.a.Text,{children:Object(C.a)(new Date(e.ch_dateadd),"dd-MMM-yyyy")})]})})},e.id)}))})})]})})},I=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)("p",{children:"\xa9 2021 Create by App-Solution.com"})})})},B=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),j=Object(p.a)(a,2),i=j[0],l=j[1],h=Object(n.useState)(null),O=Object(p.a)(h,2),o=O[0],m=O[1],f=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,v.a.get("https://api.codingthailand.com/api/category");case 4:t=e.sent,console.log(t.data),r(t.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),m(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),!0===i?Object(b.jsx)("div",{className:"text-center mt-3 my-3",children:Object(b.jsx)("p",{children:"loading..."})}):o?Object(b.jsxs)("div",{className:"text-center mt-3 my-3",children:[Object(b.jsx)("p",{children:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e08\u0e32\u0e01 Server \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48"}),Object(b.jsx)("p",{children:JSON.stringify(o)})]}):Object(b.jsx)("div",{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(s.b,{to:"/news/createnews",className:"btn btn-success mt-2 my-2",children:"News Create"}),Object(b.jsxs)(N.a,{bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.name}),Object(b.jsxs)("td",{width:"30%",children:[Object(b.jsx)(k.a,{variant:"info",children:"View"})," ",Object(b.jsx)(k.a,{children:"Edit"})," ",Object(b.jsx)(k.a,{variant:"danger",children:"Delete"})]})]},e.id)}))})]})]})})},M=c(103),A=c(249),L=c(32),J=c(104),U=c(65),R=U.a().shape({name:U.b().required("\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48\u0e2b\u0e49\u0e32\u0e21\u0e27\u0e48\u0e32\u0e07")}),V=function(){var e=Object(j.f)(),t=Object(L.d)({resolver:Object(J.a)(R)}),c=t.register,n=t.handleSubmit,r=t.errors,a=function(){var t=Object(u.a)(x.a.mark((function t(c){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.codingthailand.com/api/category",t.next=3,v.a.post("https://api.codingthailand.com/api/category",{name:c.name});case 3:n=t.sent,alert(n.data.message),e.replace("/category");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(E.a,{children:Object(b.jsxs)(M.a,{children:[Object(b.jsx)("h1",{children:"Create News"}),Object(b.jsxs)(A.a,{onSubmit:n(a),children:[Object(b.jsxs)(A.a.Group,{controlId:"name",children:[Object(b.jsx)(A.a.Label,{children:"\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48\u0e02\u0e48\u0e32\u0e27"}),Object(b.jsx)(A.a.Control,{type:"text",name:"name",ref:c,className:"form-control ".concat(r.name?"is-invalid":"")}),r.name&&Object(b.jsx)(A.a.Control.Feedback,{type:"invalid",children:r.name.message})]}),Object(b.jsx)(k.a,{className:"mb-3",type:"submit",children:"Save"})]})]})})})})},W=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Edit News"})})},H=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),j=Object(p.a)(a,2),i=j[0],l=j[1],h=Object(n.useState)(null),O=Object(p.a)(h,2),o=O[0],m=O[1],f=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,v.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,console.log(t.data),r(t.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),m(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),!0===i?Object(b.jsx)("div",{className:"text-center mt-5 my-5",children:Object(b.jsx)("p",{children:"loading..."})}):o?Object(b.jsxs)("div",{className:"text-center mt-5 my-5",children:[Object(b.jsx)("p",{children:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e08\u0e32\u0e01 Server \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"}),Object(b.jsx)("p",{children:JSON.stringify(o)})]}):Object(b.jsx)("div",{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)("h1",{children:"Users List"}),Object(b.jsxs)(N.a,{bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Username"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.username}),Object(b.jsx)("td",{children:e.email}),Object(b.jsxs)("td",{width:"25%",children:[Object(b.jsx)(s.b,{to:"/userdetail/".concat(e.id,"/").concat(e.name),className:"btn btn-info",children:"View"})," ",Object(b.jsx)(k.a,{children:"Update"})," ",Object(b.jsx)(k.a,{variant:"danger",children:"Delete"})]})]},e.id)}))})]})]})})},_=function(){var e=Object(j.g)().id,t=Object(j.f)(),c=Object(n.useState)({}),r=Object(p.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),l=Object(p.a)(i,2),h=l[0],O=l[1],o=Object(n.useState)(null),m=Object(p.a)(o,2),f=m[0],g=m[1],y=function(){var e=Object(u.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,v.a.get("https://jsonplaceholder.typicode.com/users/"+t);case 4:c=e.sent,console.log(c.data),s(c.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),g(e.t0);case 13:return e.prev=13,O(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(e)}),[e]),!0===h?Object(b.jsx)("div",{className:"text-center mt-5 my-5",children:Object(b.jsx)("p",{children:"loading..."})}):f?Object(b.jsxs)("div",{className:"text-center mt-5 my-5",children:[Object(b.jsx)("p",{children:"Server Error 404!"}),Object(b.jsx)("p",{children:JSON.stringify(f)})]}):Object(b.jsx)("div",{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)("h1",{children:"User Detail"}),Object(b.jsx)(k.a,{onClick:function(){t.goBack()},children:"Go Back"}),Object(b.jsx)(T.a,{className:"mt-3 my-3",children:Object(b.jsxs)(T.a.Body,{children:[Object(b.jsxs)(T.a.Title,{children:["ID : ",a.id," "]}),Object(b.jsxs)(T.a.Text,{children:["Name : ",a.name]}),Object(b.jsxs)(T.a.Text,{children:["Username : ",a.username]}),Object(b.jsxs)(T.a.Text,{children:["Email : ",a.email]}),Object(b.jsxs)(T.a.Text,{children:["Phone : ",a.phone]}),Object(b.jsxs)(T.a.Text,{children:["Website : ",a.website]})]})})]})})},G=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),j=Object(p.a)(a,2),i=j[0],l=j[1],h=Object(n.useState)(null),O=Object(p.a)(h,2),o=O[0],m=O[1],f=Object(n.useState)(""),g=Object(p.a)(f,2),y=g[0],w=g[1],k=Object(n.useState)([]),C=Object(p.a)(k,2),D=C[0],P=C[1],T=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,v.a.get("https://restcountries.eu/rest/v2/all");case 4:t=e.sent,r(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T()}),[]),Object(n.useEffect)((function(){P(c.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})))}),[y,c]),i?Object(b.jsx)("div",{className:"text-center mt-5 my-3",children:Object(b.jsx)("p",{children:"loading..."})}):o?Object(b.jsxs)("div",{className:"text-center mt-5 my-3",children:[Object(b.jsx)("p",{children:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e01\u0e08\u0e32\u0e01 SERVER \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"}),Object(b.jsx)("p",{children:JSON.stringify(o)})]}):Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(E.a,{children:[Object(b.jsxs)(M.a,{xs:{span:4,offset:4},children:[Object(b.jsx)("h1",{className:"text-center mt-4 my-3",children:"Contries List"}),Object(b.jsx)(A.a,{className:"mt-3 mb-5",children:Object(b.jsx)(A.a.Control,{type:"text",placeholder:"Search Countries",onChange:function(e){return w(e.target.value)}})})]}),Object(b.jsxs)(N.a,{bordered:!0,children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Flag"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Region"}),Object(b.jsx)("th",{children:"Sub Region"}),Object(b.jsx)("th",{children:"capital"}),Object(b.jsx)("th",{children:"Population"}),Object(b.jsx)("th",{children:"Code"}),Object(b.jsx)("th",{children:"Native"})]}),D.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(S.a,{src:e.flag,thumbnail:!0,width:"200"})}),Object(b.jsx)("td",{children:Object(b.jsx)(s.b,{to:"/countriedetail/".concat(e.name),children:e.name})}),Object(b.jsx)("td",{children:e.region}),Object(b.jsx)("td",{children:e.subregion}),Object(b.jsx)("td",{children:e.capital}),Object(b.jsx)("td",{children:e.population}),Object(b.jsx)("td",{children:e.numericCode}),Object(b.jsx)("td",{children:e.nativeName})]},e.name)}))]})]})})})},z=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(p.a)(a,2),j=s[0],i=s[1],l=Object(n.useState)(null),h=Object(p.a)(l,2),O=h[0],o=h[1],m=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,v.a.get("https://api.nriis.go.th/service/service/OpenData/v1/DataSet/Researcher_WaterManagement");case 4:t=e.sent,r(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),o(e.t0);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),j?Object(b.jsx)("div",{className:"text-center my-5",children:Object(b.jsx)("p",{children:"Loading...."})}):O?Object(b.jsx)("div",{className:"text-center my-5",children:Object(b.jsx)("p",{children:JSON.stringify(O)})}):Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(E.a,{children:Object(b.jsxs)(M.a,{children:[Object(b.jsx)("h2",{children:"Water Management"}),Object(b.jsxs)(N.a,{bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Department"}),Object(b.jsx)("th",{children:"Organization"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.ProjectID}),Object(b.jsx)("td",{children:e.ProjectName}),Object(b.jsx)("td",{children:e.DepartmentTH}),Object(b.jsx)("td",{children:e.OrganizationTH})]},t)}))})]})]})})})})},q=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)("h2",{children:"Water Management Detail"})})})},K=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(p.a)(a,2),j=s[0],i=s[1],l=Object(n.useState)(null),h=Object(p.a)(l,2),O=h[0],o=h[1],m=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,v.a.get("https://mongo-express-server.herokuapp.com/api/foods");case 4:t=e.sent,console.log(t.data),r(t.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),o(e.t0);case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),!0===j?Object(b.jsx)("p",{children:"loading..."}):O?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e08\u0e32\u0e01 Server \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48"}),Object(b.jsx)("p",{children:O.response.data.message})]}):Object(b.jsx)("div",{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)("h1",{children:"Foods Page!"}),Object(b.jsxs)(N.a,{bordered:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Price"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.price})]},e._id)}))})]})]})})},Q=function(){var e=Object(j.g)().name,t=(Object(j.f)(),Object(n.useState)([])),c=Object(p.a)(t,2),r=(c[0],c[1],Object(n.useState)(!1)),a=Object(p.a)(r,2),s=(a[0],a[1]),i=Object(n.useState)(null),d=Object(p.a)(i,2),l=(d[0],d[1],function(){var e=Object(u.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,v.a.get("https://restcountries.eu/rest/v2/name/"+t);case 4:c=e.sent,console.log(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){l(e)}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Countrie Detail"}),Object(b.jsx)("h2",{children:"Contrie Name : "})]})},X=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{basename:"/",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(O,{})}),Object(b.jsx)(j.a,{path:"/about",children:Object(b.jsx)(f,{})}),Object(b.jsx)(j.a,{path:"/services",children:Object(b.jsx)(g,{})}),Object(b.jsx)(j.a,{path:"/products",children:Object(b.jsx)(D,{})}),Object(b.jsx)(j.a,{path:"/detail/:id/title/:title",children:Object(b.jsx)(F,{})}),Object(b.jsx)(j.a,{path:"/news",render:function(e){var t=e.match.url;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{path:"".concat(t,"/indexnews"),children:Object(b.jsx)(B,{})}),Object(b.jsx)(j.a,{path:"".concat(t,"/createnews"),children:Object(b.jsx)(V,{})}),Object(b.jsx)(j.a,{path:"".concat(t,"/editnews"),children:Object(b.jsx)(W,{})})]})}}),Object(b.jsx)(j.a,{path:"/users",children:Object(b.jsx)(H,{})}),Object(b.jsx)(j.a,{path:"/userdetail/:id",children:Object(b.jsx)(_,{})}),Object(b.jsx)(j.a,{path:"/countries",children:Object(b.jsx)(G,{})}),Object(b.jsx)(j.a,{path:"/countriedetail/:name",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(j.a,{path:"/water-management",children:Object(b.jsx)(z,{})}),Object(b.jsx)(j.a,{path:"/water-manatement-detail/:id",children:Object(b.jsx)(q,{})}),Object(b.jsx)(j.a,{path:"/foods",children:Object(b.jsx)(K,{})})]}),Object(b.jsx)(I,{})]})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,252)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};a.a.render(Object(b.jsx)(X,{}),document.getElementById("root")),Y()}},[[237,1,2]]]);
//# sourceMappingURL=main.ed14bdef.chunk.js.map