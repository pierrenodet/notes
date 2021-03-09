(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mlc-c349b4ef10e45681ad6f2384831d06ee.png"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(98)),i={title:"Meta Label Correction for Noisy Label Learning (MLC)",tags:["reading-notes","meta-learning","label-correction"]},l={permalink:"/notes/2021/02/19/mlc",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-02-19-mlc.md",source:"@site/notes/2021-02-19-mlc.md",description:"MLC",date:"2021-02-19T00:00:00.000Z",tags:[{label:"reading-notes",permalink:"/notes/tags/reading-notes"},{label:"meta-learning",permalink:"/notes/tags/meta-learning"},{label:"label-correction",permalink:"/notes/tags/label-correction"}],title:"Meta Label Correction for Noisy Label Learning (MLC)",readingTime:3.03,truncated:!0,prevItem:{title:"Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting (MWNet)",permalink:"/notes/2021/02/24/mwnet"},nextItem:{title:"Flexible Biquality Learning with Mutual Information",permalink:"/notes/2020/02/29/mutual-information"}},c=[{value:"Summary",id:"summary",children:[]}],s={toc:c};function m(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{align:"center"},Object(o.b)("p",null,Object(o.b)("img",{alt:"MLC",src:r(111).default}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," : ",Object(o.b)("a",{parentName:"li",href:"https://github.com/microsoft/MLC"},"https://github.com/microsoft/MLC")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pdf")," : ",Object(o.b)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/uploads/prod/2020/12/aaai2021_mlc_zheng.pdf"},"https://www.microsoft.com/en-us/research/uploads/prod/2020/12/aaai2021_mlc_zheng.pdf"))),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"MLC is an actual biquality learning algorithm (uses both trusted and untrusted data)."),Object(o.b)("li",{parentName:"ol"},"MLC uses a Meta Learning approach to correct corrupted/untrusted labels : Learning to correct."),Object(o.b)("li",{parentName:"ol"},"The meta model (a label correction network) correct label for corrupted instances while the main model learns on corrected labels."),Object(o.b)("li",{parentName:"ol"},"Both models are jointly trained by solving bilevel optimization. The meta model is learned by how much the main model performs on trusted labels. The main model is learned by how much it performs on labels corrected by the meta model."),Object(o.b)("li",{parentName:"ol"},"A (novel) k step look ahead SGD to solve this optimization problem."),Object(o.b)("li",{parentName:"ol"},"Meta Model has an embedding of the data and the untrusted label as an input to learn how to correct it."),Object(o.b)("li",{parentName:"ol"},"Experiments on widely used datasets and noises against State-of-the-Art competitors.")))}m.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);