(this.webpackJsonptravellist=this.webpackJsonptravellist||[]).push([[0],{17:function(e,a,t){e.exports=t(35)},33:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(7),r=t.n(c),i=t(8),s=t.n(i),m=t(2),o=t(3),u=t(9),E=Object(n.createContext)(),d=E.Provider,p=(E.Consumer,E),f=t(12),v=t.n(f),N=t(13),g=t.n(N),b=t(14),h=t.n(b),y=t(15),k=t.n(y),j=t(38),w=t(6),O=["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],x=function(e){var a=Object(n.useContext)(p),t=a.content,c=a.dispatch,r=a.state.likedSpot,i=e.params.id,s=t.find((function(e){return+e.id===+i})),u=Object(n.useState)(!1),E=Object(m.a)(u,2),d=E[0],f=E[1];return l.a.createElement(n.Fragment,null,s?function(){var e=s.name,a=s.introduction,t=s.open_time,n=s.address,m=s.tel,u=s.email,E=s.months,p=s.nlat,N=s.elong,b=s.official_site,y=s.ticket,x=s.remind,P=s.target,_=s.service,C=s.images,L=[p,N],S=E.split(","),A=12===S.length?"\u5168\u5e74\u7121\u4f11":S.sort((function(e,a){return e-a})).map((function(e,a){return O[+e]+"\u6708"})).join(" / ");return l.a.createElement("div",{id:"travel-info"},l.a.createElement(k.a,{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},C?C.map((function(e,a){return l.a.createElement("div",{key:a,className:"slider-film"},l.a.createElement("img",{src:e.src,alt:""}))})):l.a.createElement("div",{className:"slider-film"},"No Picture")),l.a.createElement("div",{className:"info-text"},l.a.createElement("div",{className:"title"},e),a?l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"text-area ".concat(d?"open":"")},a),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return f(!d)}},d?"-":"+"))):null,l.a.createElement("div",{className:"detail-list"},l.a.createElement("ul",null,n?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u5730\u5740"),l.a.createElement("span",{className:"info"},n.split(" ")[1])):null,m?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u96fb\u8a71"),l.a.createElement("span",{className:"info"},m)):null,t?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u958b\u653e\u6642\u9593"),l.a.createElement("span",{className:"info"},t)):null,u?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"Email"),l.a.createElement("span",{className:"info"},u)):null,A?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u958b\u653e\u6708\u4efd"),l.a.createElement("span",{className:"info"},A)):null,y?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u9580\u7968\u8cc7\u8a0a"),l.a.createElement("span",{className:"info"},y)):null,x?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u6ce8\u610f\u4e8b\u9805"),l.a.createElement("span",{className:"info"},x)):null,b?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u5b98\u65b9\u7db2\u7ad9"),l.a.createElement("span",{className:"info"},l.a.createElement("a",{href:b,target:"_blank"},b))):null,P.length?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u9069\u5408\u65cf\u7fa4"),l.a.createElement("span",{className:"info"},P.map((function(e,a){return e.name})))):null,_.length?l.a.createElement("li",null,l.a.createElement("span",{className:"info-type"},"\u5177\u5099\u8a2d\u65bd"),l.a.createElement("span",{className:"info"},_.map((function(e,a){return e.name})).join("\u3001"))):null))),l.a.createElement("div",{className:"map-wrapper"},l.a.createElement(v.a,{center:L,zoom:12},j.a([].concat(Object(o.a)(r),[{id:i,geoPostion:L,name:e}])).map((function(e,a,t){return l.a.createElement(g.a,{key:a,anchor:e.geoPostion})})),l.a.createElement(h.a,{anchor:L,offset:[120,79]},l.a.createElement("div",{className:"overlay-label"},l.a.createElement("div",null,e),l.a.createElement("div",{className:"btn-group"},r.find((function(e){return e.id===i}))?l.a.createElement("button",{onClick:function(){c({type:"REMOVE_LIKE",payload:{id:i}})}},l.a.createElement(w.c,null)):l.a.createElement("button",{onClick:function(){return c({type:"ADD_LIKE",payload:{id:i,name:e,geoPostion:L}})}},l.a.createElement(w.a,null))))))))}():null)},P=t(16),_=t(5),C=function(e){var a=e.data,t=(e.index,a.id),n=a.name,c=a.name_zh,r=a.distric,i=a.official_site,s=a.category,m=a.images;return l.a.createElement(_.a,{to:"/".concat(t)},l.a.createElement("div",{className:"card-wrapper"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-img",style:m[0]?{backgroundImage:"url(".concat(m[0].src,")")}:null},m[0]?null:l.a.createElement("span",{className:"text-holder"},"No Image")),l.a.createElement("div",{className:"card-text"},l.a.createElement("div",{className:"title"}," ",n||c),l.a.createElement("ul",null,r?l.a.createElement("li",null,l.a.createElement(w.b,null),l.a.createElement("span",null,r)):null,l.a.createElement("li",null,s?s.map((function(e,a){return l.a.createElement("span",{className:"hashtag",style:{filter:"hue-rotate(".concat(5*+e.id,"deg)")},key:a},"#",e.name)})):null)),i?l.a.createElement("a",{target:"_blank",className:"official-site",href:i,onClick:function(e){e.stopPropagation()}},l.a.createElement(P.a,null),"\u5b98\u65b9\u7db2\u7ad9\b"):null))))},L=function(){var e=Object(n.useContext)(p),a=e.content,t=e.dispatch,c=e.isLoading;return l.a.createElement("div",{className:"travel-list"},l.a.createElement("div",{className:"card-list"},a.map((function(e,a){return l.a.createElement(C,{data:e,index:a,key:a})})),c?Object(o.a)(Array(4)).map((function(e,a){return l.a.createElement("div",{className:"card-wrapper",key:a},l.a.createElement("div",{className:"card skeleton"},"Loading..."))})):null),a.length?l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("button",{className:c?"loading":"",onClick:function(){t({type:"NEXT_PAGE"})}},l.a.createElement("span",null,"Load more"))):null)},S={currentPage:1,totalPage:0,likedSpot:[],categories:[{id:11,name:"\u990a\u751f\u6eab\u6cc9",active:!1},{id:12,name:"\u55ae\u8eca\u904a\u8e64",active:!1},{id:13,name:"\u6b77\u53f2\u5efa\u7bc9",active:!1},{id:14,name:"\u5b97\u6559\u4fe1\u4ef0",active:!1},{id:15,name:"\u85dd\u6587\u9928\u6240",active:!1},{id:18,name:"\u516c\u5171\u85dd\u8853",active:!1},{id:16,name:"\u6236\u5916\u8e0f\u9752",active:!1},{id:17,name:"\u85cd\u8272\u6c34\u8def",active:!1},{id:19,name:"\u89aa\u5b50\u5171\u904a",active:!1},{id:20,name:"\u5317\u5317\u57fa\u666f\u9ede",active:!1},{id:23,name:"\u591c\u5e02\u5546\u5708",active:!1},{id:24,name:"\u4e3b\u984c\u5546\u8857",active:!1},{id:25,name:"\u7121\u969c\u7919\u65c5\u904a\u63a8\u85a6\u666f\u9ede",active:!1}]},A=function(e,a){var t=e.currentPage,n=(e.totalPage,e.categories,e.likedSpot);switch(a.type){case"ADD_LIKE":var l=a.payload;return Object(u.a)({},e,{likedSpot:[].concat(Object(o.a)(n),[l])});case"NEXT_PAGE":var c=t+1;return Object(u.a)({},e,{currentPage:c});case"REMOVE_LIKE":var r=a.payload.id,i=n.filter((function(e){return e.id!==r}));return Object(u.a)({},e,{likedSpot:i});default:return e}},I=function(e){var a=e.text;return l.a.createElement("header",null,a)},T=function(){var e=Object(n.useReducer)(A,S),a=Object(m.a)(e,2),t=a[0],c=a[1],r=t.totalPage,i=t.currentPage,u=Object(n.useState)([]),E=Object(m.a)(u,2),p=E[0],f=E[1],v=Object(n.useState)(!1),N=Object(m.a)(v,2),g=N[0],b=N[1],h={state:t,dispatch:c,content:p,isLoading:g};return Object(n.useEffect)((function(){var e=!1;return i>r&&(b(!0),setTimeout((function(){!function(){var a,t,n;s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,s.a.awrap(fetch("https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=".concat(i),{headers:{accept:"application/json"}}));case 2:return a=l.sent,l.next=5,s.a.awrap(a.json());case 5:t=l.sent,n=t.data,e||f([].concat(Object(o.a)(p),Object(o.a)(n)));case 8:case"end":return l.stop()}}))}()}),1500),setTimeout((function(){b(!1)}),2e3)),function(){e=!0}}),[i]),l.a.createElement(d,{value:h},l.a.createElement(_.c,{base:"/TravelList"},l.a.createElement(_.b,{path:"/"},l.a.createElement(I,{text:"\u53f0\u5317\u5e02\u7279\u8272\u666f\u9ede"}),l.a.createElement(L,null)),l.a.createElement(_.b,{path:"/:id"},(function(e){return l.a.createElement(x,{params:e})}))))};t(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.931dbe26.chunk.js.map