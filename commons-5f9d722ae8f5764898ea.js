(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0/XV":function(t,e,n){},"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"SINOLUX","description":"Official site for Sinolux","author":"@XinzeZhao"}}}}')},"8+s/":function(t,e,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,i=n("q1tI"),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},"8ypT":function(t,e,n){},A5mV:function(t,e,n){t.exports={navBar:"footer-module--navBar--2MfgO"}},Bl7J:function(t,e,n){"use strict";var r=n("f98A"),i=n("q1tI"),o=n.n(i),a=n("Wbzz"),c=n("homC"),u=n("Wmhb"),s=n.n(u),l=function(t){t.siteTitle;return o.a.createElement("header",{className:s.a.header},o.a.createElement(c.d,null,o.a.createElement(a.Link,{to:"/"},"SINO",o.a.createElement("span",{className:"italic"},"LUX"))))};l.defaultProps={siteTitle:""};var f=l;n("fItr"),n("8ypT"),e.a=function(t){var e=t.children,n=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("main",null,e))}},C9fy:function(t,e,n){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},R48M:function(t,e,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},Wmhb:function(t,e,n){t.exports={header:"header-module--header--3QwAt"}},bmMU:function(t,e,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,i="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(i&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],n.get(u.value[0])))return!1;return!0}if(o&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(e[u]!==n[u])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],n[s[u]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},f98A:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"SINOLUX"}}}}')},fItr:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=(n("t4G2"),n("A5mV")),a=n.n(o);e.a=function(t){var e=t.children;return i.a.createElement("div",{className:a.a.navBar},i.a.Children.map(e,(function(t,e){return i.a.createElement("p",null,t)})))}},homC:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=(n("0/XV"),function(t){return i.a.createElement("div",{className:"subtitle "+t.className},t.children)}),a=function(t){return i.a.createElement("div",{className:"subsubtitle "+t.className},t.children)},c=function(t){var e="pageTitle";return t.className&&(e+=" "+t.className),i.a.createElement("div",{className:e},t.children)};e.d=function(t){return i.a.createElement("div",{className:"title"},t.children)}},klQ5:function(t,e,n){var r=n("emib"),i=n("TUPI"),o=n("rjfK").f,a=n("chL8").f,c=n("mhTz"),u=n("lb9j"),s=r.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,h=new s(p)!==p;if(n("QPJK")&&(!h||n("96qb")((function(){return d[n("sOol")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(t,e){var n=this instanceof s,r=c(t),o=void 0===e;return!n&&r&&t.constructor===s&&o?t:i(h?new l(r&&!o?t.source:t,e):l((r=t instanceof s)?t.source:t,r&&o?u.call(t):e),n?this:f,s)};for(var m=function(t){t in s||o(s,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},y=a(l),b=0;y.length>b;)m(y[b++]);f.constructor=s,s.prototype=f,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},muO9:function(t,e,n){},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mt}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,i,o,a,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("MgzW"),y=n.n(m),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),O="cssText",A="href",C="http-equiv",E="innerHTML",S="itemprop",I="name",j="property",P="rel",k="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",M="defer",q="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",_=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),F=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},J=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=Z(t,T.TITLE),n=Z(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,x);return e||r||void 0},G=function(t){return Z(t,R)||function(){}},X=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return K({},t,e)}),{})},V=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},Q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+B(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==E&&c!==O&&c!==S||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=y()({},r[c],i[c]);r[c]=u}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,i),ct(f,p);var d={baseTag:st(T.BASE,n),linkTags:st(T.LINK,o),metaTags:st(T.META,a),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),u(t,h,m)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===E)n.innerHTML=e.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,i=ft(n,r),[h.a.createElement(T.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=lt(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+J(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+J(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case v:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===E||n===O){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),h.a.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===E||t===O)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+J(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===F.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(b,n,r),htmlAttributes:pt(v,i,r),link:pt(T.LINK,o,r),meta:pt(T.META,a,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,u,r),style:pt(T.STYLE,s,r),title:pt(T.TITLE,{title:f,titleAttributes:p},r)}},ht=l()((function(t){return{baseTag:V([A,N],t),bodyAttributes:X(b,t),defer:Z(t,M),encode:Z(t,q),htmlAttributes:X(v,t),linkTags:Q(T.LINK,[P,A],t),metaTags:Q(T.META,[I,w,C,j,S],t),noscriptTags:Q(T.NOSCRIPT,[E],t),onChangeClientState:G(t),scriptTags:Q(T.SCRIPT,[k,E],t),styleTags:Q(T.STYLE,[O],t),title:W(t),titleAttributes:X(g,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),dt)((function(){return null})),mt=(i=ht,a=o=function(t){function e(){return U(this,e),Y(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return K({},r,((e={})[n.type]=[].concat(r[n.type]||[],[K({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return K({},i,((e={})[r.type]=a,e.titleAttributes=K({},o),e));case T.BODY:return K({},i,{bodyAttributes:K({},o)});case T.HTML:return K({},i,{htmlAttributes:K({},o)})}return K({},i,((n={})[r.type]=K({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=K({},e);return Object.keys(t).forEach((function(e){var r;n=K({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[_[n]||n]=t[n],e}),e)}(z(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=z(t,["children"]),r=K({},n);return e&&(r=this.mapChildrenToProps(e,r)),h.a.createElement(i,r)},H(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(h.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);mt.renderStatic=mt.rewind}).call(this,n("yLpj"))},t4G2:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r);n("muO9");function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).numChildren=i.a.Children.count(e.children),n.children=e.children,n.childrenWithoutImg=i.a.Children.map(e.children,(function(t,e){if(e<n.numChildren-1)return t})),n.displayImg=n.displayImg.bind(o(n)),n.hideImage=n.hideImage.bind(o(n)),n.state={hover:!1},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=r.prototype;return a.displayImg=function(){this.setState({hover:!0})},a.hideImage=function(){this.setState({hover:!1})},a.render=function(){var t;return t=this.state.hover?this.children:this.childrenWithoutImg,i.a.createElement("div",{className:"button",onMouseEnter:this.displayImg,onMouseLeave:this.hideImage},t)},r}(r.Component);e.a=a},vrFN:function(t,e,n){"use strict";var r=n("51K9"),i=n("q1tI"),o=n.n(i),a=n("qhky");function c(t){var e=t.description,n=t.lang,i=t.meta,c=t.title,u=r.data.site,s=e||u.siteMetadata.description;return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},wZFJ:function(t,e,n){"use strict";var r=n("P8UN"),i=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=commons-5f9d722ae8f5764898ea.js.map