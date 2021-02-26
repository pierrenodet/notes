(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{108:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/coteaching-8a41dcede948608101271068a30bcbdc.png"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(94)),i={title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)"},c={permalink:"/notes/2021/02/26/coteaching",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-02-26-coteaching.md",source:"@site/notes/2021-02-26-coteaching.md",description:"Co-teaching",date:"2021-02-26T00:00:00.000Z",tags:[],title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",readingTime:2.42,truncated:!0,nextItem:{title:"Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting (MWNet)",permalink:"/notes/2021/02/24/mwnet"}},l=[{value:"Summary",id:"summary",children:[]}],p={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{align:"center"},Object(o.b)("p",null,Object(o.b)("img",{alt:"Co-teaching",src:n(108).default}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," : ",Object(o.b)("a",{parentName:"li",href:"https://github.com/bhanML/Co-teaching"},"https://github.com/bhanML/Co-teaching")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pdf")," : ",Object(o.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/1804.06872.pdf"},"https://arxiv.org/pdf/1804.06872.pdf"))),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"Summarize the main claims/contributions of the paper in your own words"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Collaborative algorithm between two networks to learn on untrusted data only."),Object(o.b)("li",{parentName:"ol"},"Each round, loss of each network is computed on it's own minibatch. The samples with the smallest loss are considered the most informative and are given to the other network to learn."),Object(o.b)("li",{parentName:"ol"},"Leverage memorization effect of deep neural networks (first learn clean and easy patterns then overfit noise)."),Object(o.b)("li",{parentName:"ol"},"Introduction of a dynamic size for the number of informative samples used (start high then reduce with number of epochs)")))}u.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);