(this.webpackJsonpmyappreact=this.webpackJsonpmyappreact||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},17:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},18:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(3),u=a.n(i),s=a(14),m=a(2),o=a(15),p=a.n(o),E=a(16),d=a.n(E),f=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:d.a,alt:""})))},g=a(17),b=a.n(g),h=function(){return r.a.createElement("img",{src:b.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},v=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status),r.a.createElement("li",null,r.a.createElement("strong",null,"Season appears:"),t.appearance),r.a.createElement("li",null,r.a.createElement("strong",null,"occupation:"),t.occupation)))))},y=function(e){var t=e.items;return e.isLoading?r.a.createElement(h,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(v,{key:e.char_id,item:e})})))},N=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search characters",value:l,onChange:function(e){return a=e.target.value,i(a),void t(a);var a},autoFocus:!0})))},j=(a(41),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],E=i[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),b=g[0],h=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,p()("https://www.breakingbadapi.com/api/characters?name=".concat(b));case 3:t=e.sent,console.log(t.data),c(t.data),E(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(N,{getQuery:function(e){return h(e)}}),r.a.createElement(y,{isLoading:o,items:a}))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2fde59a7.chunk.js.map