(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return b})),t.d(e,"rightToc",(function(){return p})),t.d(e,"default",(function(){return O}));var s=t(1),m=t(9),n=(t(0),t(149)),c={title:"Bekker - Learning from Positive and Unlabeled Data - A Survey"},b={permalink:"/thesis/notes/2020/01/18/bekker",source:"@site/notes/2020-01-18-bekker.md",description:"\x3c!--truncate--\x3e",date:"2020-01-18T00:00:00.000Z",tags:[],title:"Bekker - Learning from Positive and Unlabeled Data - A Survey",prevItem:{title:"Importance Reweighting for Positive Unlabeled Learning",permalink:"/thesis/notes/2020/02/28/ir-pul"},nextItem:{title:"Some proofs about Statistical Learning and Label Noise",permalink:"/thesis/notes/2020/01/11/proofs"}},p=[{value:"Notations",id:"notations",children:[]}],r={rightToc:p},j="wrapper";function O(a){var e=a.components,t=Object(m.a)(a,["components"]);return Object(n.b)(j,Object(s.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"notations"},"Notations"),Object(n.b)("p",null,"Firts, let's have some notations for the following review of the survey."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Let ",Object(n.b)("span",Object(s.a)({parentName:"li"},{className:"math math-inline"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(n.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(n.b)("semantics",{parentName:"math"},Object(n.b)("mrow",{parentName:"semantics"},Object(n.b)("mover",Object(s.a)({parentName:"mrow"},{accent:"true"}),Object(n.b)("mi",{parentName:"mover"},"Y"),Object(n.b)("mo",{parentName:"mover"},"~")),Object(n.b)("mo",{parentName:"mrow"},"\u2208"),Object(n.b)("mover",Object(s.a)({parentName:"mrow"},{accent:"true"}),Object(n.b)("mi",Object(s.a)({parentName:"mover"},{mathvariant:"script"}),"Y"),Object(n.b)("mo",{parentName:"mover"},"~")),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"{"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"?"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{separator:"true"}),","),Object(n.b)("mo",{parentName:"mrow"},"+"),Object(n.b)("mn",{parentName:"mrow"},"1"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"}")),Object(n.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\tilde{Y} \u2208 \\mathcal{\\tilde{Y}} = \\{?,+1\\}")))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.9592899999999999em",verticalAlign:"-0.0391em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord accent"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.9201899999999998em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"))),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.6023300000000003em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"accent-body",style:{left:"-0.25em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"~"))))))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"\u2208"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.01741em",verticalAlign:"-0.09722em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord accent"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.9201899999999998em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathcal",style:{marginRight:"0.08222em"}}),"Y"))),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.6023300000000003em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"accent-body",style:{left:"-0.16666em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"~")))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.09722em"}}),Object(n.b)("span",{parentName:"span"})))))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"{"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),"?"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mpunct"}),","),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"+"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"1"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),"}"))))),", be the observed label"),Object(n.b)("li",{parentName:"ul"},"Let ",Object(n.b)("span",Object(s.a)({parentName:"li"},{className:"math math-inline"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(n.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(n.b)("semantics",{parentName:"math"},Object(n.b)("mrow",{parentName:"semantics"},Object(n.b)("mi",{parentName:"mrow"},"\u03c0"),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),"P"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(n.b)("mi",{parentName:"mrow"},"Y"),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mn",{parentName:"mrow"},"1"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(n.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\u03c0=\u2119(Y=1)")))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"\u03c0"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord amsrm"}),"P"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"("),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"1"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),")"))))),", be the class prior on the true unobserved label"),Object(n.b)("li",{parentName:"ul"},"Let ",Object(n.b)("span",Object(s.a)({parentName:"li"},{className:"math math-inline"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(n.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(n.b)("semantics",{parentName:"math"},Object(n.b)("mrow",{parentName:"semantics"},Object(n.b)("mover",Object(s.a)({parentName:"mrow"},{accent:"true"}),Object(n.b)("mi",{parentName:"mover"},"\u03c0"),Object(n.b)("mo",{parentName:"mover"},"~")),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),"P"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(n.b)("mover",Object(s.a)({parentName:"mrow"},{accent:"true"}),Object(n.b)("mi",{parentName:"mover"},"Y"),Object(n.b)("mo",{parentName:"mover"},"~")),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mn",{parentName:"mrow"},"1"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(n.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\tilde{\u03c0}=\u2119(\\tilde{Y}=1)")))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.6678599999999999em",verticalAlign:"0em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord accent"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.6678599999999999em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"\u03c0"))),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.35em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"accent-body",style:{left:"-0.25em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"~"))))))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.1701899999999998em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord amsrm"}),"P"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"("),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord accent"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.9201899999999998em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"))),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.6023300000000003em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"accent-body",style:{left:"-0.25em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"~"))))))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"1"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),")"))))),", be the class prior on the observed label"),Object(n.b)("li",{parentName:"ul"},"Let ",Object(n.b)("span",Object(s.a)({parentName:"li"},{className:"math math-inline"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(n.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(n.b)("semantics",{parentName:"math"},Object(n.b)("mrow",{parentName:"semantics"},Object(n.b)("mi",{parentName:"mrow"},"e"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(n.b)("mi",{parentName:"mrow"},"x"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),"P"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(n.b)("mover",Object(s.a)({parentName:"mrow"},{accent:"true"}),Object(n.b)("mi",{parentName:"mover"},"Y"),Object(n.b)("mo",{parentName:"mover"},"~")),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mn",{parentName:"mrow"},"1"),Object(n.b)("mi",Object(s.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2223"),Object(n.b)("mi",{parentName:"mrow"},"Y"),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mn",{parentName:"mrow"},"1"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{separator:"true"}),","),Object(n.b)("mi",{parentName:"mrow"},"X"),Object(n.b)("mo",{parentName:"mrow"},"="),Object(n.b)("mi",{parentName:"mrow"},"x"),Object(n.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(n.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"e(x)=\u2119(\\tilde{Y}=1|Y=1,X=x)")))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"e"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"("),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"x"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),")"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.1701899999999998em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord amsrm"}),"P"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"("),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord accent"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.9201899999999998em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"))),Object(n.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.6023300000000003em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"accent-body",style:{left:"-0.25em"}}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"~"))))))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"1"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"\u2223"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"Y"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),"1"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mpunct"}),","),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.07847em"}}),"X"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mrel"}),"="),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"x"),Object(n.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),")"))))),", be the propensity function")))}O.isMDXComponent=!0}}]);