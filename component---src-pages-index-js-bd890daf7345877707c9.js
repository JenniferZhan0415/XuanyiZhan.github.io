"use strict";(self.webpackChunksinolux_site=self.webpackChunksinolux_site||[]).push([[293],{1053:function(e,t,l){l.d(t,{A:function(){return s}});var n={};l.r(n);var a=l(6540);var s=e=>a.createElement("div",{className:n.default.navBar+" "+e.className},a.Children.map(e.children,((e,t)=>a.createElement("span",null,e))))},542:function(e,t,l){l.r(t),l.d(t,{default:function(){return Q}});var n={};l.r(n);var a={};l.r(a);var s=l(6540),i=l(1511),r=l(2269),o=l(7387),c=l(4794);var u=function(e){function t(t){var l;return(l=e.call(this,t)||this).numChildren=s.Children.count(t.children),l.children=t.children,l.childrenWithoutImg=s.Children.map(t.children,((e,t)=>{if(t<l.numChildren-1)return e})),l.displayImg=l.displayImg.bind(l),l.hideImage=l.hideImage.bind(l),l.state={hover:!1},l}(0,o.A)(t,e);var l=t.prototype;return l.displayImg=function(){this.setState({hover:!0}),this.props.unsetDefault()},l.hideImage=function(){this.setState({hover:!1}),this.props.setDefault()},l.render=function(){let e;return e=this.state.hover?this.children:this.childrenWithoutImg,s.createElement("div",{role:"button",tabIndex:"0",className:"button",onMouseEnter:this.displayImg,onMouseLeave:this.hideImage},e)},t}(s.Component),h=l(6611);const f={height:"3vh"},m={position:"fixed",top:"20vh",left:"40vw",textAlign:"center",fontSize:"4vh",lineHeight:"4vh"},v={fontSize:"3.2vh",lineHeight:"3.3vh",fontStyle:"italic",border:"0.3vh solid",borderRadius:"70%",padding:"1vh 1vw 1vh 1vw",background:"ghostwhite"},d={fontStyle:"italic",fontWeight:"400",borderRadius:"70%",padding:"4vh 3vw 4vh 3vw"};var E=e=>s.createElement("div",{style:f},s.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},s.createElement(h.Pd,null,s.createElement(c.Link,{to:"/exhibitions/"},"EXHIBITIONS")),s.createElement("div",{style:m},s.createElement("p",{style:v},"回溯与新生",s.createElement("br",null),"Retrospect + Rebirth"),s.createElement("br",null),s.createElement("p",{style:d,className:"serif"},"Missing Johnny (2017)",s.createElement("br",null),"The Receptionist (2017)",s.createElement("br",null),"Somewhere I Have Never Travelled (2009)",s.createElement("br",null),"Nov. 19 – 28"))));const p={height:"3vh"},D={position:"fixed",top:"50vh",left:"65vw",textAlign:"center",fontStyle:"italic",fontSize:"5vh"},y={position:"fixed",top:"13vh",left:"45vw"};var g=e=>s.createElement("div",{style:p},s.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},s.createElement(h.Pd,null,s.createElement(c.Link,{to:"/events/"},"COMMUNITY EVENTS")),s.createElement("div",null,s.createElement("svg",{style:y,width:"50vh",height:"50vh"},s.createElement("circle",{cx:"25vh",cy:"25vh",r:"22vh",stroke:"black",strokeWidth:"3",fill:"salmon"})),s.createElement("p",{style:D,className:"serif"},"(影迷活动)"))));const S={height:"3vh"},w={position:"fixed",top:"18vh",left:"44vw",textAlign:"center",fontStyle:"italic",fontSize:"5vh"},N={position:"fixed",top:"55vh",left:"65vw",textAlign:"center",fontStyle:"italic",fontSize:"5vh"},b={position:"fixed",top:"19vh",left:"48vw"};var k=e=>s.createElement("div",{style:S},s.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},s.createElement(h.Pd,null,s.createElement(c.Link,{to:"/interview"},"NEWS & INTERVIEWS")),s.createElement("div",null,s.createElement("svg",{style:b,width:"40vh",height:"40vh"},s.createElement("rect",{x:"3",y:"3",width:"37vh",height:"37vh",stroke:"black",strokeWidth:"3",fill:"LightSkyBlue"})),s.createElement("p",{style:w,className:"serif"},"(新闻)"),s.createElement("p",{style:N,className:"serif"},"(采访)"))));const I={height:"3vh"},T={position:"fixed",top:"49vh",left:"65vw",fontStyle:"italic",fontSize:"5vh",lineHeight:"4.7vh"},x={position:"fixed",top:"15vh",left:"48vw"};var R=e=>s.createElement("div",{style:I},s.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},s.createElement(h.Pd,null,s.createElement(c.Link,{to:"/review"},"REVIEWS")),s.createElement("div",null,s.createElement("svg",{style:x,width:"40vh",height:"40vh",viewBox:"0 0 100 100"},s.createElement("polygon",{points:"50 1, 1 99, 99 99",stroke:"black",strokeWidth:"0.5",fill:"Gold"})),s.createElement("p",{style:T,className:"serif"},"(影评)",s.createElement("br",null),"(观后感)"))));const W={height:"3vh"},A={position:"fixed",top:"45vh",left:"45vw",fontStyle:"italic",fontSize:"10vh",transform:"scale(1,2)"};var C=e=>s.createElement("div",{style:W},s.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},s.createElement(h.Pd,null,s.createElement(c.Link,{to:"/about-us"},"ABOUT US")),s.createElement("p",{style:A,className:"serif"},"(关于)")));const L={height:"3vh"},z={position:"fixed",top:"45vh",left:"55vw",fontStyle:"italic",fontSize:"10vh",transform:"scale(1,2)",transition:"0.5s"};var H=e=>s.createElement("div",{style:L},s.createElement(u,{setDefault:e.setDefault,unsetDefault:e.unsetDefault},s.createElement(h.Pd,null,s.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSd2D-uV6RW5GFwQVEiCe8JWJwNZgRXJJvCBrszRY-KvdZE4wg/viewform"},"TICKETS")),s.createElement("p",{style:z,className:"serif"},"(购票)"))),B=l(1053),M=l(4333);var J=()=>{const e=[(0,c.useStaticQuery)("787314031").src.childImageSharp.fluid];return s.createElement(M.A,{fluid:e})};const P={position:"absolute",top:"10%",display:"none",whiteSpace:"nowrap"},V={fontStyle:"italic",fontSize:"10vh",transform:"scale(1,2)"};var F=()=>s.createElement(s.Fragment,null,s.createElement(c.Link,{to:"https://player.tfai.org.tw/zh-TW/watchnow",style:P,className:n.default.cover},s.createElement("span",{className:n.default.scroll},s.createElement("p",{style:V,className:"serif "+n.default.desktop},"Retrospect + Rebirth / Buy Tickets / 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/ "),s.createElement("p",{style:V,className:"serif "+n.default.mobile},"Retrospect + Rebirth / Buy Tickets / 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/ ")),s.createElement("span",{className:n.default.scroll},s.createElement("p",{style:V,className:"serif "+n.default.desktop},"Retrospect + Rebirth / Buy Tickets / 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/ "),s.createElement("p",{style:V,className:"serif "+n.default.mobile},"Retrospect + Rebirth / Buy Tickets/ 立即购票 / Missing Johnny (2017) / The Receptionist (2017) / Somewhere I Have Never Travelled (2009) / Nov. 19 – 28/ "))),s.createElement(c.Link,{to:"https://player.tfai.org.tw/zh-TW/watchnow"},s.createElement("div",{className:n.default.imgWrapper},s.createElement(J,null))));let O=function(e){function t(t){var l;return(l=e.call(this,t)||this).setDefault=l.setDefault.bind(l),l.unsetDefault=l.unsetDefault.bind(l),l.state={default:!0},l}(0,o.A)(t,e);var l=t.prototype;return l.setDefault=function(){this.setState({default:!0})},l.unsetDefault=function(){this.setState({default:!1})},l.render=function(){let e;return e=this.state.default?s.createElement(F,null):null,s.createElement("div",{className:a.default.home},e,s.createElement(B.A,null,s.createElement(E,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),s.createElement(g,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),s.createElement(k,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),s.createElement(R,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),s.createElement(H,{setDefault:this.setDefault,unsetDefault:this.unsetDefault}),s.createElement(C,{setDefault:this.setDefault,unsetDefault:this.unsetDefault})),s.createElement("div",{className:a.default.footer},s.createElement("span",{className:a.default.footerSpan+" subtitle"},"© ",s.createElement(c.Link,{to:"/about-us"},"SINOLUX FILM",s.createElement("br",null)),", 2021")))},t}(s.Component);var U=O;var Q=()=>s.createElement(i.A,{noScroll:"True"},s.createElement(r.A,{title:"Home",description:"Sinolux Homepage",lang:"en"}),s.createElement(U,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-bd890daf7345877707c9.js.map