(window.webpackJsonp=window.webpackJsonp||[]).push([[5,16],{139:function(e,a,t){"use strict";t.r(a);t(148);var n=t(0),l=t.n(n),r=t(145),c=t(143),i=t(57),o=t(146),s=t(144),m=t.n(s),u=t(142),d=t(126),b=t.n(d),f=24;function p(e){var a=e.item,t=e.onItemClick,r=e.collapsible,c=a.items,i=a.href,o=a.label,s=a.type,d=Object(n.useState)(a.collapsed),b=d[0],f=d[1],h=Object(n.useState)(null),v=h[0],E=h[1];a.collapsed!==v&&(E(a.collapsed),f(a.collapsed));var k=Object(n.useCallback)((function(e){e.preventDefault(),f((function(e){return!e}))}));switch(s){case"category":return c.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":b}),key:o},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!a.collapsed}),href:"#!",onClick:r?k:void 0},o),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(p,{key:e.label,item:e,onItemClick:t,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:i,onClick:t},o))}}var h=function(e){var a=Object(n.useState)(!1),t=a[0],r=a[1],c=e.docsSidebars,i=e.location,o=e.sidebar,s=e.sidebarCollapsible;if(!o)return null;var u=c[o];if(!u)throw new Error('Cannot find the sidebar "'+o+'" in the sidebar config!');return s&&u.forEach((function(e){return function e(a,t){var n=a.items,l=a.href;switch(a.type){case"category":var r=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!r,r;case"link":default:return l===t.pathname.replace(/\/$/,"")}}(e,i)})),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!t)}},t?l.a.createElement("span",{className:m()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:f,width:f,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},u.map((function(e){return l.a.createElement(p,{key:e.label,item:e,onItemClick:function(){r(!1)},collapsible:s})})))))},v=t(150),E=t(151),k=t(35),_=t(130),w=t.n(_);a.default=function(e){var a,t,n=e.route,s=e.docsMetadata,m=e.location,u=s.permalinkToSidebar,d=s.docsSidebars,b=s.version,f=u[m.pathname.replace(/\/$/,"")],p=Object(c.a)().siteConfig,_=(p=void 0===p?{}:p).themeConfig,N=(void 0===_?{}:_).sidebarCollapsible,C=void 0===N||N;return a=n.routes,t=m.pathname,a.some((function(e){return Object(k.c)(t,e)}))?l.a.createElement(o.a,{version:b},l.a.createElement("div",{className:w.a.docPage},f&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(h,{docsSidebars:d,location:m,sidebar:f,sidebarCollapsible:C})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(r.a,{components:v.a},Object(i.a)(n.routes))))):l.a.createElement(E.default,e)}},151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(146);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);