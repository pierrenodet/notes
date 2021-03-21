(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mentornet-842f22abdfffc0556dce88947b84b619.gif"},135:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mentornet-architecture-fc1003c7e96ad545ad53398b2cb8fa2d.png"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(100)),o={title:"MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)",tags:["reading-notes","meta-learning","importance-reweighting"]},l={permalink:"/notes/2021/03/01/mentornet",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-03-01-mentornet.md",source:"@site/notes/2021-03-01-mentornet.md",description:"MentorNet",date:"2021-03-01T00:00:00.000Z",tags:[{label:"reading-notes",permalink:"/notes/tags/reading-notes"},{label:"meta-learning",permalink:"/notes/tags/meta-learning"},{label:"importance-reweighting",permalink:"/notes/tags/importance-reweighting"}],title:"MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)",readingTime:2.645,truncated:!0,prevItem:{title:"Meta Transition Adaptation for Robust Deep Learning with Noisy Labels",permalink:"/notes/2021/03/21/mta"},nextItem:{title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",permalink:"/notes/2021/02/26/coteaching"}},c=[{value:"Summary",id:"summary",children:[]},{value:"Assets",id:"assets",children:[{value:"Strengths",id:"strengths",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]}]},{value:"Novelty",id:"novelty",children:[]},{value:"Significance",id:"significance",children:[]},{value:"Soudness",id:"soudness",children:[]},{value:"Evaluation",id:"evaluation",children:[]},{value:"How can I use/enhance the paper ?",id:"how-can-i-useenhance-the-paper-",children:[]},{value:"What did I learn from reading this paper ?",id:"what-did-i-learn-from-reading-this-paper-",children:[]},{value:"New paper to read/Interesting Citations",id:"new-paper-to-readinteresting-citations",children:[]},{value:"How I am going to use this paper ?",id:"how-i-am-going-to-use-this-paper-",children:[]},{value:"Bibtex",id:"bibtex",children:[]}],s={toc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{align:"center"},Object(i.b)("p",null,Object(i.b)("img",{alt:"MentorNet",src:n(113).default}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," : ",Object(i.b)("a",{parentName:"li",href:"https://github.com/google/mentornet"},"https://github.com/google/mentornet")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"pdf")," : ",Object(i.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/1712.05055.pdf"},"https://arxiv.org/pdf/1712.05055.pdf"))),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Modern take/refresh on curriculum learning"),Object(i.b)("li",{parentName:"ol"},"Meta Learning algorithm to learn a curriculum from data instead of hand designing it : Learning curriculum"),Object(i.b)("li",{parentName:"ol"},"Actual Biquality Learning algorithm (learning the curriculum on a mix of trusted and untrusted data)"),Object(i.b)("li",{parentName:"ol"},"Proposed architecture of MentorNet (model that represent the learned curriculum) with bidirection LSTM (for loss evolution and memory) and MLP"),Object(i.b)("li",{parentName:"ol"},"MentorNet learned as a supervised classification task (clean samples as 1, corrupted samples as 0). Student Net learn the usual tasks on reweighted samples from MentorNet."),Object(i.b)("li",{parentName:"ol"},"Insights on the algorithm that might (not automatically) optimize an M-Robust loss function."),Object(i.b)("li",{parentName:"ol"},"Exaustive experiments against state of the art curriculum based reweighting scheme.")),Object(i.b)("h2",{id:"assets"},"Assets"),Object(i.b)("h3",{id:"strengths"},"Strengths"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Learning curriculum (removing humain expertise/biais by pure learning)"),Object(i.b)("li",{parentName:"ol"},"Exaustive benchmark of curriculum based algorithm"),Object(i.b)("li",{parentName:"ol"},"Nice insights on both curriculum learning and MentorNet relation to the robust M-estimator")),Object(i.b)("h3",{id:"drawbacks"},"Drawbacks"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Complexed and heavily hand designed architecture for the MentorNet")),Object(i.b)("p",null,Object(i.b)("img",{alt:"MentorNetArchitecture",src:n(135).default})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"No comparison against other weakly supervised algorithm"),Object(i.b)("li",{parentName:"ol"},"The predefined curriculum case is useless and only brings noise to the paper and makes it hard to understand fully (especially the algorithm)."),Object(i.b)("li",{parentName:"ol"},'The algorithm seems to work well for very deep architecture (100M parameters), but not for "ok"-deep architecture (1M parameters).')),Object(i.b)("h2",{id:"novelty"},"Novelty"),Object(i.b)("p",null,"It's a very novel approach that brings the learning instead of hand designing further for the case of curriculum learning algorithm."),Object(i.b)("h2",{id:"significance"},"Significance"),Object(i.b)("p",null,'The results are significant, there is still some cases where MentorNet does not bring a lot of value in comparison of the simple self-paced learning as with not-too-deep architecture. Tho, to achieve this results it needs to use a lot of "usual tricks" as the warmup phase.'),Object(i.b)("h2",{id:"soudness"},"Soudness"),Object(i.b)("p",null,"The paper is technically sound with a lot of theortical insights on why it works."),Object(i.b)("h2",{id:"evaluation"},"Evaluation"),Object(i.b)("p",null,'The paper is very convincing and well written. It could be perfect without the case of "estimating predifined curriculum" to make the paper less noisy.'),Object(i.b)("h2",{id:"how-can-i-useenhance-the-paper-"},"How can I use/enhance the paper ?"),Object(i.b)("p",null,"Implementing it and redoing"),Object(i.b)("h2",{id:"what-did-i-learn-from-reading-this-paper-"},"What did I learn from reading this paper ?"),Object(i.b)("p",null,"I learned a lot about curriculum learning."),Object(i.b)("h2",{id:"new-paper-to-readinteresting-citations"},"New paper to read/Interesting Citations"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"mixup: Beyond Empirical Risk Minimization (deep networks first learn easy and clean signal then overfits noisy data)."),Object(i.b)("li",{parentName:"ol"},"Self-paced learning for latent variable models (important paper on curriculum learning)")),Object(i.b)("h2",{id:"how-i-am-going-to-use-this-paper-"},"How I am going to use this paper ?"),Object(i.b)("p",null,"Implementation, it's a very important paper of the field, I need to fully understand the pros and cons even at the technical level."),Object(i.b)("h2",{id:"bibtex"},"Bibtex"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@InProceedings{pmlr-v80-jiang18c, \ntitle = {{M}entor{N}et: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels}, \nauthor = {Jiang, Lu and Zhou, Zhengyuan and Leung, Thomas and Li, Li-Jia and Fei-Fei, Li}, \nbooktitle = {Proceedings of the 35th International Conference on Machine Learning},\npages = {2304--2313}, \nyear = {2018}, \neditor = {Jennifer Dy and Andreas Krause}, \nvolume = {80}, series = {Proceedings of Machine Learning Research}, \naddress = {Stockholmsm\xe4ssan, Stockholm Sweden}, \nmonth = {10--15 Jul}, \npublisher = {PMLR}, \npdf = {http://proceedings.mlr.press/v80/jiang18c/jiang18c.pdf}, \nurl = {http://proceedings.mlr.press/v80/jiang18c.html}}\n")))}u.isMDXComponent=!0}}]);