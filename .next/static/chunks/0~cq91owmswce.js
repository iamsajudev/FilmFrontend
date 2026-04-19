(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5766,e=>{"use strict";let t,s;var r,i=e.i(71645);let a={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let s="",r="",i="";for(let a in e){let o=e[a];"@"==a[0]?"i"==a[1]?s=a+" "+o+";":r+="f"==a[1]?d(o,a):a+"{"+d(o,"k"==a[1]?"":t)+"}":"object"==typeof o?r+=d(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=o&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=d.p?d.p(a,o):a+":"+o+";")}return s+(t&&i?t+"{"+i+"}":i)+r},c={},m=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+m(e[s]);return t}return e};function x(e){let t,s,r=this||{},i=e.call?e(r.p):e;return((e,t,s,r,i)=>{var a;let x=m(e),u=c[x]||(c[x]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(x));if(!c[u]){let t=x!==e?e:(e=>{let t,s,r=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(s=t[3].replace(l," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);c[u]=d(i?{["@keyframes "+u]:t}:t,s?"":"."+u)}let p=s&&c.g?c.g:null;return s&&(c.g=c[u]),a=c[u],p?t.data=t.data.replace(p,a):-1===t.data.indexOf(a)&&(t.data=r?a+t.data:t.data+a),u})(i.unshift?i.raw?(t=[].slice.call(arguments,1),s=r.p,i.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==a?"":a)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||a})(r.target),r.g,r.o,r.k)}x.bind({g:1});let u,p,h,g=x.bind({k:1});function f(e,t){let s=this||{};return function(){let r=arguments;function i(a,o){let n=Object.assign({},a),l=n.className||i.className;s.p=Object.assign({theme:p&&p()},n),s.o=/ *go\d+/.test(l),n.className=x.apply(s,r)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),h&&d[0]&&h(n),u(d,n)}return t?t(i):i}}var b=(e,t)=>"function"==typeof e?e(t):e,y=(t=0,()=>(++t).toString()),j="default",v=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return v(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},N=[],w={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},S=(e,t=j)=>{k[t]=v(k[t]||w,e),N.forEach(([e,s])=>{e===t&&s(k[t])})},C=e=>Object.keys(k).forEach(t=>S(e,t)),A=(e=j)=>t=>{S(t,e)},L=e=>(t,s)=>{let r,i=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||y()}))(t,e,s);return A(i.toasterId||(r=i.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===r))))({type:2,toast:i}),i.id},$=(e,t)=>L("blank")(e,t);$.error=L("error"),$.success=L("success"),$.loading=L("loading"),$.custom=L("custom"),$.dismiss=(e,t)=>{let s={type:3,toastId:e};t?A(t)(s):C(s)},$.dismissAll=e=>$.dismiss(void 0,e),$.remove=(e,t)=>{let s={type:4,toastId:e};t?A(t)(s):C(s)},$.removeAll=e=>$.remove(void 0,e),$.promise=(e,t,s)=>{let r=$.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?b(t.success,e):void 0;return i?$.success(i,{id:r,...s,...null==s?void 0:s.success}):$.dismiss(r),e}).catch(e=>{let i=t.error?b(t.error,e):void 0;i?$.error(i,{id:r,...s,...null==s?void 0:s.error}):$.dismiss(r)}),e};var E=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=f("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,P=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=g`
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
}`,R=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
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
`,F=f("div")`
  position: absolute;
`,W=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,D=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${D} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,O=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(H,null,t):t:"blank"===s?null:i.createElement(W,null,i.createElement(I,{...r}),"loading"!==s&&i.createElement(F,null,"error"===s?i.createElement(z,{...r}):i.createElement(R,{...r})))},V=f("div")`
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
`,U=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[i,a]=(()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(O,{toast:e}),l=i.createElement(U,{...e.ariaProps},b(e.message,e));return i.createElement(V,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))}),r=i.createElement,d.p=void 0,u=r,p=void 0,h=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["toast",0,$],5766)},64213,e=>{"use strict";var t=e.i(43476),s=e.i(71645);e.i(22016);var r=e.i(5766);e.s(["default",0,function(){let[e,i]=(0,s.useState)([]),[a,o]=(0,s.useState)(!0),[n,l]=(0,s.useState)(""),[d,c]=(0,s.useState)("all"),[m,x]=(0,s.useState)(""),[u,p]=(0,s.useState)(null),[h,g]=(0,s.useState)(!1),[f,b]=(0,s.useState)(""),[y,j]=(0,s.useState)(null),[v,N]=(0,s.useState)({total:0,pending:0,approved:0,rejected:0,inReview:0}),w="https://server.nybff.us",k=()=>localStorage.getItem("token")||sessionStorage.getItem("token"),S=async()=>{try{o(!0),l("");let e=k();if(!e)throw Error("No authentication token found");let t=await fetch(`${w}/api/admin/submissions`,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}});if(!t.ok){if(401===t.status)throw Error("Session expired. Please login again.");if(403===t.status)throw Error("Access denied. Admin only.");throw Error(`Failed to fetch submissions: ${t.status}`)}let s=await t.json(),r=[];if(Array.isArray(s))r=s;else if(s.submissions&&Array.isArray(s.submissions))r=s.submissions;else if(s.data&&Array.isArray(s.data))r=s.data;else throw Error("Invalid data format received");i(r);let a=r.length,n=r.filter(e=>"pending"===e.submissionStatus||"pending"===e.status).length,d=r.filter(e=>"approved"===e.submissionStatus||"approved"===e.status).length,c=r.filter(e=>"rejected"===e.submissionStatus||"rejected"===e.status).length,m=r.filter(e=>"in-review"===e.submissionStatus||"in-review"===e.status).length;N({total:a,pending:n,approved:d,rejected:c,inReview:m})}catch(e){console.error("Error fetching submissions:",e),l(e.message),r.toast.error(e.message)}finally{o(!1)}};(0,s.useEffect)(()=>{S()},[]);let C=async(e,t,s=null)=>{try{j(e);let a=k();if(!a)throw Error("No authentication token found");let o=await fetch(`${w}/api/admin/submissions/${e}/status`,{method:"PATCH",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({status:t,adminNotes:s||f})}),n=await o.json();if(!o.ok)throw Error(n.message||"Failed to update status");i(r=>r.map(r=>r._id===e?{...r,submissionStatus:t,status:t,adminNotes:s||r.adminNotes}:r)),r.toast.success(`Submission ${t} successfully`),h&&(g(!1),b(""),p(null)),S()}catch(e){console.error("Error updating status:",e),r.toast.error(e.message)}finally{j(null)}},A=async e=>{if(confirm("Are you sure you want to delete this submission? This action cannot be undone."))try{let t=k();if(!t)throw Error("No authentication token found");let s=await fetch(`${w}/api/admin/submissions/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}}),a=await s.json();if(!s.ok)throw Error(a.message||"Failed to delete submission");i(t=>t.filter(t=>t._id!==e)),r.toast.success("Submission deleted successfully"),S()}catch(e){console.error("Error deleting submission:",e),r.toast.error(e.message)}};if(a)return(0,t.jsx)("div",{className:"min-h-screen bg-gray-50 p-6 md:p-8",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,t.jsx)("div",{className:"flex items-center justify-center h-64",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),(0,t.jsx)("p",{className:"mt-4 text-gray-600",children:"Loading submissions..."})]})})})});let L=(()=>{let t=[...e];if("all"!==d&&(t=t.filter(e=>(e.submissionStatus||e.status)===d)),m){let e=m.toLowerCase();t=t.filter(t=>t.projectTitle?.toLowerCase().includes(e)||t.title?.toLowerCase().includes(e)||t.email?.toLowerCase().includes(e)||t.userId?.name?.toLowerCase().includes(e))}return t})();return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-50 p-6 md:p-8",children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Film Submissions"}),(0,t.jsx)("p",{className:"text-gray-600 mt-1",children:"Review and manage all film project submissions"})]}),(0,t.jsxs)("button",{onClick:S,className:"mt-4 md:mt-0 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition",children:[(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),"Refresh"]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",children:[(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-4 border border-gray-100",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"Total"}),(0,t.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:v.total})]}),(0,t.jsx)("div",{className:"bg-blue-100 p-3 rounded-full",children:(0,t.jsx)("svg",{className:"w-6 h-6 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})})]})}),(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-4 border border-gray-100",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"Pending"}),(0,t.jsx)("p",{className:"text-2xl font-bold text-yellow-600",children:v.pending})]}),(0,t.jsx)("div",{className:"bg-yellow-100 p-3 rounded-full",children:(0,t.jsx)("svg",{className:"w-6 h-6 text-yellow-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})}),(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-4 border border-gray-100",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"Approved"}),(0,t.jsx)("p",{className:"text-2xl font-bold text-green-600",children:v.approved})]}),(0,t.jsx)("div",{className:"bg-green-100 p-3 rounded-full",children:(0,t.jsx)("svg",{className:"w-6 h-6 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})}),(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-4 border border-gray-100",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"Rejected"}),(0,t.jsx)("p",{className:"text-2xl font-bold text-red-600",children:v.rejected})]}),(0,t.jsx)("div",{className:"bg-red-100 p-3 rounded-full",children:(0,t.jsx)("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})})]}),(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,t.jsxs)("div",{className:"flex-1 relative",children:[(0,t.jsx)("svg",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),(0,t.jsx)("input",{type:"text",placeholder:"Search by project title, email, or submitter name...",value:m,onChange:e=>x(e.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"})]}),(0,t.jsxs)("select",{value:d,onChange:e=>c(e.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black",children:[(0,t.jsx)("option",{value:"all",children:"All Status"}),(0,t.jsx)("option",{value:"pending",children:"Pending"}),(0,t.jsx)("option",{value:"in-review",children:"In Review"}),(0,t.jsx)("option",{value:"approved",children:"Approved"}),(0,t.jsx)("option",{value:"rejected",children:"Rejected"})]})]})}),(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden",children:[(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full",children:[(0,t.jsx)("thead",{className:"bg-gray-50 border-b border-gray-200",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Sl No"}),(0,t.jsx)("th",{className:"text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Project"}),(0,t.jsx)("th",{className:"text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Submitter"}),(0,t.jsx)("th",{className:"text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),(0,t.jsx)("th",{className:"text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Submitted"}),(0,t.jsx)("th",{className:"text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),(0,t.jsx)("th",{className:" px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center",children:"Actions"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-200",children:L.map((e,s)=>{var r;let i=e.submissionStatus||e.status||"pending",a=y===e._id;return(0,t.jsxs)("tr",{className:"hover:bg-gray-50 transition",children:[(0,t.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900",children:s+1}),(0,t.jsx)("td",{className:"px-6 py-4",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium text-gray-900",children:e.projectTitle||e.title}),(0,t.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:e.projectTypes?.slice(0,2).join(", ")||e.type||"Film"})]})}),(0,t.jsx)("td",{className:"px-6 py-4",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-900",children:e.userId?.name||e.submitterName||"Unknown"}),(0,t.jsx)("p",{className:"text-xs text-gray-500",children:e.email||e.submitterEmail})]})}),(0,t.jsx)("td",{className:"px-6 py-4",children:(0,t.jsx)("span",{className:"inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700",children:e.projectType||e.type||"Short Film"})}),(0,t.jsx)("td",{className:"px-6 py-4 text-sm text-gray-600",children:(r=e.submittedAt||e.createdAt)?new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"N/A"}),(0,t.jsx)("td",{className:"px-6 py-4",children:(0,t.jsxs)("select",{value:i,onChange:t=>C(e._id,t.target.value),disabled:a,className:`px-3 py-1 text-xs font-medium rounded-full border-0 focus:ring-2 focus:ring-offset-2 cursor-pointer ${{pending:"bg-yellow-100 text-yellow-700",approved:"bg-green-100 text-green-700",rejected:"bg-red-100 text-red-700","in-review":"bg-blue-100 text-blue-700"}[i]||"bg-gray-100 text-gray-700"} ${a?"opacity-50 cursor-not-allowed":""}`,children:[(0,t.jsx)("option",{value:"pending",className:"bg-yellow-100 text-yellow-700",children:"Pending"}),(0,t.jsx)("option",{value:"in-review",className:"bg-blue-100 text-blue-700",children:"In Review"}),(0,t.jsx)("option",{value:"approved",className:"bg-green-100 text-green-700",children:"Approved"}),(0,t.jsx)("option",{value:"rejected",className:"bg-red-100 text-red-700",children:"Rejected"})]})}),(0,t.jsx)("td",{className:"px-6 py-4",children:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("button",{onClick:()=>{p(e),b(e.adminNotes||""),g(!0)},className:"p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"View Details",children:(0,t.jsxs)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),(0,t.jsx)("button",{onClick:()=>{window.location.href=`/admin/submissions/edit/${e._id}`},className:"p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",title:"Edit Submission",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),(0,t.jsx)("button",{onClick:()=>A(e._id),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Delete Submission",children:(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})})]},e._id)})})]})}),0===L.length&&(0,t.jsxs)("div",{className:"text-center py-12",children:[(0,t.jsx)("svg",{className:"w-16 h-16 text-gray-400 mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),(0,t.jsx)("p",{className:"text-gray-500",children:"No submissions found"})]})]}),e.length>0&&(0,t.jsxs)("div",{className:"mt-4 text-sm text-gray-500",children:["Showing ",L.length," of ",e.length," submissions"]})]}),h&&u&&(0,t.jsxs)("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:[(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50",onClick:()=>g(!1)}),(0,t.jsx)("div",{className:"relative min-h-screen flex items-center justify-center p-4",children:(0,t.jsxs)("div",{className:"relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[(0,t.jsxs)("div",{className:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center",children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Submission Details"}),(0,t.jsx)("button",{onClick:()=>g(!1),className:"text-gray-400 hover:text-gray-600",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,t.jsxs)("div",{className:"p-6 space-y-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Project Information"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Project Title"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.projectTitle||u.title})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Project Type"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.projectType||u.type})]}),(0,t.jsxs)("div",{className:"md:col-span-2",children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Synopsis"}),(0,t.jsx)("p",{className:"text-gray-700",children:u.briefSynopsis||u.description})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Submitter Information"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Name"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.userId?.name||u.submitterName||"Unknown"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Email"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.email||u.submitterEmail})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Phone"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.phone||"N/A"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Location"}),(0,t.jsxs)("p",{className:"font-medium text-gray-900",children:[u.city||u.submitterCity,", ",u.country||u.submitterCountry]})]})]})]}),(u.directors?.length>0||u.writers?.length>0)&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Credits"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.directors?.length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Directors"}),(0,t.jsx)("p",{className:"text-gray-700",children:u.directors.map(e=>`${e.firstName} ${e.lastName}`).join(", ")})]}),u.writers?.length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Writers"}),(0,t.jsx)("p",{className:"text-gray-700",children:u.writers.map(e=>`${e.firstName} ${e.lastName}`).join(", ")})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Technical Specifications"}),(0,t.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Runtime"}),(0,t.jsxs)("p",{className:"font-medium text-gray-900",children:[u.runtimeHours,":",u.runtimeMinutes,":",u.runtimeSeconds]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Language"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.language||"N/A"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Shooting Format"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.shootingFormat||"N/A"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Aspect Ratio"}),(0,t.jsx)("p",{className:"font-medium text-gray-900",children:u.aspectRatio||"16:9"})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Admin Notes"}),(0,t.jsx)("textarea",{value:f,onChange:e=>b(e.target.value),rows:"3",className:"w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none",placeholder:"Add notes about this submission..."})]}),(0,t.jsxs)("div",{className:"flex gap-3 pt-4 border-t border-gray-200",children:[(0,t.jsx)("button",{onClick:()=>C(u._id,"approved",f),disabled:y===u._id,className:"flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-50",children:y===u._id?"Processing...":"✓ Approve"}),(0,t.jsx)("button",{onClick:()=>C(u._id,"in-review",f),disabled:y===u._id,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-50",children:y===u._id?"Processing...":"📝 Mark In Review"}),(0,t.jsx)("button",{onClick:()=>C(u._id,"rejected",f),disabled:y===u._id,className:"flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-50",children:y===u._id?"Processing...":"✗ Reject"})]})]})]})})]})]})}])}]);