(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{135:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return b})),t.d(e,"metadata",(function(){return p})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return l}));var s=t(1),n=t(9),m=(t(0),t(149)),b={title:"Flexible Biquality Learning with Mutual Information"},p={permalink:"/thesis/notes/2020/02/29/mutual-information",source:"@site/notes/2020-02-29-mutual-information.md",description:'The concept of Biquality Data has been introduced in "Unifying Semi-Supervised and Robust Learning by Mixup" by Hataya and Nakayama where there is two sets of data, a trusted and an untrusted one.',date:"2020-02-29T00:00:00.000Z",tags:[],title:"Flexible Biquality Learning with Mutual Information",nextItem:{title:"Importance Reweighting for Positive Unlabeled Learning",permalink:"/thesis/notes/2020/02/28/ir-pul"}},c=[],r={rightToc:c},i="wrapper";function l(a){var e=a.components,t=Object(n.a)(a,["components"]);return Object(m.b)(i,Object(s.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(m.b)("p",null,'The concept of Biquality Data has been introduced in "Unifying Semi-Supervised and Robust Learning by Mixup" by Hataya and Nakayama where there is two sets of data, a trusted and an untrusted one.'),Object(m.b)("p",null,"The trusted dataset (",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"D"),Object(m.b)("mi",{parentName:"msub"},"T"))),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"D_T")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02778em"}}),"D"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.32833099999999993em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault mtight",style:{marginRight:"0.13889em"}}),"T")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))))))),") contains labels ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Y"),Object(m.b)("mi",{parentName:"msub"},"T"))),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"Y_T")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.32833099999999993em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault mtight",style:{marginRight:"0.13889em"}}),"T")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"}))))))))))," that represents the true concept (",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Y"),Object(m.b)("mi",{parentName:"msub"},"T")),Object(m.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2223"),Object(m.b)("mi",{parentName:"mrow"},"X")),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"Y_T|X")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.32833099999999993em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault mtight",style:{marginRight:"0.13889em"}}),"T")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"\u2223"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X"))))),") to learn on the learning task. The untrusted dataset (",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"D"),Object(m.b)("mi",{parentName:"msub"},"U"))),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"D_U")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02778em"}}),"D"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.32833099999999993em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault mtight",style:{marginRight:"0.10903em"}}),"U")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))))))),") contains labels ",Object(m.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Y"),Object(m.b)("mi",{parentName:"msub"},"U"))),Object(m.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"Y_U")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.32833099999999993em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault mtight",style:{marginRight:"0.10903em"}}),"U")))),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"}))))))))))," that range from being uniformative (as in Unsupervised Learning) to being the same as the trusted dataset (as in Supervised Learning)."),Object(m.b)("p",null,"In order to represents where the untrusted labels lie in this range, we define the quality of the untrusted labels. In the previous paper, they used a ratio of Kullback-Leibler divergence. Without critising the chosen formula, they were unable in the paper to directly use this value in the learning process."))}l.isMDXComponent=!0}}]);