(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{A5mV:function(e,t,a){e.exports={navBar:"footer-module--navBar--2MfgO"}},OTze:function(e,t,a){e.exports={mobile:"cover-module--mobile--3_FYS",desktop:"cover-module--desktop--SAhiD",scroll:"cover-module--scroll--29fmC",scrollLeft:"cover-module--scroll-left--3E1d4"}},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Bl7J"),i=a("vrFN"),s=a("Wbzz");a("muO9");function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).numChildren=n.a.Children.count(t.children),a.children=t.children,a.childrenWithoutImg=n.a.Children.map(t.children,(function(e,t){if(t<a.numChildren-1)return e})),a.displayImg=a.displayImg.bind(o(a)),a.hideImage=a.hideImage.bind(o(a)),a.state={hover:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=l.prototype;return r.displayImg=function(){this.setState({hover:!0}),this.props.unsetDefault()},r.hideImage=function(){this.setState({hover:!1}),this.props.setDefault()},r.render=function(){var e;return e=this.state.hover?this.children:this.childrenWithoutImg,n.a.createElement("div",{role:"button",tabIndex:"0",className:"button",onMouseEnter:this.displayImg,onMouseLeave:this.hideImage},e)},l}(l.Component),c=a("homC"),f={position:"fixed",top:"20vh",left:"40vw",textAlign:"center",fontSize:"4vh",lineHeight:"4vh"},h={fontSize:"3.2vh",lineHeight:"3.3vh",fontStyle:"italic",border:"0.3vh solid",borderRadius:"70%",padding:"1vh 1vw 1vh 1vw",background:"ghostwhite"},m={fontStyle:"italic",fontWeight:"400",borderRadius:"70%",padding:"4vh 3vw 4vh 3vw"},d=function(e){return n.a.createElement("div",null,n.a.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},n.a.createElement(c.c,null,n.a.createElement(s.Link,{to:"/exhibitions/"},"EXHIBITIONS")),n.a.createElement("div",{style:f},n.a.createElement("p",{style:h},"线上展映",n.a.createElement("br",null),"Virtual Screening"),n.a.createElement("br",null),n.a.createElement("p",{style:m,className:"serif"},"第一次的离别 (A First Farewell, 2018)",n.a.createElement("br",null),"February 25th (Fri) ~ March 5th (Fri)"))))},v={position:"fixed",top:"50vh",left:"65vw",textAlign:"center",fontStyle:"italic",fontSize:"5vh"},p={position:"fixed",top:"13vh",left:"45vw"},E=function(e){return n.a.createElement("div",null,n.a.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},n.a.createElement(c.c,null,n.a.createElement(s.Link,{to:"/events/"},"COMMUNITY EVENTS")),n.a.createElement("div",null,n.a.createElement("svg",{style:p,width:"50vh",height:"50vh"},n.a.createElement("circle",{cx:"25vh",cy:"25vh",r:"22vh",stroke:"black",strokeWidth:"3",fill:"salmon"})),n.a.createElement("p",{style:v,className:"serif"},"(影迷活动)"))))},D={position:"fixed",top:"18vh",left:"44vw",textAlign:"center",fontStyle:"italic",fontSize:"5vh"},y={position:"fixed",top:"55vh",left:"65vw",textAlign:"center",fontStyle:"italic",fontSize:"5vh"},b={position:"fixed",top:"19vh",left:"48vw"},g=function(e){return n.a.createElement("div",null,n.a.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},n.a.createElement(c.c,null,n.a.createElement(s.Link,{to:"/interview"},"NEWS & INTERVIEWS")),n.a.createElement("div",null,n.a.createElement("svg",{style:b,width:"40vh",height:"40vh"},n.a.createElement("rect",{x:"3",y:"3",width:"37vh",height:"37vh",stroke:"black",strokeWidth:"3",fill:"LightSkyBlue"})),n.a.createElement("p",{style:D,className:"serif"},"(新闻)"),n.a.createElement("p",{style:y,className:"serif"},"(采访)"))))},S={position:"fixed",top:"49vh",left:"65vw",fontStyle:"italic",fontSize:"5vh",lineHeight:"4.7vh"},w={position:"fixed",top:"15vh",left:"48vw"},F=function(e){return n.a.createElement("div",null,n.a.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},n.a.createElement(c.c,null,n.a.createElement(s.Link,{to:"/review"},"REVIEWS")),n.a.createElement("div",null,n.a.createElement("svg",{style:w,width:"40vh",height:"40vh",viewBox:"0 0 100 100"},n.a.createElement("polygon",{points:"50 1, 1 99, 99 99",stroke:"black",strokeWidth:"0.5",fill:"Gold"})),n.a.createElement("p",{style:S,className:"serif"},"(影评)",n.a.createElement("br",null),"(观后感)"))))},x={position:"fixed",top:"45vh",left:"45vw",fontStyle:"italic",fontSize:"10vh",transform:"scale(1,2)"},k=function(e){return n.a.createElement("div",null,n.a.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},n.a.createElement(c.c,null,n.a.createElement(s.Link,{to:"/about-us"},"ABOUT US")),n.a.createElement("p",{style:x,className:"serif"},"(关于华光电影)")))},I={position:"fixed",top:"45vh",left:"55vw",fontStyle:"italic",fontSize:"10vh",transform:"scale(1,2)",transition:"0.5s"},N=function(e){return n.a.createElement("div",null,n.a.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},n.a.createElement(c.c,null,n.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://vimeo.com/ondemand/sinoluxtoronto"},"TICKET")),n.a.createElement("p",{style:I,className:"serif"},"(购票)")))},z=a("fItr"),A=a("OTze"),O=a.n(A),L={position:"absolute",top:"40%",display:"flex",whiteSpace:"nowrap"},C={fontStyle:"italic",fontSize:"10vh",transform:"scale(1,2)"},M=function(){return n.a.createElement(s.Link,{to:"/exhibitions/",style:L},n.a.createElement("span",{className:O.a.scroll},n.a.createElement("p",{style:C,className:"serif "+O.a.desktop},"Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) / "),n.a.createElement("p",{style:C,className:"serif "+O.a.mobile},"Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) / ")),n.a.createElement("span",{className:O.a.scroll},n.a.createElement("p",{style:C,className:"serif "+O.a.desktop},"Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) / "),n.a.createElement("p",{style:C,className:"serif "+O.a.mobile},"Virtual Screening / A First Farewell / Feb. 26th (Fri) ~ Mar. 5th (Fri) / ")))},T=a("lOPE"),V=a.n(T);function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).setDefault=a.setDefault.bind(W(a)),a.unsetDefault=a.unsetDefault.bind(W(a)),a.state={default:!0},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=l.prototype;return r.setDefault=function(){this.setState({default:!0})},r.unsetDefault=function(){this.setState({default:!1})},r.render=function(){var e;return e=this.state.default?n.a.createElement(M,null):null,n.a.createElement("div",{className:V.a.home},e,n.a.createElement(z.a,null,n.a.createElement(d,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),n.a.createElement(E,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),n.a.createElement(g,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),n.a.createElement(F,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),n.a.createElement(N,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),n.a.createElement(k,{setDefault:this.setDefault,unsetDefault:this.unsetDefault})),n.a.createElement("div",{className:V.a.footer},n.a.createElement(s.Link,{to:"/about-us"},"© SINOLUX FILM, 2021",n.a.createElement("br",null))))},l}(l.Component);t.default=function(){return n.a.createElement(r.a,{noScroll:"True"},n.a.createElement(i.a,{title:"Home",description:"Sinolux Homepage",lang:"en"}),n.a.createElement(_,null))}},fItr:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("A5mV"),i=a.n(r);t.a=function(e){return n.a.createElement("div",{className:i.a.navBar+" "+e.className},n.a.Children.map(e.children,(function(e,t){return n.a.createElement("span",null,e)})))}},lOPE:function(e,t,a){e.exports={home:"home-module--home--2GdyV",footer:"home-module--footer--1sxTd"}},muO9:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-a4dd7eaf82f03316e7fd.js.map