import{_ as u,o,c as r,a as t,t as l,r as m,b as i,F as f,d as p,u as h,e as b,f as x}from"./C90VIbNy.js";import{u as g}from"./CdFaAHw7.js";const v={},y={class:"my-1 h-px w-full mx-auto shadow bg-slate-300 border-0"};function j(e,n){return o(),r("hr",y)}const w=u(v,[["render",j]]),k=["href"],$={class:"flex flex-col p-4 leading-normal"},B={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},L={class:"mb-3 ml-4 font-normal text-gray-700 dark:text-gray-400"},N={__name:"GridCard",props:{project:{type:Object}},setup(e){return(n,a)=>(o(),r("div",null,[t("a",{href:e.project.url,class:"w-full flex flex-col rounded-md border-2 border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 hover:border-primary-600 hover:bg-white"},[t("div",$,[t("h5",B,l(e.project.title),1),t("p",L,l(e.project.content),1)])],8,k)]))}},V={class:"container h-full bg-white space-y-4 p-4"},C={class:"bg-slate-50 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-6"},D={__name:"Project",setup(e){const n=m([{title:"robot-scaffold",content:"压测Bot脚手架",url:"https://github.com/dianLv/robot-scaffold"},{title:"cg-battle-analysis",content:"一种对回合制卡牌游戏的战斗分析工具的简单实现",url:"https://github.com/dianLv/cg-battle-analysis"},{title:"lib-test",content:"解构常见功能模块, 发掘内在联系",url:"https://github.com/dianLv/lib-test"}]);return(a,s)=>{const d=w,_=N;return o(),r("section",V,[s[1]||(s[1]=t("h2",{class:"font-semibold text-slate-900"},"项目",-1)),i(d),t("div",C,[(o(!0),r(f,null,p(h(n),c=>(o(),x(_,{key:c,project:c},null,8,["project"]))),128)),s[0]||(s[0]=t("div",{class:"flex"},[t("a",{href:"#",class:"hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"},[t("span",{class:"group-hover:text-blue-500 mb-1 text-slate-400"},"..."),b(" 待研究 ")])],-1))])])}}},F={class:"flex flex-wrap items-center justify-center"},H={__name:"about",setup(e){return g({title:"关于"}),(n,a)=>{const s=D;return o(),r("div",F,[i(s)])}}};export{H as default};