(this["webpackJsonpcgonzalez26-portfolio"]=this["webpackJsonpcgonzalez26-portfolio"]||[]).push([[3],{44:function(e,t,n){},45:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return G}));var s=n(7),c=n(22);var u=n(21);function l(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(u.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(1),f=n.n(d);function p(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var m=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(o&&(o+=" "),o+=t);return o},v=["delay","staleId"],g=["theme","type"];function y(e){return"number"==typeof e&&!isNaN(e)}function h(e){return"boolean"==typeof e}function b(e){return"string"==typeof e}function T(e){return"function"==typeof e}function O(e){return b(e)||T(e)?e:null}function E(e){return 0===e||e}function _(e){return Object(d.isValidElement)(e)||b(e)||T(e)||y(e)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},I={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function j(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,p=e.isIn,m=r?t+"--"+a:t,v=r?n+"--"+a:n,g=Object(d.useRef)(),y=Object(d.useRef)(0);function h(e){if(e.target===l.current){var t=l.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===y.current&&"animationcancel"!==e.type&&(t.className=g.current)}}function b(){var e=l.current;e.removeEventListener("animationend",b),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return Object(d.useLayoutEffect)((function(){!function(){var e=l.current;g.current=e.className,e.className+=" "+m,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),Object(d.useEffect)((function(){p||(s?b():function(){y.current=1;var e=l.current;e.className+=" "+v,e.addEventListener("animationend",b)}())}),[p]),f.a.createElement(f.a.Fragment,null,o)}}function L(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,l([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}};function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return f.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},f.a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},f.a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function D(e){var t=e.delay,n=e.isRunning,r=e.closeToast,i=e.type,s=e.hide,c=e.className,u=e.style,l=e.controlledProgress,d=e.progress,p=e.rtl,v=e.isIn,g=e.theme,y=a(a({},u),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});l&&(y.transform="scaleX("+d+")");var h=m("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+i,{"Toastify__progress-bar--rtl":p}),b=T(c)?c({rtl:p,type:i,defaultClassName:h}):m(h,c);return f.a.createElement("div",o({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:b,style:y},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){v&&r()}))}D.defaultProps={type:I.DEFAULT,hide:!1};var x=function(e){var t=e.theme,n=e.type,o=i(e,g);return f.a.createElement("svg",a({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))},k={info:function(e){return f.a.createElement(x,a({},e),f.a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return f.a.createElement(x,a({},e),f.a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return f.a.createElement(x,a({},e),f.a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return f.a.createElement(x,a({},e),f.a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return f.a.createElement("div",{className:"Toastify__spinner"})}},S=function(e){var t=function(e){var t=Object(d.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1],a=Object(d.useState)(!1),i=Object(s.a)(a,2),c=i[0],u=i[1],l=Object(d.useRef)(null),f=Object(d.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=Object(d.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=l.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=P(t.nativeEvent),f.y=N(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function O(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?_():E()}}function E(){r(!0)}function _(){r(!1)}function C(t){var n=l.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=P(t),f.y=N(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=l.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(d.useEffect)((function(){p.current=e})),Object(d.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),T(e.onOpen)&&e.onOpen(Object(d.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose(Object(d.isValidElement)(e.children)&&e.children.props)}}),[]),Object(d.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",E),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var j={onMouseDown:b,onTouchStart:b,onMouseUp:O,onTouchEnd:O};return m&&v&&(j.onMouseEnter=_,j.onMouseLeave=E),h&&(j.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:E,pauseToast:_,isRunning:o,preventExitTransition:c,toastRef:l,eventHandlers:j}}(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,p=e.onClick,v=e.type,g=e.hideProgressBar,y=e.closeToast,h=e.transition,O=e.position,E=e.className,_=e.style,C=e.bodyClassName,I=e.bodyStyle,j=e.progressClassName,L=e.progressStyle,w=e.updateId,R=e.role,x=e.progress,S=e.rtl,B=e.toastId,M=e.deleteToast,A=e.isIn,F=e.isLoading,z=e.icon,H=e.theme,q=m("Toastify__toast","Toastify__toast-theme--"+H,"Toastify__toast--"+v,{"Toastify__toast--rtl":S}),V=T(E)?E({rtl:S,position:O,type:v,defaultClassName:q}):m(q,E),U=!!x,Q=k[v],G={theme:H,type:v},W=Q&&Q(G);return!1===z?W=void 0:T(z)?W=z(G):f.a.isValidElement(z)?W=f.a.cloneElement(z,G):b(z)?W=z:F&&(W=k.spinner()),f.a.createElement(h,{isIn:A,done:M,position:O,preventExitTransition:o,nodeRef:r},f.a.createElement("div",a(a({id:B,onClick:p,className:V},i),{},{style:_,ref:r}),f.a.createElement("div",a(a({},A&&{role:R}),{},{className:T(C)?C({type:v}):m("Toastify__toast-body",C),style:I}),W&&f.a.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!F})},W),f.a.createElement("div",null,u)),function(e){if(e){var t={closeToast:y,type:v,theme:H};return T(e)?e(t):f.a.isValidElement(e)?f.a.cloneElement(e,t):void 0}}(c),(l||U)&&f.a.createElement(D,a(a({},w&&!U?{key:"pb-"+w}:{}),{},{rtl:S,theme:H,delay:l,isRunning:n,isIn:A,closeToast:y,hide:g,type:v,style:L,className:j,controlledProgress:U,progress:x}))))},B=j({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),M=(j({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),j({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),j({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),Object(d.forwardRef)((function(e,t){var n=function(e){var t=Object(d.useReducer)((function(e){return e+1}),0),n=Object(s.a)(t,2)[1],o=Object(d.useState)([]),r=Object(s.a)(o,2),a=r[0],c=r[1],u=Object(d.useRef)(null),f=Object(d.useRef)(new Map).current,p=function(e){return-1!==a.indexOf(e)},m=Object(d.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:p,getToast:function(e){return f.get(e)}}).current;function g(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function C(e){c((function(t){return E(e)?t.filter((function(t){return t!==e})):[]}))}function I(){var e=m.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function j(e,t){var o=t.delay,r=t.staleId,a=i(t,v);if(_(e)&&!function(e){return!u.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||f.has(e.toastId)&&null==e.updateId}(a)){var s=a.toastId,c=a.updateId,l=a.data,p=m.props,g=function(){return C(s)},j=null==c;j&&m.count++;var N,R,D={toastId:s,updateId:c,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||m.toastKey++,type:a.type,closeToast:g,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:O(a.className||p.toastClassName),bodyClassName:O(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:h(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:h(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:h(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:h(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:O(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(N=a.autoClose,R=p.autoClose,!1===N||y(N)&&N>0?N:R),hideProgressBar:h(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var e=L(f.get(s),"removed");f.delete(s),w.emit(4,e);var t=m.queue.length;if(m.count=E(s)?m.count-1:m.count-m.displayedToast,m.count<0&&(m.count=0),t>0){var o=E(s)?1:m.props.limit;if(1===t||1===o)m.displayedToast++,I();else{var r=o>t?t:o;m.displayedToast=r;for(var a=0;a<r;a++)I()}}else n()}};T(a.onOpen)&&(D.onOpen=a.onOpen),T(a.onClose)&&(D.onClose=a.onClose),D.closeButton=p.closeButton,!1===a.closeButton||_(a.closeButton)?D.closeButton=a.closeButton:!0===a.closeButton&&(D.closeButton=!_(p.closeButton)||p.closeButton);var x=e;Object(d.isValidElement)(e)&&!b(e.type)?x=Object(d.cloneElement)(e,{closeToast:g,toastProps:D,data:l}):T(e)&&(x=e({closeToast:g,toastProps:D,data:l})),p.limit&&p.limit>0&&m.count>p.limit&&j?m.queue.push({toastContent:x,toastProps:D,staleId:r}):y(o)?setTimeout((function(){P(x,D,r)}),o):P(x,D,r)}}function P(e,t,n){var o=t.toastId;n&&f.delete(n);var r={content:e,props:t};f.set(o,r),c((function(e){return[].concat(l(e),[o]).filter((function(e){return e!==n}))})),w.emit(4,L(r,null==r.props.updateId?"added":"updated"))}return Object(d.useEffect)((function(){return m.containerId=e.containerId,w.cancelEmit(3).on(0,j).on(1,(function(e){return u.current&&C(e)})).on(5,g).emit(2,m),function(){return w.emit(3,m)}}),[]),Object(d.useEffect)((function(){m.props=e,m.isToastActive=p,m.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:p}}(e),o=n.getToastToRender,r=n.containerRef,c=n.isToastActive,u=e.className,p=e.style,g=e.rtl,C=e.containerId;function I(e){var t=m("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":g});return T(u)?u({position:e,rtl:g,defaultClassName:t}):m(t,O(u))}return Object(d.useEffect)((function(){t&&(t.current=r.current)}),[]),f.a.createElement("div",{ref:r,className:"Toastify",id:C},o((function(e,t){var n=t.length?a({},p):a(a({},p),{},{pointerEvents:"none"});return f.a.createElement("div",{className:I(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return f.a.createElement(S,a(a({},r),{},{isIn:c(r.toastId),style:{"--nth":n+1,"--len":t.length},key:"toast-"+r.key,closeButton:!0===r.closeButton?R:r.closeButton}),o)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:C.TOP_RIGHT,transition:B,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,F=new Map,z=[];function H(){return Math.random().toString(36).substring(2,9)}function q(e){return e&&(b(e.toastId)||y(e.toastId))?e.toastId:H()}function V(e,t){return F.size>0?w.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function U(e,t){return a(a({},t),{},{type:t&&t.type||e,toastId:q(t)})}function Q(e){return function(t,n){return V(t,U(e,n))}}function G(e,t){return V(e,U(I.DEFAULT,t))}G.loading=function(e,t){return V(e,U(I.DEFAULT,a({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var o,r=t.pending,i=t.error,s=t.success;r&&(o=b(r)?G.loading(r,n):G.loading(r.render,a(a({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var i=a(a(a({type:e},c),n),{},{data:r}),s=b(t)?{render:t}:t;return o?G.update(o,a(a({},i),s)):G(s.render,a(a({},i),s)),r}G.dismiss(o)},l=T(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},G.success=Q(I.SUCCESS),G.info=Q(I.INFO),G.error=Q(I.ERROR),G.warning=Q(I.WARNING),G.warn=G.warning,G.dark=function(e,t){return V(e,U(I.DEFAULT,a({theme:"dark"},t)))},G.dismiss=function(e){return w.emit(1,e)},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},G.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=F.get(n||A);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,i=a(a(a({},o),t),{},{toastId:t.toastId||e,updateId:H()});i.toastId!==e&&(i.staleId=e);var s=i.render||r;delete i.render,V(s,i)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},G.POSITION=C,G.TYPE=I,w.on(2,(function(e){A=e.containerId||e,F.set(A,e),z.forEach((function(e){w.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&w.off(0).off(1).off(5)}))},46:function(e,t,n){"use strict";var o={_origin:"https://api.emailjs.com"},r=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var a=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,i){var s=new XMLHttpRequest;s.addEventListener("load",(function(e){var t=e.target,n=new a(t);200===n.status||"OK"===n.text?r(n):i(n)})),s.addEventListener("error",(function(e){var t=e.target;i(new a(t))})),s.open("POST",o._origin+e,!0),Object.keys(n).forEach((function(e){s.setRequestHeader(e,n[e])})),s.send(t)}))};t.a={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";o._userID=e,o._origin=t},send:function(e,t,n,a){var s=a||o._userID;r(s,e,t);var c={lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:n};return i("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:function(e,t,n,a){var s=a||o._userID,c=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);r(s,e,t);var u=new FormData(c);return u.append("lib_version","3.2.0"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",s),i("/api/v1.0/email/send-form",u)}}}}]);
//# sourceMappingURL=3.a456f585.chunk.js.map