(function(e){function t(t){for(var c,u,a=t[0],l=t[1],i=t[2],b=0,p=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},r=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/IA_V3/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"067c":function(e,t,n){"use strict";n("ac80")},"1fea":function(e,t,n){"use strict";n("23d0")},2327:function(e,t,n){"use strict";n("84cc")},"23d0":function(e,t,n){},"3c53":function(e,t,n){"use strict";n("c967")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o={id:"app"};function r(e,t,n,r,u,a){const l=Object(c["u"])("Navbar"),i=Object(c["u"])("router-view");return Object(c["p"])(),Object(c["b"])("div",o,[Object(c["e"])(l),Object(c["e"])(i)])}const u={class:"navbar"},a=Object(c["c"])("span",null,null,-1),l=Object(c["c"])("span",null,null,-1),i=Object(c["c"])("span",null,null,-1),s=[a,l,i],b={class:"menu-content"};function p(e,t,n,o,r,a){const l=Object(c["u"])("router-link");return Object(c["p"])(),Object(c["b"])("div",null,[Object(c["c"])("div",u,[Object(c["c"])("div",{class:"hamburger-menu",onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},s)]),Object(c["c"])("div",{class:Object(c["l"])(["menu-overlay",{open:r.isOpen}])},[Object(c["c"])("div",b,[Object(c["e"])(l,{to:"/",onClick:a.closeMenu},{default:Object(c["A"])(()=>[Object(c["d"])("Главная")]),_:1},8,["onClick"]),Object(c["e"])(l,{to:"/about",onClick:a.closeMenu},{default:Object(c["A"])(()=>[Object(c["d"])("О себе")]),_:1},8,["onClick"]),Object(c["e"])(l,{to:"/contact",onClick:a.closeMenu},{default:Object(c["A"])(()=>[Object(c["d"])("Контакты")]),_:1},8,["onClick"])])],2)])}var d={data(){return{isOpen:!1}},methods:{toggleMenu(){this.isOpen=!this.isOpen},closeMenu(){this.isOpen=!1}}},f=(n("f800"),n("6b0d")),O=n.n(f);const j=O()(d,[["render",p]]);var m=j,v={name:"App",components:{Navbar:m}};n("2327");const h=O()(v,[["render",r]]);var y=h,g=n("6605"),w=n("ae46"),x=n.n(w);const k={class:"home"},M=Object(c["c"])("video",{autoplay:"",muted:"",loop:"",id:"bg-video"},[Object(c["c"])("source",{src:x.a,type:"video/mp4"})],-1),_=Object(c["c"])("div",{class:"content"},[Object(c["c"])("h1",null,"Демократизация генеративного ИИ"),Object(c["c"])("p",null,"Генеративный ИИ - ключ к облегчению науного процесса.")],-1),P=Object(c["c"])("h2",null,"Почему это важно?",-1),C=Object(c["c"])("p",null,"Генеративный ИИ (GenAI) становится более доступным благодаря сочетанию мощных предобученных моделей, облачных вычислений и открытого исходного кода. На сегодняшний день он уже облегчает жизнь студентов, художников и многих других людей.",-1);function S(e,t,n,o,r,u){const a=Object(c["u"])("ParallaxSection");return Object(c["p"])(),Object(c["b"])("div",k,[M,_,Object(c["e"])(a,null,{default:Object(c["A"])(()=>[P,C]),_:1})])}const A={class:"parallax"};function V(e,t){return Object(c["p"])(),Object(c["b"])("div",A,[Object(c["t"])(e.$slots,"default")])}n("3c53");const q={},B=O()(q,[["render",V]]);var F=B,T={components:{ParallaxSection:F}};n("067c");const U=O()(T,[["render",S]]);var $=U;const I={class:"about"},J=Object(c["c"])("h1",null,"О себе",-1),N=Object(c["c"])("p",null,"Студент 3 курса МАДИ, реализующий проект на Vue.js ",-1),G=[J,N];function z(e,t){return Object(c["p"])(),Object(c["b"])("div",I,G)}n("d9a9");const D={},E=O()(D,[["render",z]]);var H=E;const K={class:"contact"},L=Object(c["c"])("h1",null,"Контакты",-1),Q=Object(c["c"])("button",{type:"submit"},"Отправить",-1);function R(e,t,n,o,r,u){return Object(c["p"])(),Object(c["b"])("div",K,[L,Object(c["c"])("form",{onSubmit:t[3]||(t[3]=Object(c["C"])((...e)=>u.submitForm&&u.submitForm(...e),["prevent"]))},[Object(c["B"])(Object(c["c"])("input",{type:"text",placeholder:"Ваше имя","onUpdate:modelValue":t[0]||(t[0]=e=>r.name=e),required:""},null,512),[[c["y"],r.name]]),Object(c["B"])(Object(c["c"])("input",{type:"email",placeholder:"Ваш email","onUpdate:modelValue":t[1]||(t[1]=e=>r.email=e),required:""},null,512),[[c["y"],r.email]]),Object(c["B"])(Object(c["c"])("textarea",{placeholder:"Ваше сообщение","onUpdate:modelValue":t[2]||(t[2]=e=>r.message=e),required:""},null,512),[[c["y"],r.message]]),Q],32)])}var W={data(){return{name:"",email:"",message:""}},methods:{submitForm(){alert(`Спасибо за ваше сообщение, ${this.name}!`)}}};n("1fea");const X=O()(W,[["render",R]]);var Y=X;c["default"].use(g["default"]);var Z=new g["default"]({routes:[{path:"/",component:$},{path:"/about",component:H},{path:"/contact",component:Y}]});c["default"].config.productionTip=!1,new c["default"]({router:Z,render:e=>e(y)}).$mount("#app")},"84cc":function(e,t,n){},ac80:function(e,t,n){},ae46:function(e,t,n){e.exports=n.p+"media/video.60a1ea00.mp4"},b1fb:function(e,t,n){},c967:function(e,t,n){},d9a9:function(e,t,n){"use strict";n("fff5")},f800:function(e,t,n){"use strict";n("b1fb")},fff5:function(e,t,n){}});
//# sourceMappingURL=app.235c9d66.js.map