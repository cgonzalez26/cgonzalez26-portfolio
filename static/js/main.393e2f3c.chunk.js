(this["webpackJsonpcgonzalez26-portfolio"]=this["webpackJsonpcgonzalez26-portfolio"]||[]).push([[0],{18:function(e,t,r){"use strict";var a=r(2);t.a=function(e){var t=e.title;return Object(a.jsx)("button",{children:t})}},24:function(e,t,r){"use strict";var a=r(7),n=r(1);t.a=function(){var e=Object(n.useState)(localStorage.theme),t=Object(a.a)(e,2),r=t[0],s=t[1],c="dark"===r?"light":"dark";return Object(n.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(c),e.classList.add(r),localStorage.setItem("theme",r)}),[r,c]),[c,s]}},27:function(e,t,r){},30:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);r(27);var a=r(41),n=r(1),s=r(14),c=r(3),l=function(){var e=Object(c.e)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},i=r(6),d=r(2);var o=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear(),Object(d.jsx)("a",{href:"https://github.com/cgonzalez26.github.io",target:"__blank",className:"hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Cristian Gonz\xe1lez Portfolio"}),"."]})})},x=[{id:1,icon:Object(d.jsx)(i.e,{}),url:"https://github.com/cgonzalez26"},{id:2,icon:Object(d.jsx)(i.p,{}),url:"https://twitter.com/cgonzalez26"},{id:3,icon:Object(d.jsx)(i.g,{}),url:"https://www.linkedin.com/in/cristiangonzalez26/"},{id:4,icon:Object(d.jsx)(i.f,{}),url:"https://www.instagram.com/cgonzalez_26"}],m=function(){return Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"S\xedgueme"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:x.map((function(e){return Object(d.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)}))})]}),Object(d.jsx)(o,{})]})})},b=r(7),j=r(24),h=r(40),g=r(18),f=["Web Application","Mobile Application","UI/UX Design","Branding"],A=function(e){var t=e.onClose;e.onRequest;return Object(d.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(d.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(d.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(d.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(d.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(d.jsxs)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:[Object(d.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"What project are you looking for?"}),Object(d.jsx)("button",{onClick:t,className:"px-4 font-bold text-primary-dark dark:text-primary-light",children:Object(d.jsx)(i.q,{className:"text-3xl"})})]}),Object(d.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"max-w-xl m-4 text-left",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("select",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category",children:f.map((function(e){return Object(d.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("textarea",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"})}),Object(d.jsx)("div",{className:"mt-6 pb-4 sm:pb-1",children:Object(d.jsx)("span",{onClick:t,type:"submit",className:"px-4\r sm:px-6\r py-2\r sm:py-2.5\r text-white\r bg-indigo-500\r hover:bg-indigo-600\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Submit Request",children:Object(d.jsx)(g.a,{title:"Send Request"})})})]})}),Object(d.jsx)("div",{className:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",children:Object(d.jsx)("span",{onClick:t,type:"button",className:"px-4\r sm:px-6\r py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",children:Object(d.jsx)(g.a,{title:"Close"})})})]})})})]})},u=r.p+"static/media/logo-light.a9a6a3d4.svg",p=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),l=Object(b.a)(c,2),o=l[0],x=l[1],m=Object(n.useState)(!1),f=Object(b.a)(m,1)[0],p=Object(n.useState)(!1),w=Object(b.a)(p,1)[0],v=Object(j.a)(),O=Object(b.a)(v,2),y=O[0],k=O[1];function P(){o?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),x(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),x(!0))}return Object(d.jsxs)(h.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{children:Object(d.jsx)(s.b,{to:"/",children:"dark"===y?Object(d.jsx)("img",{src:"data:image/jpeg;base64,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",className:"w-36",alt:"Dark Logo"}):Object(d.jsx)("img",{src:u,className:"w-36",alt:"Dark Logo"})})}),Object(d.jsx)("div",{onClick:function(){return k(y)},"aria-label":"Theme Switcher",className:f?"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer":"hidden",children:"dark"===y?Object(d.jsx)(i.k,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.n,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){a(!r)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:r?Object(d.jsx)(i.q,{className:"text-3xl"}):Object(d.jsx)(i.j,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:r?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(s.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Proyectos"}),Object(d.jsx)(s.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"Acerca de mi"}),Object(d.jsx)(s.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contacto"}),Object(d.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(d.jsx)("span",{onClick:P,className:w?"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24":"hidden","aria-label":"Hire Me Button",children:Object(d.jsx)(g.a,{title:"Hire Me"})})})]}),Object(d.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(d.jsx)(s.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(s.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(s.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(d.jsx)("div",{className:"hidden md:flex",children:Object(d.jsx)("span",{onClick:P,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Hire Me Button",children:Object(d.jsx)(g.a,{title:"Hire Me"})})}),Object(d.jsx)("div",{onClick:function(){return k(y)},"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===y?Object(d.jsx)(i.k,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.n,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]}),Object(d.jsxs)("div",{children:[o?Object(d.jsx)(A,{onClose:P,onRequest:P}):null,o?P:null]})]})},w=(r(30),function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1];Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}));var s=function(){!r&&window.pageYOffset>400?a(!0):r&&window.pageYOffset<=400&&a(!1)};return window.addEventListener("scroll",s),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.b,{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:r?"flex":"none",padding:5}})})}),v=Object(n.lazy)((function(){return r.e(6).then(r.bind(null,50))})),O=Object(n.lazy)((function(){return Promise.all([r.e(3),r.e(7)]).then(r.bind(null,51))})),y=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,52))})),k=Object(n.lazy)((function(){return r.e(5).then(r.bind(null,47))})),P=Object(n.lazy)((function(){return r.e(8).then(r.bind(null,49))}));var N=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(s.a,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(p,{}),Object(d.jsx)(n.Suspense,{fallback:"",children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/",element:Object(d.jsx)(y,{})}),Object(d.jsx)(c.a,{path:"projects",element:Object(d.jsx)(k,{})}),Object(d.jsx)(c.a,{path:"projects/single-project",element:Object(d.jsx)(P,{})}),Object(d.jsx)(c.a,{path:"about",element:Object(d.jsx)(v,{})}),Object(d.jsx)(c.a,{path:"contact",element:Object(d.jsx)(O,{})})]})}),Object(d.jsx)(m,{})]}),Object(d.jsx)(w,{})]})})},F=function(e){e&&e instanceof Function&&r.e(9).then(r.bind(null,48)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))},D=r(26),H=document.getElementById("root");Object(D.createRoot)(H).render(Object(d.jsx)(N,{})),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.393e2f3c.chunk.js.map