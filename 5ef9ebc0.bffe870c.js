(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{110:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mentornet-842f22abdfffc0556dce88947b84b619.gif"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(98)),i={title:"MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)",tags:["reading-notes","meta-learning","importance-reweighting"]},c={permalink:"/notes/2021/03/01/mentornet",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-03-01-mentornet.md",source:"@site/notes/2021-03-01-mentornet.md",description:"MentorNet",date:"2021-03-01T00:00:00.000Z",tags:[{label:"reading-notes",permalink:"/notes/tags/reading-notes"},{label:"meta-learning",permalink:"/notes/tags/meta-learning"},{label:"importance-reweighting",permalink:"/notes/tags/importance-reweighting"}],title:"MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)",readingTime:2.51,truncated:!0,nextItem:{title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",permalink:"/notes/2021/02/26/coteaching"}},l=[{value:"Summary",id:"summary",children:[]}],u={toc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{align:"center"},Object(o.b)("p",null,Object(o.b)("img",{alt:"MentorNet",src:r(110).default}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," : ",Object(o.b)("a",{parentName:"li",href:"https://github.com/google/mentornet"},"https://github.com/google/mentornet")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pdf")," : ",Object(o.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/1712.05055.pdf"},"https://arxiv.org/pdf/1712.05055.pdf"))),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Modern take/refresh on curriculum learning"),Object(o.b)("li",{parentName:"ol"},"Meta Learning algorithm to learn a curriculum from data instead of hand designing it : Learning curriculum"),Object(o.b)("li",{parentName:"ol"},"Actual Biquality Learning algorithm (learning the curriculum on a mix of trusted and untrusted data)"),Object(o.b)("li",{parentName:"ol"},"Proposed architecture of MentorNet (model that represent the learned curriculum) with bidirection LSTM (for loss evolution and memory) and MLP"),Object(o.b)("li",{parentName:"ol"},"Insights on the algorithm that might (not automatically) optimize an M-Robust loss function."),Object(o.b)("li",{parentName:"ol"},"Exaustive experiments against state of the art curriculum based reweighting scheme.")))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,f=m["".concat(i,".").concat(b)]||m[b]||s[b]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);