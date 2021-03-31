(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),b=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},l=function(e){var a=b(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},h=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=b(t),h=n,u=l["".concat(i,".").concat(h)]||l[h]||o[h]||s;return t?r.a.createElement(u,c(c({ref:a},m),{},{components:t})):r.a.createElement(u,c({ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=h;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<s;m++)i[m]=t[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},113:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/mslc-294456dd0266c9701903e1a14609c500.png"},114:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/mslc-struct-3955d58696056e1ee73471a4d147b1ff.png"},67:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),s=(t(0),t(102)),i={title:"Learning to Purify Noisy Labels via Meta Soft Label Corrector"},c={permalink:"/notes/2021/03/25/.mslc",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-03-25.mslc.md",source:"@site/notes/2021-03-25.mslc.md",description:"MSLC",date:"2021-03-25T00:00:00.000Z",formattedDate:"March 25, 2021",tags:[],title:"Learning to Purify Noisy Labels via Meta Soft Label Corrector",readingTime:1.41,truncated:!0,nextItem:{title:"Meta Transition Adaptation for Robust Deep Learning with Noisy Labels",permalink:"/notes/2021/03/21/mta"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Assets",id:"assets",children:[{value:"Strengths",id:"strengths",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]}]},{value:"Novelty",id:"novelty",children:[]},{value:"Significance",id:"significance",children:[]},{value:"Soudness",id:"soudness",children:[]},{value:"Evaluation",id:"evaluation",children:[]},{value:"How can I use/enhance the paper ?",id:"how-can-i-useenhance-the-paper-",children:[]},{value:"What did I learn from reading this paper ?",id:"what-did-i-learn-from-reading-this-paper-",children:[]},{value:"New paper to read/Interesting Citations",id:"new-paper-to-readinteresting-citations",children:[]},{value:"How I am going to use this paper ?",id:"how-i-am-going-to-use-this-paper-",children:[]},{value:"Bibtex",id:"bibtex",children:[]}],m={toc:p};function b(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},m,i,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",{align:"center"},Object(s.b)("p",null,Object(s.b)("img",{alt:"MSLC",src:t(113).default}))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"code")," : ",Object(s.b)("a",{parentName:"li",href:"https://github.com/WuYichen-97/Learning-to-Purify-Noisy-Labels-via-Meta-Soft-Label-Corrector"},"https://github.com/WuYichen-97/Learning-to-Purify-Noisy-Labels-via-Meta-Soft-Label-Corrector")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"pdf")," : ",Object(s.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/2008.00627.pdf"},"https://arxiv.org/pdf/2008.00627.pdf"))),Object(s.b)("h2",{id:"summary"},"Summary"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Meta Learning algorithm to learn a corrector model on labels "),Object(s.b)("li",{parentName:"ol"},"Corrector Model is design as such that it uses it's past correction, the current label estimation of the classifier and the actual label by doing convex combinations of them."),Object(s.b)("li",{parentName:"ol"},"The weights of these combinations are the model and take as the input the difference (loss) between them.")),Object(s.b)("p",{align:"center"},Object(s.b)("p",null,Object(s.b)("img",{alt:"MSLC",src:t(114).default}))),Object(s.b)("h2",{id:"assets"},"Assets"),Object(s.b)("h3",{id:"strengths"},"Strengths"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Reuses architecture and ideas from meta curriculum learning (MWNet) to do meta label correction.")),Object(s.b)("h3",{id:"drawbacks"},"Drawbacks"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The architecture of the corrector is weird, especially the ",Object(s.b)("span",{parentName:"li",className:"math math-inline"},Object(s.b)("span",{parentName:"span",className:"katex"},Object(s.b)("span",{parentName:"span",className:"katex-mathml"},Object(s.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"\u03b2")),Object(s.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\beta")))),Object(s.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(s.b)("span",{parentName:"span",className:"base"},Object(s.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(s.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.05278em"}},"\u03b2")))))," part. If we are using it (we might not) why not learn with many more past ",Object(s.b)("span",{parentName:"li",className:"math math-inline"},Object(s.b)("span",{parentName:"span",className:"katex"},Object(s.b)("span",{parentName:"span",className:"katex-mathml"},Object(s.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("msup",{parentName:"mrow"},Object(s.b)("mover",{parentName:"msup",accent:"true"},Object(s.b)("mi",{parentName:"mover"},"y"),Object(s.b)("mo",{parentName:"mover"},"~")),Object(s.b)("mrow",{parentName:"msup"},Object(s.b)("mi",{parentName:"mrow"},"t"),Object(s.b)("mo",{parentName:"mrow"},"\u2212"),Object(s.b)("mi",{parentName:"mrow"},"k")))),Object(s.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\tilde{y}^{t-k}")))),Object(s.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(s.b)("span",{parentName:"span",className:"base"},Object(s.b)("span",{parentName:"span",className:"strut",style:{height:"1.043548em",verticalAlign:"-0.19444em"}}),Object(s.b)("span",{parentName:"span",className:"mord"},Object(s.b)("span",{parentName:"span",className:"mord accent"},Object(s.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(s.b)("span",{parentName:"span",className:"vlist-r"},Object(s.b)("span",{parentName:"span",className:"vlist",style:{height:"0.6678599999999999em"}},Object(s.b)("span",{parentName:"span",style:{top:"-3em"}},Object(s.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(s.b)("span",{parentName:"span",className:"mord"},Object(s.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03588em"}},"y"))),Object(s.b)("span",{parentName:"span",style:{top:"-3.35em"}},Object(s.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(s.b)("span",{parentName:"span",className:"accent-body",style:{left:"-0.19444em"}},Object(s.b)("span",{parentName:"span",className:"mord"},"~")))),Object(s.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(s.b)("span",{parentName:"span",className:"vlist-r"},Object(s.b)("span",{parentName:"span",className:"vlist",style:{height:"0.19444em"}},Object(s.b)("span",{parentName:"span"}))))),Object(s.b)("span",{parentName:"span",className:"msupsub"},Object(s.b)("span",{parentName:"span",className:"vlist-t"},Object(s.b)("span",{parentName:"span",className:"vlist-r"},Object(s.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8491079999999999em"}},Object(s.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(s.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(s.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(s.b)("span",{parentName:"span",className:"mord mtight"},Object(s.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"t"),Object(s.b)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),Object(s.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.03148em"}},"k")))))))))))))," with ",Object(s.b)("span",{parentName:"li",className:"math math-inline"},Object(s.b)("span",{parentName:"span",className:"katex"},Object(s.b)("span",{parentName:"span",className:"katex-mathml"},Object(s.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"k"),Object(s.b)("mo",{parentName:"mrow"},">"),Object(s.b)("mn",{parentName:"mrow"},"1")),Object(s.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k>1")))),Object(s.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(s.b)("span",{parentName:"span",className:"base"},Object(s.b)("span",{parentName:"span",className:"strut",style:{height:"0.73354em",verticalAlign:"-0.0391em"}}),Object(s.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k"),Object(s.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(s.b)("span",{parentName:"span",className:"mrel"},">"),Object(s.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(s.b)("span",{parentName:"span",className:"base"},Object(s.b)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),Object(s.b)("span",{parentName:"span",className:"mord"},"1"))))),"."),Object(s.b)("li",{parentName:"ol"},"Relies on a warm-up (competitors aren't)."),Object(s.b)("li",{parentName:"ol"},"Weirdly truncated experiments (noise ratio not going more than 0.4 for assymetric noise).")),Object(s.b)("h2",{id:"novelty"},"Novelty"),Object(s.b)("p",null,"The approach is somewhat novel."),Object(s.b)("h2",{id:"significance"},"Significance"),Object(s.b)("p",null,"The results are significant as the experiments have shown."),Object(s.b)("h2",{id:"soudness"},"Soudness"),Object(s.b)("p",null,"The paper seems OK."),Object(s.b)("h2",{id:"evaluation"},"Evaluation"),Object(s.b)("p",null,"A lot of experiments have been conducted but on too few datasets and too few noise rates."),Object(s.b)("h2",{id:"how-can-i-useenhance-the-paper-"},"How can I use/enhance the paper ?"),Object(s.b)("h2",{id:"what-did-i-learn-from-reading-this-paper-"},"What did I learn from reading this paper ?"),Object(s.b)("p",null,"Smart use of old algorithm (MWNet) to another purpose."),Object(s.b)("h2",{id:"new-paper-to-readinteresting-citations"},"New paper to read/Interesting Citations"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Training deep neural networks on noisy labels with bootstrapping")),Object(s.b)("h2",{id:"how-i-am-going-to-use-this-paper-"},"How I am going to use this paper ?"),Object(s.b)("p",null,"Citation/Compare"),Object(s.b)("h2",{id:"bibtex"},"Bibtex"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"@article{wu2020learning,\n  title={Learning to Purify Noisy Labels via Meta Soft Label Corrector},\n  author={Wu, Yichen and Shu, Jun and Xie, Qi and Zhao, Qian and Meng, Deyu},\n  journal={arXiv preprint arXiv:2008.00627},\n  year={2020}\n}\n")))}b.isMDXComponent=!0}}]);