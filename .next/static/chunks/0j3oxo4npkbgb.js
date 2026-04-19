(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5766,e=>{"use strict";let t,s;var a,i=e.i(71645);let r={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let s="",a="",i="";for(let r in e){let l=e[r];"@"==r[0]?"i"==r[1]?s=r+" "+l+";":a+="f"==r[1]?d(l,r):r+"{"+d(l,"k"==r[1]?"":t)+"}":"object"==typeof l?a+=d(l,t?t.replace(/([^,])+/g,e=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=l&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=d.p?d.p(r,l):r+":"+l+";")}return s+(t&&i?t+"{"+i+"}":i)+a},c={},m=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+m(e[s]);return t}return e};function p(e){let t,s,a=this||{},i=e.call?e(a.p):e;return((e,t,s,a,i)=>{var r;let p=m(e),u=c[p]||(c[p]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(p));if(!c[u]){let t=p!==e?e:(e=>{let t,s,a=[{}];for(;t=l.exec(e.replace(o,""));)t[4]?a.shift():t[3]?(s=t[3].replace(n," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(n," ").trim();return a[0]})(e);c[u]=d(i?{["@keyframes "+u]:t}:t,s?"":"."+u)}let x=s&&c.g?c.g:null;return s&&(c.g=c[u]),r=c[u],x?t.data=t.data.replace(x,r):-1===t.data.indexOf(r)&&(t.data=a?r+t.data:t.data+r),u})(i.unshift?i.raw?(t=[].slice.call(arguments,1),s=a.p,i.reduce((e,a,i)=>{let r=t[i];if(r&&r.call){let e=r(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==r?"":r)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||r})(a.target),a.g,a.o,a.k)}p.bind({g:1});let u,x,g,h=p.bind({k:1});function b(e,t){let s=this||{};return function(){let a=arguments;function i(r,l){let o=Object.assign({},r),n=o.className||i.className;s.p=Object.assign({theme:x&&x()},o),s.o=/ *go\d+/.test(n),o.className=p.apply(s,a)+(n?" "+n:""),t&&(o.ref=l);let d=e;return e[0]&&(d=o.as||e,delete o.as),g&&d[0]&&g(o),u(d,o)}return t?t(i):i}}var f=(e,t)=>"function"==typeof e?e(t):e,y=(t=0,()=>(++t).toString()),v="default",j=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},w=[],N={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},S=(e,t=v)=>{k[t]=j(k[t]||N,e),w.forEach(([e,s])=>{e===t&&s(k[t])})},$=e=>Object.keys(k).forEach(t=>S(e,t)),P=(e=v)=>t=>{S(t,e)},A=e=>(t,s)=>{let a,i=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||y()}))(t,e,s);return P(i.toasterId||(a=i.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===a))))({type:2,toast:i}),i.id},U=(e,t)=>A("blank")(e,t);U.error=A("error"),U.success=A("success"),U.loading=A("loading"),U.custom=A("custom"),U.dismiss=(e,t)=>{let s={type:3,toastId:e};t?P(t)(s):$(s)},U.dismissAll=e=>U.dismiss(void 0,e),U.remove=(e,t)=>{let s={type:4,toastId:e};t?P(t)(s):$(s)},U.removeAll=e=>U.remove(void 0,e),U.promise=(e,t,s)=>{let a=U.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?f(t.success,e):void 0;return i?U.success(i,{id:a,...s,...null==s?void 0:s.success}):U.dismiss(a),e}).catch(e=>{let i=t.error?f(t.error,e):void 0;i?U.error(i,{id:a,...s,...null==s?void 0:s.error}):U.dismiss(a)}),e};var R=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,E=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,C=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${E} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,L=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,z=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,I=b("div")`
  position: absolute;
`,D=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,O=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${O} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,H=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(G,null,t):t:"blank"===s?null:i.createElement(D,null,i.createElement(F,{...a}),"loading"!==s&&i.createElement(I,null,"error"===s?i.createElement(C,{...a}):i.createElement(B,{...a})))},V=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,_=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;i.memo(({toast:e,position:t,style:a,children:r})=>{let l=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[i,r]=(()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(H,{toast:e}),n=i.createElement(_,{...e.ariaProps},f(e.message,e));return i.createElement(V,{className:e.className,style:{...l,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))}),a=i.createElement,d.p=void 0,u=a,x=void 0,g=void 0,p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["toast",0,U],5766)},15839,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(18566),i=e.i(5766),r=e.i(46932),l=e.i(22016);let o=null,n=0,d=s.default.memo(({adminData:e,onRefresh:s,isRefreshing:a,lastUpdated:i})=>(0,t.jsx)("div",{className:"mb-6 md:mb-8",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent",children:"Dashboard"}),(0,t.jsxs)("p",{className:"text-gray-600 text-sm md:text-base mt-1 flex items-center gap-2",children:["Welcome back, ",e?.name||"Admin","!",e?.role==="admin"&&(0,t.jsx)("span",{className:"px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full",children:"Admin"})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[i>0&&(0,t.jsxs)("div",{className:"hidden md:block text-xs text-gray-400",children:["Updated ",Math.floor((Date.now()-i)/1e3),"s ago"]}),(0,t.jsxs)("button",{onClick:s,disabled:a,className:"relative px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50 flex items-center gap-2",children:[(0,t.jsx)("svg",{className:`w-4 h-4 ${a?"animate-spin":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),a?"Refreshing...":"Refresh"]})]})]})}));d.displayName="DashboardHeader";let c=s.default.memo(({stat:e,index:a})=>{let[i,l]=(0,s.useState)(!1);return(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*a,duration:.3},whileHover:{scale:1.02,y:-2},onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),className:"relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer",children:[(0,t.jsx)("div",{className:"absolute top-0 right-0 w-32 h-32 bg-linear-to-br opacity-5 rounded-full -mr-16 -mt-16"}),(0,t.jsxs)("div",{className:"p-4 md:p-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,t.jsx)("div",{className:`w-10 h-10 md:w-12 md:h-12 bg-linear-to-br ${{blue:"from-blue-500 to-blue-600",green:"from-green-500 to-green-600",purple:"from-purple-500 to-purple-600",yellow:"from-yellow-500 to-yellow-600"}[e.color]} rounded-lg flex items-center justify-center text-xl md:text-2xl shadow-lg`,children:e.icon}),(0,t.jsx)("div",{className:`px-2 py-1 rounded-full text-xs font-medium ${"positive"===e.changeType?"bg-green-100 text-green-700":"negative"===e.changeType?"bg-red-100 text-red-700":"bg-gray-100 text-gray-600"}`,children:e.change})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gray-500 text-xs md:text-sm mb-1",children:e.label}),(0,t.jsx)("p",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:e.value})]}),(0,t.jsx)(r.motion.div,{className:"absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-500 to-purple-500",initial:{width:0},animate:{width:i?"100%":"0%"},transition:{duration:.3}})]})]})});c.displayName="StatCard";let m=s.default.memo(({stats:e})=>{let s=[{href:"/projects",label:"Review Projects",count:e.pendingProjects,icon:"📋",color:"blue"},{href:"/admin/users",label:"Manage Users",count:e.totalUsers,icon:"👥",color:"green"},{href:"/admin/submissions",label:"Pending Submissions",count:e.pendingSubmissions,icon:"📝",color:"purple"},{href:"/admin/films",label:"Film Submissions",count:e.pendingFilms,icon:"🎬",color:"orange"}];return(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow",children:[(0,t.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"⚡"}),"Quick Actions"]}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-3",children:s.map((e,s)=>(0,t.jsx)(l.default,{href:e.href,prefetch:!0,children:(0,t.jsxs)("button",{className:`w-full bg-${e.color}-50 text-${e.color}-700 p-3 rounded-lg hover:bg-${e.color}-100 transition-all duration-200 text-sm font-medium flex items-center justify-between group`,children:[(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-lg",children:e.icon}),(0,t.jsx)("span",{className:"hidden sm:inline",children:e.label})]}),e.count>0&&(0,t.jsx)("span",{className:`px-2 py-0.5 bg-${e.color}-200 rounded-full text-xs font-bold`,children:e.count})]})},s))})]})});m.displayName="QuickActions";let p=s.default.memo(({activities:e})=>{let[a,i]=(0,s.useState)(!1),l=a?e:e.slice(0,5);return(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",children:[(0,t.jsx)("div",{className:"p-6 border-b border-gray-100",children:(0,t.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"📊"}),"Recent Activity",e.length>0&&(0,t.jsxs)("span",{className:"text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full",children:[e.length," total"]})]})}),(0,t.jsx)("div",{className:"divide-y divide-gray-100 max-h-125 overflow-y-auto",children:l.length>0?l.map((e,s)=>(0,t.jsxs)(r.motion.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.05*s},className:"flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors",children:[(0,t.jsx)("div",{className:`w-10 h-10 rounded-full flex items-center justify-center text-sm shrink-0 ${"submission"===e.type?"bg-green-100":"user"===e.type?"bg-blue-100":"project"===e.type?"bg-purple-100":"bg-gray-100"}`,children:"submission"===e.type?"📄":"user"===e.type?"👤":"project"===e.type?"🎬":"📝"}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsxs)("p",{className:"text-sm text-gray-900",children:[(0,t.jsx)("span",{className:"font-semibold",children:e.user}),(0,t.jsxs)("span",{className:"text-gray-600",children:[" ",e.action]})]}),(0,t.jsxs)("p",{className:"text-xs text-gray-400 mt-1 flex items-center gap-1",children:[(0,t.jsx)("span",{children:"🕒"}),e.time]})]})]},s)):(0,t.jsxs)("div",{className:"text-center py-12",children:[(0,t.jsx)("div",{className:"text-5xl mb-3",children:"📭"}),(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"No recent activities"})]})}),e.length>5&&(0,t.jsx)("div",{className:"p-4 bg-gray-50 border-t border-gray-100",children:(0,t.jsx)("button",{onClick:()=>i(!a),className:"text-sm text-blue-600 hover:text-blue-700 font-medium w-full text-center",children:a?"Show less ↑":`View all ${e.length} activities ↓`})})]})});p.displayName="RecentActivities";let u=s.default.memo(({tasks:e})=>{let s={high:"bg-red-100 text-red-700 border-red-200",medium:"bg-yellow-100 text-yellow-700 border-yellow-200",low:"bg-green-100 text-green-700 border-green-200"};return(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:[(0,t.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"⏰"}),"Pending Tasks",e.length>0&&(0,t.jsx)("span",{className:"text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full animate-pulse",children:e.length})]}),(0,t.jsx)("div",{className:"space-y-3",children:e.length>0?e.slice(0,5).map((e,a)=>(0,t.jsx)(l.default,{href:e.link,children:(0,t.jsxs)("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all cursor-pointer",children:[(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate",children:e.task}),(0,t.jsxs)("p",{className:"text-xs text-gray-500 mt-1",children:[e.count," items pending"]})]}),(0,t.jsx)("div",{className:`px-2 py-1 rounded-full text-xs font-medium border ml-3 ${s[e.priority]||s.medium}`,children:e.priority})]})},a)):(0,t.jsxs)("div",{className:"text-center py-8",children:[(0,t.jsx)("div",{className:"text-5xl mb-3",children:"✅"}),(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"All caught up! No pending tasks."})]})})]})});u.displayName="PendingTasks";let x=s.default.memo(({label:e,value:s,max:a,color:i,suffix:l="",isPositive:o=!1,icon:n})=>{let d=Math.min(s/a*100,100);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-sm",children:n}),(0,t.jsx)("span",{className:"text-sm text-gray-600",children:e})]}),(0,t.jsxs)("span",{className:`text-sm font-semibold ${o?"text-green-600":"text-gray-900"}`,children:["number"==typeof s?s.toLocaleString():s,l]})]}),(0,t.jsx)("div",{className:"relative w-full bg-gray-200 rounded-full h-2 overflow-hidden",children:(0,t.jsx)(r.motion.div,{initial:{width:0},animate:{width:`${d}%`},transition:{duration:1,ease:"easeOut"},className:`absolute top-0 left-0 h-full ${i} rounded-full`})})]})});x.displayName="AnalyticsBar";let g=s.default.memo(({analytics:e,stats:s})=>{let a=s.totalUsers?Math.round(s.activeUsers/s.totalUsers*100):0,i=[{label:"Total Views",value:e.totalViews,max:2e4,color:"bg-blue-500",icon:"👁️"},{label:"Active Users",value:a,max:100,suffix:"%",color:"bg-green-500",icon:"👥",isPositive:!0},{label:"Approval Rate",value:e.approvalRate,max:100,suffix:"%",color:"bg-purple-500",icon:"✅"},{label:"Growth Rate",value:e.monthlyGrowth,max:100,suffix:"%",color:"bg-indigo-500",icon:"📈",isPositive:!0}];return(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:[(0,t.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"📊"}),"Platform Analytics"]}),(0,t.jsx)("div",{className:"space-y-4",children:i.map((e,s)=>(0,t.jsx)(x,{...e},s))}),(0,t.jsx)(l.default,{href:"/admin/analytics",children:(0,t.jsxs)("div",{className:"mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 cursor-pointer",children:["View detailed analytics",(0,t.jsx)("span",{children:"→"})]})})]})});g.displayName="PlatformAnalytics";let h=s.default.memo(({label:e,value:s,isGood:a,icon:i})=>(0,t.jsxs)("div",{className:"flex items-center justify-between py-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-sm",children:i}),(0,t.jsx)("span",{className:"text-sm text-gray-600",children:e})]}),(0,t.jsxs)("div",{className:`text-sm font-medium ${void 0===a?"text-gray-900":a?"text-green-600":"text-red-600"} flex items-center gap-1`,children:[(0,t.jsx)("span",{className:`inline-block w-2 h-2 rounded-full ${a?"bg-green-500":!1===a?"bg-red-500":"bg-gray-400"}`}),s]})]}));h.displayName="StatusRow";let b=s.default.memo(({status:e})=>{let s=[{label:"API Status",value:e.apiStatus,isGood:"operational"===e.apiStatus,icon:"🔌"},{label:"Database",value:e.database,isGood:"connected"===e.database,icon:"🗄️"},{label:"Server Uptime",value:e.uptime,icon:"⏱️"},{label:"Memory Usage",value:e.memory,icon:"💾"},{label:"Last Backup",value:e.lastBackup,icon:"💿"}],a=s.every(e=>!1!==e.isGood);return(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,t.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"🖥️"}),"System Status"]}),a&&(0,t.jsxs)("div",{className:"px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"}),"All Systems Operational"]})]}),(0,t.jsx)("div",{className:"space-y-1",children:s.map((e,s)=>(0,t.jsx)(h,{...e},s))})]})});b.displayName="SystemStatus";let f=()=>(0,t.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-6 md:py-8 max-w-7xl",children:[(0,t.jsx)("div",{className:"mb-6 md:mb-8",children:(0,t.jsxs)("div",{className:"flex justify-between items-start flex-wrap gap-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"h-8 bg-gray-200 rounded w-48 animate-pulse mb-2"}),(0,t.jsx)("div",{className:"h-4 bg-gray-200 rounded w-64 animate-pulse"})]}),(0,t.jsx)("div",{className:"h-10 bg-gray-200 rounded w-24 animate-pulse"})]})}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8",children:[1,2,3,4].map(e=>(0,t.jsx)("div",{className:"bg-white rounded-xl shadow-sm p-4 md:p-6",children:(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"h-4 bg-gray-200 rounded w-20 animate-pulse mb-2"}),(0,t.jsx)("div",{className:"h-8 bg-gray-200 rounded w-16 animate-pulse"})]}),(0,t.jsx)("div",{className:"w-10 h-10 bg-gray-200 rounded-lg animate-pulse"})]})},e))}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[(0,t.jsx)("div",{className:"h-6 bg-gray-200 rounded w-32 animate-pulse mb-4"}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-3",children:[1,2,3,4].map(e=>(0,t.jsx)("div",{className:"h-12 bg-gray-200 rounded animate-pulse"},e))})]}),(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[(0,t.jsx)("div",{className:"h-6 bg-gray-200 rounded w-32 animate-pulse mb-4"}),(0,t.jsx)("div",{className:"space-y-4",children:[1,2,3].map(e=>(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 bg-gray-200 rounded-full animate-pulse"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"h-4 bg-gray-200 rounded w-48 animate-pulse mb-2"}),(0,t.jsx)("div",{className:"h-3 bg-gray-200 rounded w-32 animate-pulse"})]})]},e))})]})]}),(0,t.jsx)("div",{className:"space-y-6",children:[1,2,3].map(e=>(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[(0,t.jsx)("div",{className:"h-6 bg-gray-200 rounded w-32 animate-pulse mb-4"}),(0,t.jsx)("div",{className:"space-y-3",children:[1,2,3].map(e=>(0,t.jsx)("div",{className:"h-16 bg-gray-200 rounded animate-pulse"},e))})]},e))})]})]})});e.s(["default",0,function(){let e=(0,a.useRouter)(),[l,x]=(0,s.useState)(!0),[h,y]=(0,s.useState)(null),[v,j]=(0,s.useState)({totalUsers:0,activeUsers:0,inactiveUsers:0,totalAdmins:0,totalProjects:0,pendingProjects:0,approvedProjects:0,rejectedProjects:0,totalSubmissions:0,pendingSubmissions:0,totalFilms:0,pendingFilms:0}),[w,N]=(0,s.useState)([]),[k,S]=(0,s.useState)([]),[$,P]=(0,s.useState)({apiStatus:"checking",database:"checking",lastBackup:"Today, 02:00 AM",uptime:"99.9%",memory:"45%"}),[A,U]=(0,s.useState)({totalViews:12450,monthlyGrowth:12.5,approvalRate:68,completionRate:75}),[R,T]=(0,s.useState)(!1),[E,C]=(0,s.useState)(null),M="https://server.nybff.us",F=(0,s.useCallback)(()=>{try{return localStorage.getItem("token")||sessionStorage.getItem("token")}catch(e){return console.error("Error accessing storage:",e),null}},[]),L=(0,s.useCallback)(async(e,t=!0)=>{if(t&&o&&Date.now()-n<3e5)return o;let s=[fetch(`${M}/api/auth/me`,{headers:{Authorization:`Bearer ${e}`}}),fetch(`${M}/api/admin/stats`,{headers:{Authorization:`Bearer ${e}`}}),fetch(`${M}/api/admin/recent-activities`,{headers:{Authorization:`Bearer ${e}`}}),fetch(`${M}/api/admin/pending-tasks`,{headers:{Authorization:`Bearer ${e}`}}),fetch(`${M}/api/admin/analytics`,{headers:{Authorization:`Bearer ${e}`}}),fetch(`${M}/health`).catch(()=>null)],[a,i,r,l,d,c]=await Promise.allSettled(s),m={};if("fulfilled"===a.status&&a.value.ok&&(m.user=(await a.value.json()).user),"fulfilled"===i.status&&i.value.ok){let e=await i.value.json();e.success&&(m.stats=e.stats)}if("fulfilled"===r.status&&r.value.ok){let e=await r.value.json();e.success&&(m.activities=e.activities)}if("fulfilled"===l.status&&l.value.ok){let e=await l.value.json();e.success&&(m.tasks=e.tasks)}if("fulfilled"===d.status&&d.value.ok){let e=await d.value.json();e.success&&(m.analytics=e.data)}if("fulfilled"===c.status&&c.value){let e=await c.value.json();m.systemStatus={apiStatus:"operational",database:e.mongodb?.status==="connected"?"connected":"disconnected",lastBackup:"Today, 02:00 AM",uptime:"99.9%",memory:"45%"}}return o=m,n=Date.now(),m},[M]),z=(0,s.useCallback)(async(t=!1)=>{let a=F();if(!a){i.toast.error("Please login to access admin panel"),e.push("/admin/login");return}t&&T(!0);try{C(null);let r=await L(a,!t);if(r.user?.role!=="admin"){i.toast.error("Access denied. Admin only."),e.push("/");return}(0,s.startTransition)(()=>{y(r.user),r.stats&&j({totalUsers:r.stats.totalUsers||0,activeUsers:r.stats.activeUsers||0,inactiveUsers:(r.stats.totalUsers||0)-(r.stats.activeUsers||0),totalAdmins:r.stats.totalAdmins||0,totalProjects:r.stats.totalProjects||0,pendingProjects:r.stats.pendingProjects||0,approvedProjects:r.stats.approvedProjects||0,rejectedProjects:r.stats.rejectedProjects||0,totalSubmissions:r.stats.totalSubmissions||0,pendingSubmissions:r.stats.pendingSubmissions||0,totalFilms:r.stats.totalFilms||0,pendingFilms:r.stats.pendingFilms||0}),r.activities&&N(r.activities),r.tasks&&S(r.tasks),r.analytics&&U({totalViews:r.analytics.totalViews||12450,monthlyGrowth:r.analytics.monthlyGrowth||12.5,approvalRate:r.analytics.approvalRate||68,completionRate:r.analytics.completionRate||75}),r.systemStatus&&P(r.systemStatus)}),"requestIdleCallback"in window&&requestIdleCallback(()=>{["/admin/projects","/admin/users","/admin/submissions","/admin/films"].forEach(t=>{e.prefetch(t)})})}catch(e){console.error("Error loading dashboard:",e),C(e.message),o&&!t?(i.toast.error("Using cached data. Some info may be outdated."),(0,s.startTransition)(()=>{o.user&&y(o.user),o.stats&&j(e=>({...e,...o.stats})),o.activities&&N(o.activities),o.tasks&&S(o.tasks)})):i.toast.error("Failed to load dashboard. Please refresh.")}finally{t&&setTimeout(()=>T(!1),500),x(!1)}},[e,F,L]);(0,s.useEffect)(()=>{let t;if(z(),e.prefetch("/admin/projects"),e.prefetch("/admin/users"),e.prefetch("/admin/submissions"),"u">typeof document){let e=()=>{"visible"===document.visibilityState&&z(!0)};return document.addEventListener("visibilitychange",e),t=setInterval(()=>{"visible"===document.visibilityState&&z(!0)},12e4),()=>{document.removeEventListener("visibilitychange",e),t&&clearInterval(t)}}},[z]);let B=(0,s.useMemo)(()=>v.totalUsers?Math.round(v.activeUsers/v.totalUsers*100):0,[v.activeUsers,v.totalUsers]),I=(0,s.useMemo)(()=>v.totalProjects?Math.round(v.approvedProjects/v.totalProjects*100):0,[v.approvedProjects,v.totalProjects]),D=(0,s.useMemo)(()=>[{label:"Total Users",value:v.totalUsers.toLocaleString(),icon:"👥",color:"blue",change:`${B}% active`,changeType:v.activeUsers>v.totalUsers/2?"positive":"neutral"},{label:"Active Users",value:v.activeUsers.toLocaleString(),icon:"✅",color:"green",change:`${B}% of total`,changeType:"positive"},{label:"Total Projects",value:v.totalProjects.toLocaleString(),icon:"🎬",color:"purple",change:`+${v.pendingProjects} pending`,changeType:v.pendingProjects<50?"positive":"neutral"},{label:"Pending Reviews",value:v.pendingProjects.toLocaleString(),icon:"⏳",color:"yellow",change:`${I}% approved`,changeType:I>70?"positive":"negative"}],[v,B,I]),O=(0,s.useCallback)(()=>{z(!0)},[z]);return l&&!o?(0,t.jsx)(f,{}):(0,t.jsx)("div",{className:"min-h-screen bg-linear-to-br from-gray-50 to-gray-100",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-6 md:py-8 max-w-7xl",children:[(0,t.jsx)(d,{adminData:h,onRefresh:O,isRefreshing:R,lastUpdated:n}),E&&(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-6 bg-red-50 border border-red-200 rounded-lg p-4",children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"text-red-500",children:"⚠️"}),(0,t.jsx)("p",{className:"text-sm text-red-700",children:E}),(0,t.jsx)("button",{onClick:O,className:"ml-auto text-sm text-red-600 hover:text-red-700 font-medium",children:"Retry"})]})}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8",children:D.map((e,s)=>(0,t.jsx)(c,{stat:e,index:s},s))}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,t.jsx)(m,{stats:v}),(0,t.jsx)(p,{activities:w})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)(u,{tasks:k}),(0,t.jsx)(g,{analytics:A,stats:v}),(0,t.jsx)(b,{status:$})]})]})]})})}])}]);