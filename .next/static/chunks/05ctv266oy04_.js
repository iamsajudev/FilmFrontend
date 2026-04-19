(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5766,e=>{"use strict";let t,r;var s,a=e.i(71645);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},c={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e};function m(e){let t,r,s=this||{},a=e.call?e(s.p):e;return((e,t,r,s,a)=>{var i;let m=u(e),p=c[m]||(c[m]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(m));if(!c[p]){let t=m!==e?e:(e=>{let t,r,s=[{}];for(;t=o.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(r=t[3].replace(n," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(n," ").trim();return s[0]})(e);c[p]=d(a?{["@keyframes "+p]:t}:t,r?"":"."+p)}let h=r&&c.g?c.g:null;return r&&(c.g=c[p]),i=c[p],h?t.data=t.data.replace(h,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),p})(a.unshift?a.raw?(t=[].slice.call(arguments,1),r=s.p,a.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(s.target),s.g,s.o,s.k)}m.bind({g:1});let p,h,g,x=m.bind({k:1});function f(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let l=Object.assign({},i),n=l.className||a.className;r.p=Object.assign({theme:h&&h()},l),r.o=/ *go\d+/.test(n),l.className=m.apply(r,s)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),g&&d[0]&&g(l),p(d,l)}return t?t(a):a}}var v=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),y="default",j=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},w=[],N={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},C=(e,t=y)=>{k[t]=j(k[t]||N,e),w.forEach(([e,r])=>{e===t&&r(k[t])})},A=e=>Object.keys(k).forEach(t=>C(e,t)),$=(e=y)=>t=>{C(t,e)},S=e=>(t,r)=>{let s,a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||b()}))(t,e,r);return $(a.toasterId||(s=a.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===s))))({type:2,toast:a}),a.id},E=(e,t)=>S("blank")(e,t);E.error=S("error"),E.success=S("success"),E.loading=S("loading"),E.custom=S("custom"),E.dismiss=(e,t)=>{let r={type:3,toastId:e};t?$(t)(r):A(r)},E.dismissAll=e=>E.dismiss(void 0,e),E.remove=(e,t)=>{let r={type:4,toastId:e};t?$(t)(r):A(r)},E.removeAll=e=>E.remove(void 0,e),E.promise=(e,t,r)=>{let s=E.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?v(t.success,e):void 0;return a?E.success(a,{id:s,...r,...null==r?void 0:r.success}):E.dismiss(s),e}).catch(e=>{let a=t.error?v(t.error,e):void 0;a?E.error(a,{id:s,...r,...null==r?void 0:r.error}):E.dismiss(s)}),e};var L=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
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
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=x`
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
  animation: ${D} 1s linear infinite;
`,R=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=x`
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
}`,B=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
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
`,_=f("div")`
  position: absolute;
`,H=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,O=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${O} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,P=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?a.createElement(W,null,t):t:"blank"===r?null:a.createElement(H,null,a.createElement(I,{...s}),"loading"!==r&&a.createElement(_,null,"error"===r?a.createElement(T,{...s}):a.createElement(B,{...s})))},F=f("div")`
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
`,J=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;a.memo(({toast:e,position:t,style:s,children:i})=>{let o=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,i]=(()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${x(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=a.createElement(P,{toast:e}),n=a.createElement(J,{...e.ariaProps},v(e.message,e));return a.createElement(F,{className:e.className,style:{...o,...s,...e.style}},"function"==typeof i?i({icon:l,message:n}):a.createElement(a.Fragment,null,l,n))}),s=a.createElement,d.p=void 0,p=s,h=void 0,g=void 0,m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["toast",0,E],5766)},20902,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(22016);e.i(57688),e.i(47167);var a=e.i(5766);let i=r.default.memo(({user:e,serialNumber:a,currentUser:i,updatingStatus:o,deletingId:l,onUpdateRole:n,onUpdateStatus:d,onDeleteUser:c,getInitials:u})=>{let[m,p]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),x=e._id||e.id,f=e.name||e.fullName||e.username||"Unknown",v=e.email||"",b=e.role||"user",y=void 0!==e.isActive?e.isActive?"active":"inactive":"active",j=e.createdAt||e.joinDate,w=i&&(i.id===x||i._id===x),N=o===x,k=l===x,C=(()=>{if(m)return null;let t=e.avatar||e.profileImage||e.photo||e.image||e.picture;return t&&(t.startsWith("data:image")||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/"))?t:null})();return(0,t.jsx)("div",{className:"hover:bg-gray-50 transition",children:(0,t.jsxs)("div",{className:"px-4 py-3 flex flex-wrap items-center gap-3",children:[(0,t.jsx)("div",{className:"min-w-10 text-center",children:(0,t.jsx)("span",{className:"text-xs text-gray-400 font-mono",children:a})}),(0,t.jsxs)("div",{className:"flex items-center gap-2 min-w-37.5 flex-1",children:[C&&!m?(0,t.jsxs)("div",{className:"relative w-8 h-8 shrink-0",children:[(0,t.jsx)("img",{src:C,alt:f,className:"w-full h-full rounded-full object-cover border border-gray-200",onLoad:()=>g(!0),onError:()=>{console.error("Avatar failed to load:",C),p(!0)},loading:"lazy"}),!h&&(0,t.jsx)("div",{className:"absolute inset-0 bg-gray-200 rounded-full animate-pulse"})]}):(0,t.jsx)("div",{className:"w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium flex-shrink-0 shadow-sm",children:u(f)}),(0,t.jsxs)("div",{className:"min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate",children:f}),(0,t.jsx)("p",{className:"text-xs text-gray-500 truncate",children:v})]})]}),(0,t.jsx)("div",{className:"min-w-25",children:w?(0,t.jsx)("span",{className:"inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-700",children:b}):(0,t.jsxs)("select",{value:b,onChange:e=>n(x,e.target.value),className:"text-xs px-2 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white",children:[(0,t.jsx)("option",{value:"user",children:"User"}),(0,t.jsx)("option",{value:"moderator",children:"Moderator"}),(0,t.jsx)("option",{value:"admin",children:"Admin"})]})}),(0,t.jsx)("div",{className:"min-w-20",children:w?(0,t.jsx)("span",{className:`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${"active"===y?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:y}):(0,t.jsx)("button",{onClick:()=>d(x,y),disabled:N,className:`inline-flex px-2 py-0.5 text-xs font-medium rounded-full transition ${"active"===y?"bg-green-100 text-green-700 hover:bg-green-200":"bg-red-100 text-red-700 hover:bg-red-200"} ${N?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:N?(0,t.jsxs)("svg",{className:"w-3 h-3 animate-spin",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):y})}),(0,t.jsx)("div",{className:"min-w-25 text-xs text-gray-500 hidden sm:block",children:j?new Date(j).toLocaleDateString():"N/A"}),(0,t.jsxs)("div",{className:"flex items-center gap-1 ml-auto",children:[(0,t.jsx)(s.default,{href:`/admin/all-users/edit/${x}`,className:"p-1.5 text-blue-600 hover:bg-blue-50 rounded transition",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),(0,t.jsx)("button",{onClick:()=>c(x),disabled:w||k,className:`p-1.5 cursor-pointer text-red-600 hover:bg-red-50 rounded transition ${w||k?"opacity-50 cursor-not-allowed":""}`,title:w?"Cannot delete yourself":"Delete",children:k?(0,t.jsxs)("svg",{className:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]})})});i.displayName="FastUserRow";let o=()=>(0,t.jsx)("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,t.jsxs)("div",{className:"animate-pulse",children:[(0,t.jsx)("div",{className:"h-8 bg-gray-200 rounded w-32 mb-2"}),(0,t.jsx)("div",{className:"h-4 bg-gray-200 rounded w-48 mb-6"}),(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-3 mb-5",children:(0,t.jsx)("div",{className:"h-10 bg-gray-100 rounded"})}),(0,t.jsx)("div",{className:"space-y-2",children:[1,2,3,4,5].map(e=>(0,t.jsx)("div",{className:"bg-white rounded-lg p-3",children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-gray-200 rounded-full"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"h-4 bg-gray-200 rounded w-32 mb-1"}),(0,t.jsx)("div",{className:"h-3 bg-gray-200 rounded w-48"})]}),(0,t.jsx)("div",{className:"w-20 h-6 bg-gray-200 rounded"}),(0,t.jsx)("div",{className:"w-16 h-6 bg-gray-200 rounded"}),(0,t.jsx)("div",{className:"w-8 h-8 bg-gray-200 rounded"})]})},e))})]})})}),l=()=>{let[e,l]=(0,r.useState)({searchTerm:"",users:[],loading:!0,error:"",selectedRole:"all",selectedStatus:"all",currentUser:null,deletingId:null,updatingStatus:null}),n=(0,r.useRef)(null),d=(0,r.useRef)(!0),c=(0,r.useRef)(null),u=(0,r.useRef)(null),m="https://server.nybff.us",p=(0,r.useCallback)(e=>{l(t=>({...t,...e}))},[]),h=(0,r.useCallback)(()=>{try{return localStorage.getItem("token")}catch{return null}},[]),g=(0,r.useCallback)(e=>e._id||e.id,[]),x=(0,r.useCallback)(async(e=!1)=>{let t=h();if(!t)return void p({error:"Please login again",loading:!1});if(!e&&c.current){p({users:c.current,loading:!1}),setTimeout(()=>x(!0),100);return}n.current&&n.current.abort(),n.current=new AbortController;try{p({loading:!0,error:""});let e=await fetch(`${m}/api/admin/users`,{headers:{Authorization:`Bearer ${t}`},signal:n.current.signal});if(!e.ok){if(401===e.status)throw Error("Session expired");if(403===e.status)throw Error("Access denied");throw Error(`HTTP ${e.status}`)}let s=await e.json(),a=[];if(Array.isArray(s)?a=s:s.users?.length?a=s.users:s.data?.length&&(a=s.data),!a.length)throw Error("No users found");c.current=a,(0,r.startTransition)(()=>{p({users:a,loading:!1,error:""})})}catch(e){if("AbortError"===e.name)return;c.current?(p({users:c.current,loading:!1}),a.toast.error("Using cached data")):p({error:e.message,loading:!1})}},[m,h,p]),f=(0,r.useCallback)(()=>{let e=h();if(e)try{let t=JSON.parse(atob(e.split(".")[1]));p({currentUser:t})}catch(e){console.error("Token decode error:",e)}},[h,p]);(0,r.useEffect)(()=>{d.current=!0,c.current&&p({users:c.current,loading:!1}),x(),f();let e=setInterval(()=>{"visible"===document.visibilityState&&x(!0)},3e4);return()=>{d.current=!1,clearInterval(e),n.current&&n.current.abort(),u.current&&clearTimeout(u.current)}},[x,f,p]);let v=(0,r.useCallback)(async t=>{if(t&&confirm("Delete this user?")){p({deletingId:t});try{let r=h();if(!r)throw Error("No token");if(!(await fetch(`${m}/api/admin/users/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${r}`}})).ok)throw Error("Delete failed");let s=e.users.filter(e=>(e._id||e.id)!==t);c.current=s,p({users:s}),a.toast.success("User deleted")}catch(e){a.toast.error(e.message)}finally{p({deletingId:null})}}},[m,h,e.users,p]),b=(0,r.useCallback)(async(t,r)=>{let s="active"===r?"inactive":"active";if(confirm(`${s} this user?`)){p({updatingStatus:t});try{let r=h();if(!r)throw Error("No token");if(!(await fetch(`${m}/api/admin/users/${t}/status`,{method:"PATCH",headers:{Authorization:`Bearer ${r}`},body:JSON.stringify({isActive:"active"===s})})).ok)throw Error("Update failed");let i=e.users.map(e=>(e._id||e.id)===t?{...e,isActive:"active"===s,status:s}:e);c.current=i,p({users:i}),a.toast.success(`User ${s}d`)}catch(e){a.toast.error(e.message)}finally{p({updatingStatus:null})}}},[m,h,e.users,p]),y=(0,r.useCallback)(async(t,r)=>{try{let s=h();if(!s)throw Error("No token");if(!(await fetch(`${m}/api/admin/users/${t}/role`,{method:"PATCH",headers:{Authorization:`Bearer ${s}`},body:JSON.stringify({role:r})})).ok)throw Error("Update failed");let i=e.users.map(e=>(e._id||e.id)===t?{...e,role:r}:e);c.current=i,p({users:i}),a.toast.success(`Role updated to ${r}`)}catch(e){a.toast.error(e.message)}},[m,h,e.users,p]),j=(0,r.useCallback)(e=>{u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{p({searchTerm:e})},300)},[p]),w=(0,r.useMemo)(()=>{let{users:t,searchTerm:r,selectedRole:s,selectedStatus:a}=e;if(!t.length)return[];let i=t;if(r){let e=r.toLowerCase();i=i.filter(t=>(t.name||t.fullName||"").toLowerCase().includes(e)||(t.email||"").toLowerCase().includes(e))}return"all"!==s&&(i=i.filter(e=>(e.role||"user")===s)),"all"!==a&&(i=i.filter(e=>(void 0!==e.isActive?e.isActive?"active":"inactive":"active")===a)),i},[e.users,e.searchTerm,e.selectedRole,e.selectedStatus]),N=(0,r.useCallback)(e=>{if(!e)return"U";let t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()},[]);return e.loading&&!c.current?(0,t.jsx)(o,{}):(0,t.jsx)("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Users Management"}),(0,t.jsxs)("p",{className:"text-gray-600 text-sm mt-1",children:["Currently users ",e.users.length," total"]})]}),(0,t.jsxs)(s.default,{href:"/admin/all-users/create",className:"mt-3 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition text-sm",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Add User"]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mb-5",children:[(0,t.jsxs)("div",{className:"flex-1 min-w-50 relative",children:[(0,t.jsx)("svg",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),(0,t.jsx)("input",{type:"text",placeholder:"Search users...",onChange:e=>j(e.target.value),className:"w-full text-black pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"})]}),(0,t.jsxs)("select",{value:e.selectedRole,onChange:e=>p({selectedRole:e.target.value}),className:"px-3 py-2 text-black text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white",children:[(0,t.jsx)("option",{value:"all",children:"All Roles"}),(0,t.jsx)("option",{value:"admin",children:"Admin"}),(0,t.jsx)("option",{value:"user",children:"User"}),(0,t.jsx)("option",{value:"moderator",children:"Moderator"})]}),(0,t.jsxs)("select",{value:e.selectedStatus,onChange:e=>p({selectedStatus:e.target.value}),className:"px-3 py-2 text-black text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white",children:[(0,t.jsx)("option",{value:"all",children:"All Status"}),(0,t.jsx)("option",{value:"active",children:"Active"}),(0,t.jsx)("option",{value:"inactive",children:"Inactive"})]}),(0,t.jsxs)("button",{onClick:()=>x(!0),className:"px-3 py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition flex items-center gap-1",title:"Refresh users",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),(0,t.jsx)("span",{className:"hidden sm:inline",children:"Refresh"})]})]}),(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden",children:(0,t.jsxs)("div",{className:"divide-y divide-gray-100",children:[w.slice(0,100).map((r,s)=>{let a=g(r);return(0,t.jsx)(i,{user:r,serialNumber:s+1,currentUser:e.currentUser,updatingStatus:e.updatingStatus,deletingId:e.deletingId,onUpdateRole:y,onUpdateStatus:b,onDeleteUser:v,getInitials:N},a)}),0===w.length&&(0,t.jsx)("div",{className:"text-center py-12",children:(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"No users found"})})]})})]})})};e.s(["default",0,function(){let[e,s]=(0,r.useState)(""),[a,i]=(0,r.useState)([{id:1,name:"Sazeduzzaman Saju",email:"saju@example.com",role:"admin",status:"active",joinDate:"2024-01-15",avatar:"/assets/sazeduzzaman.jpg"},{id:2,name:"John Doe",email:"john@example.com",role:"user",status:"active",joinDate:"2024-02-20",avatar:"/assets/avatar-default.jpg"},{id:3,name:"Jane Smith",email:"jane@example.com",role:"user",status:"inactive",joinDate:"2024-03-10",avatar:"/assets/avatar-default.jpg"}]),o=a.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.email.toLowerCase().includes(e.toLowerCase()));return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l,{filteredUsers:o,handleDeleteUser:e=>{confirm("Are you sure you want to delete this user?")&&i(a.filter(t=>t.id!==e))}})})}],20902)}]);