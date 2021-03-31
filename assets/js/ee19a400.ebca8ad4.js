(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/coteaching-8a41dcede948608101271068a30bcbdc.png"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(102)),o={title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",tags:["reading-notes","instance-selection","collaborative-learning"]},l={permalink:"/notes/2021/02/26/coteaching",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-02-26-coteaching.md",source:"@site/notes/2021-02-26-coteaching.md",description:"Co-teaching",date:"2021-02-26T00:00:00.000Z",formattedDate:"February 26, 2021",tags:[{label:"reading-notes",permalink:"/notes/tags/reading-notes"},{label:"instance-selection",permalink:"/notes/tags/instance-selection"},{label:"collaborative-learning",permalink:"/notes/tags/collaborative-learning"}],title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",readingTime:2.385,truncated:!0,prevItem:{title:"MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)",permalink:"/notes/2021/03/01/mentornet"},nextItem:{title:"Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting (MWNet)",permalink:"/notes/2021/02/24/mwnet"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Assets",id:"assets",children:[{value:"Strengths",id:"strengths",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]}]},{value:"Novelty",id:"novelty",children:[]},{value:"Significance",id:"significance",children:[]},{value:"Soudness",id:"soudness",children:[]},{value:"Evaluation",id:"evaluation",children:[]},{value:"How can I use/enhance the paper ?",id:"how-can-i-useenhance-the-paper-",children:[]},{value:"What did I learn from reading this paper ?",id:"what-did-i-learn-from-reading-this-paper-",children:[]},{value:"New paper to read/Interesting Citations",id:"new-paper-to-readinteresting-citations",children:[]},{value:"How I am going to use this paper ?",id:"how-i-am-going-to-use-this-paper-",children:[]},{value:"Bibtex",id:"bibtex",children:[]}],c={toc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{align:"center"},Object(i.b)("p",null,Object(i.b)("img",{alt:"Co-teaching",src:n(119).default}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," : ",Object(i.b)("a",{parentName:"li",href:"https://github.com/bhanML/Co-teaching"},"https://github.com/bhanML/Co-teaching")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"pdf")," : ",Object(i.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/1804.06872.pdf"},"https://arxiv.org/pdf/1804.06872.pdf"))),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Collaborative algorithm between two networks to learn on untrusted data only."),Object(i.b)("li",{parentName:"ol"},"Each round, loss of each network is computed on it's own minibatch. The samples with the smallest loss are considered the most informative and are given to the other network to learn (link to curriculum learning)"),Object(i.b)("li",{parentName:"ol"},"Leverage memorization effect of deep neural networks (first learn clean and easy patterns then overfit noise)."),Object(i.b)("li",{parentName:"ol"},"Introduction of a dynamic size for the number of informative samples used (start high then reduce with number of epochs)")),Object(i.b)("h2",{id:"assets"},"Assets"),Object(i.b)("h3",{id:"strengths"},"Strengths"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Leverage the memorization effect"),Object(i.b)("li",{parentName:"ol"},"Collaborative learning between two models"),Object(i.b)("li",{parentName:"ol"},"Small loss instances are the most informatives.")),Object(i.b)("h3",{id:"drawbacks"},"Drawbacks"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Needs noise rate for hyperparameter tuning (can be fixed in the biquality case)."),Object(i.b)("li",{parentName:"ol"},"Tested on only three vision datasets and two noise types."),Object(i.b)("li",{parentName:"ol"},"An empirical paper (no proofs) with good improvments on pair noise but not on symmetric one."),Object(i.b)("li",{parentName:"ol"},"Somewhat high algorithm complexity as it needs two learn two networks at once.")),Object(i.b)("h2",{id:"novelty"},"Novelty"),Object(i.b)("p",null,"It's a novel algorithm as it reuses proven idea from different fields, small loss instances as informative from Mentor Net (distillation), collaborative learning from Co-Training (semi-supervised learning) and the memorization effect of neural networks (robust learninng to label noise)."),Object(i.b)("h2",{id:"significance"},"Significance"),Object(i.b)("p",null,"The results are somewhat significant, especially on pair noise. Nonetheless too few datasets and kind of noises have been used for an experimental paper."),Object(i.b)("h2",{id:"soudness"},"Soudness"),Object(i.b)("p",null,"The paper seems OK but no proofs have been provided but convergence seems to work empirically."),Object(i.b)("h2",{id:"evaluation"},"Evaluation"),Object(i.b)("p",null,"The evaluation is somewhat weak because of the lack of proofs and lack of more in depth experiments."),Object(i.b)("h2",{id:"how-can-i-useenhance-the-paper-"},"How can I use/enhance the paper ?"),Object(i.b)("p",null,"The mixing of ideas from different fields to assemble an algorithm is quite nice and I should reuse the free main principles about memorization, two networks and small loss instances."),Object(i.b)("h2",{id:"what-did-i-learn-from-reading-this-paper-"},"What did I learn from reading this paper ?"),Object(i.b)("p",null,"That the three principles above works well empirically."),Object(i.b)("h2",{id:"new-paper-to-readinteresting-citations"},"New paper to read/Interesting Citations"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Mentor Net")),Object(i.b)("h2",{id:"how-i-am-going-to-use-this-paper-"},"How I am going to use this paper ?"),Object(i.b)("p",null,"Citation. The requirement of the noise rate could make it part of the biquality learning algorithm family but i'm not quite sure yet. Otherwise Implement it."),Object(i.b)("h2",{id:"bibtex"},"Bibtex"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@inproceedings{NEURIPS2018_a19744e2,\n author = {Han, Bo and Yao, Quanming and Yu, Xingrui and Niu, Gang and Xu, Miao and Hu, Weihua and Tsang, Ivor and Sugiyama, Masashi},\n booktitle = {Advances in Neural Information Processing Systems},\n editor = {S. Bengio and H. Wallach and H. Larochelle and K. Grauman and N. Cesa-Bianchi and R. Garnett},\n pages = {},\n publisher = {Curran Associates, Inc.},\n title = {Co-teaching: Robust training of deep neural networks with extremely noisy labels},\n url = {https://proceedings.neurips.cc/paper/2018/file/a19744e268754fb0148b017647355b7b-Paper.pdf},\n volume = {31},\n year = {2018}\n}\n")))}p.isMDXComponent=!0}}]);