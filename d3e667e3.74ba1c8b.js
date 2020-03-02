(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{143:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return b})),t.d(e,"rightToc",(function(){return p})),t.d(e,"default",(function(){return l}));var n=t(1),s=t(9),m=(t(0),t(149)),c={id:"introduction",title:"Introduction"},b={id:"introduction",title:"Introduction",description:"What comes to mind when talking about AI and it's last great successes ? Machine Learning and especially Supervised Learning.",source:"@site/manuscript/introduction.md",permalink:"/thesis/manuscript/introduction",editUrl:"https://github.com/pierrenodet/thesis/edit/master/manuscript/introduction.md",sidebar:"someSidebar",next:{title:"Weakly Supervised Learning",permalink:"/thesis/manuscript/wsl"}},p=[],r={rightToc:p},i="wrapper";function l(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(m.b)(i,Object(n.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(m.b)("p",null,"What comes to mind when talking about AI and it's last great successes ? Machine Learning and especially Supervised Learning."),Object(m.b)("p",null,"Supervised Learning is a family of learning tasks with the aim to learn a concept ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"Y"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2223"),Object(m.b)("mi",{parentName:"mrow"},"X"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(Y|X)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u2223"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," from instances ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"X")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"X")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X")))))," and their associated labels ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"Y")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"Y")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"))))),". In this thesis we will focus on Binary Classification, a task from this family where the labels can only take two different values ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"Y"),Object(m.b)("mo",{parentName:"mrow"},"\u2208"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"script"}),"Y"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"{"),Object(m.b)("mo",{parentName:"mrow"},"\u2212"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"}")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"Y \u2208 \\mathcal{Y} = \\{-1,+1\\}")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.72243em",verticalAlign:"-0.0391em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2208"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.78055em",verticalAlign:"-0.09722em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathcal",style:{marginRight:"0.08222em"}}),"Y")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"{"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u2212"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"}"))))),". An example of such a task would be learning to predict if an image contains a dog or a cat. In this example ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"X")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"X")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X")))))," correspond to an image, ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"Y")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"Y")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y")))))," the animal contained in the image, ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"script"}),"Y"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"{"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),'"'),Object(m.b)("mi",{parentName:"mrow"},"c"),Object(m.b)("mi",{parentName:"mrow"},"a"),Object(m.b)("mi",{parentName:"mrow"},"t"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),'"'),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),'"'),Object(m.b)("mi",{parentName:"mrow"},"d"),Object(m.b)("mi",{parentName:"mrow"},"o"),Object(m.b)("mi",{parentName:"mrow"},"g"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),'"'),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"}")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),'\\mathcal{Y}=\\{"cat","dog"\\}')))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.78055em",verticalAlign:"-0.09722em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathcal",style:{marginRight:"0.08222em"}}),"Y")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"{"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),'"'),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"c"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"t"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),'"'),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),'"'),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"d"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"o"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"g"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),'"'),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"}")))))," and the concept to learn ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"Y"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2223"),Object(m.b)("mi",{parentName:"mrow"},"X"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(Y|X)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u2223"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," be which animal the image contains."),Object(m.b)("p",null,"Netherless the efficiency of such tasks rely on having a lot of clean labels adapted for every instances in the training dataset. For some use cases acquiring these labels could be costly, inefficient or even impossible. To be more specific, the labels in three different ways :"),Object(m.b)("p",null,"A weak supervision could be defined thanks to three differents criteria on the available labels :"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"Quantity"),Object(m.b)("li",{parentName:"ul"},"Quality"),Object(m.b)("li",{parentName:"ul"},"Adaptability")),Object(m.b)("p",null,'The quantity of available labels greatly influence the efficiency of supervised learning algorithms. As we know from "Theoretical Comparisons of Positive-Unlabeled Learning against Positive-Negative Learning" by Niu et Al. the error bound for a supervised learning task is invertionally proportional to the squared root of the dataset size ',Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"O"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"/"),Object(m.b)("mtext",{parentName:"mrow"},"\u221a"),Object(m.b)("mi",{parentName:"mrow"},"n"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"O(1/\u221an)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1.05em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02778em"}}),"O"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"/"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u221a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"n"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),"."),Object(m.b)("p",null,"The quality of labels can be defined in term of difference between the true concept to learn ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"Y"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2223"),Object(m.b)("mi",{parentName:"mrow"},"X"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(Y|X)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u2223"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," and the observed concept ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mover",Object(n.a)({parentName:"mrow"},{accent:"true"}),Object(m.b)("mi",{parentName:"mover"},"Y"),Object(m.b)("mo",{parentName:"mover"},"~")),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2223"),Object(m.b)("mi",{parentName:"mrow"},"X"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(\\tilde{Y}|X)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1.1701899999999998em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord accent"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.9201899999999998em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"))),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.6023300000000003em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"accent-body",style:{left:"-0.25em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"~"))))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u2223"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),". It could be caused because of missingness of the labels as in Semi Supervised Learning or Positive Unlabeled Learning, or because of noise in the labels as in Robust Learning to Label Noise."),Object(m.b)("p",null,"The adaptability of labels describe how much they fit to an instance. For example, if the labels are perfectly adapted, there is one label per instance as in Supervised Learning. If the labels are not adapted, there might be only one label per bag of instances as in Multi Instance Learning or there might be labels not meant for the learning task as in Higher Order Supervision."),Object(m.b)("p",null,"Learning with weak supervision define a new family of learning tasks which is called Weakly Supervised Learning."),Object(m.b)("p",null,"The first chapter of this thesis is going to give the reader a deeper comprehension of Weakly Supervised Learning, novel ways to think about the family, state of the art algorithms with yes-no chart ready to be used for engineers and the open questions of the domain."))}l.isMDXComponent=!0}}]);