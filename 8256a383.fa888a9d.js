(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return h}));var n=a(1),i=a(9),l=(a(0),a(145)),o={title:"Some proofs about statistical learning and label noise"},b={permalink:"/thesis/notes/2020/01/11/proofs",source:"@site/notes/2020-01-11-proofs.md",description:"When doing binary classfication, having noise in our label means that they can be flipped from one class to the other. When observing a label, we will never know if it has been flipped or not, only the probability of the flip to occur.",date:"2020-01-11T00:00:00.000Z",tags:[],title:"Some proofs about statistical learning and label noise",nextItem:{title:"Zhou - A Brief Introduction to Weakly Supervised Learning",permalink:"/thesis/notes/2019/09/27/zhou"}},r=[{value:"Notations",id:"notations",children:[]},{value:"Random Noise",id:"random-noise",children:[]}],s={rightToc:r},c="wrapper";function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When doing binary classfication, having noise in our label means that they can be flipped from one class to the other. When observing a label, we will never know if it has been flipped or not, only the probability of the flip to occur."),Object(l.b)("p",null,"Noisy labels can definitly mess up with model accuracy and make us unable to evaluate it. For example, answering this question can be quite hard : Is it a false positive or the algorithm was right and the label was flipped ?"),Object(l.b)("p",null,"Thanksfully researchers are clever and they found some theoritical guarantees to still be able to do machine learning in this setup. We will redo proofs found in various papers covering this subject, starting from the easiest setup (random noise) to the hardest one (individual dependent noise)."),Object(l.b)("h2",{id:"notations"},"Notations"),Object(l.b)("p",null,"Firts, let's have some notations for the following proofs."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Let $X \\in \\mathcal{X} \\subset \\mathbb{R}^d$, be the data"),Object(l.b)("li",{parentName:"ul"},"Let $Y \\in \\mathcal{Y} = ","{","-1,+1","}","$, be the true unobserved label"),Object(l.b)("li",{parentName:"ul"},"Let $\\tilde{Y} \\in \\mathcal{Y}$, be the observed labels"),Object(l.b)("li",{parentName:"ul"},"Let $D(X,Y)$, be the clean distribution"),Object(l.b)("li",{parentName:"ul"},"Let $D_\u03c1(X,\\tilde{Y})$, be the noisy distribution"),Object(l.b)("li",{parentName:"ul"},"Let $\u03c1_Y(X) = \\mathbb{P}(\\tilde{Y}|Y,X)$, be the noise probability")),Object(l.b)("h2",{id:"random-noise"},"Random Noise"),Object(l.b)("p",null,"Having random noise in our labels means that the probability of a flip to occur is unrelated to the statsitical individual $X$ or from the label value $Y$."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Definition :")),Object(l.b)("p",null,"We say that our labels are under a random noise if there is $\u03c1\u2208\\mathbb{R}$ so that $\u2200X\u2208\\mathcal{X},\u2200Y\u2208\\mathcal{Y}, \u03c1_Y(X)=\u03c1$"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Definition :")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Let $\\mathcal{F} = \\mathcal{X}^{\\mathcal{Y}}$"),Object(l.b)("li",{parentName:"ul"},"Let $L\\in\\mathcal{Y^2}^{\\mathbb{R}}$"),Object(l.b)("li",{parentName:"ul"},"Let $c\\in\\mathbb{R}$")),Object(l.b)("p",null,"We say that L is a symetric loss function when :"),Object(l.b)("p",null,"[","\n\u2200f\u2208\\mathcal{F},\u2200x\u2208\\mathcal{X},\u2211_{y\\in\\mathcal{Y}}L(f(x),y)=c\n","]"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Theorem :")),Object(l.b)("p",null,"Let :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"$\\mathcal{F} = \\mathcal{X}^{\\mathcal{Y}}$"),Object(l.b)("li",{parentName:"ul"},"$L\\in\\mathcal{Y^2}^{\\mathbb{R}}$")),Object(l.b)("p",null,"If :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"$\\mathcal{Y}=","{","-1,1","}","$"),Object(l.b)("li",{parentName:"ul"},"$L$ is a symetric loss function"),Object(l.b)("li",{parentName:"ul"},"$\u03c1\u2208\\mathbb{R}$ and $\u03c1<min_{y\u2208\\mathcal{Y}}(\\mathbb{P}(Y=y))$")),Object(l.b)("p",null,"Then $L$ is robust to random noise :\n","[","\nargmin",Object(l.b)("em",{parentName:"p"},"{f\u2208\\mathcal{F}}R"),"{D,L}(f)=argmin",Object(l.b)("em",{parentName:"p"},"{f\u2208\\mathcal{F}}R"),"{D_\u03c1,L}(f)\n","]"))}h.isMDXComponent=!0}}]);