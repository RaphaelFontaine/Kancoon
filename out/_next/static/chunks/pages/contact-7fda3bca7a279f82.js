(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(2048)}])},2048:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return y}});var n=r(5893),t=r(9008),a=r.n(t),l=r(7531),o=r(2026),i=r(1007),c=r(9469),d=r(4991),x=r(1238),h=r(6137),m=r(9357);r(7294);var u=r(7536),g=r(6501);let f=RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/),p=RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);function b(){var e,s,r,t,a;let{register:l,trigger:o,getValues:i,formState:{errors:b}}=(0,u.cI)(),j=async()=>{let e=await o();if(!e)return;let s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i())},r=async()=>{let e=await fetch("api/send_email",s);if(!e.ok)throw Error("Votre mail error")};g.Am.promise(r(),{loading:"Envoi de votre mail en cours",success:"Votre mail a \xe9t\xe9 envoy\xe9 avec succ\xe8s !",error:e=>e.message})};return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl",children:[(0,n.jsxs)(c.M,{className:"px-10 pt-6 space-x-5",cols:2,mt:"xl",children:[(0,n.jsx)(d.o,{label:"Nom complet *",placeholder:"Jean Dupont",...l("full_name",{required:{value:!0,message:"Ce champ est requis !"},minLength:{value:2,message:""}}),error:null===(e=b.full_name)||void 0===e?void 0:e.message,className:"hover:border-green",classNames:{input:"focus:border-green",label:"text-white"}}),(0,n.jsx)(d.o,{label:"E-mail *",placeholder:"jean.dupont@gmail.com",classNames:{input:"focus:border-green",label:"text-white"},className:"hover:border-green",...l("email",{required:{value:!0,message:"Ce champ est requis !"},pattern:{value:p,message:"Veuillez renseigner un email valide !"}}),error:null===(s=b.email)||void 0===s?void 0:s.message})]}),(0,n.jsxs)(c.M,{className:"px-10 py-6 space-x-5",cols:2,mt:"xl",children:[(0,n.jsx)(d.o,{label:"T\xe9l\xe9phone *",placeholder:"0611223344",classNames:{input:"focus:border-green",label:"text-white"},className:"focus:border-green",...l("phone",{required:{value:!0,message:"Ce champ est requis !"},pattern:{value:f,message:"Veuillez entrer un num\xe9ro de t\xe9l\xe9phone valide"}}),error:null===(r=b.phone)||void 0===r?void 0:r.message}),(0,n.jsx)(d.o,{label:"Sujet",placeholder:"Stores Bannes",classNames:{input:"focus:border-green",label:"text-white"},className:"hover:border-green",...l("subject"),error:null===(t=b.subject)||void 0===t?void 0:t.message})]}),(0,n.jsx)(x.g,{label:"Message",placeholder:"Votre message",classNames:{input:"focus:border-green",label:"text-white"},className:"mx-10",mt:"md",maxRows:10,minRows:5,autosize:!0,...l("message"),error:null===(a=b.message)||void 0===a?void 0:a.message}),(0,n.jsx)(h.Z,{position:"center",mt:"xl",className:"flex flex-col",children:(0,n.jsx)(m.z,{onClick:j,type:"submit",size:"md",className:"bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10",children:"Envoyer"})})]})})}function j(){return(0,n.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-center text-white",children:[(0,n.jsxs)("div",{className:"flex flex-col hover:scale-105 space-y-8 items-center justify-center hover:bg-dark-grey w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl",children:[(0,n.jsx)("a",{href:"tel:+33251959400",children:(0,n.jsx)("div",{className:"p-1 flex items-center justify-center rounded-full bg-green h-20 w-20",children:(0,n.jsx)("img",{className:"",src:"/assets/contact/tel.png",loading:"lazy"})})}),(0,n.jsx)("div",{className:"px-[15%]",children:(0,n.jsxs)("a",{className:"hover:text-green transition-all duration-500 flex items-center justify-center",href:"tel:+33251959400",children:["02 51 95 94 00 ",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{})]})})]}),(0,n.jsxs)("div",{className:"flex flex-col hover:scale-105 space-y-6 items-center justify-center hover:bg-dark-grey w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl",children:[(0,n.jsx)("a",{href:"mailto:contact@kancoon.fr",children:(0,n.jsx)("div",{className:"p-1 flex items-center justify-center rounded-full bg-green h-20 w-20",children:(0,n.jsx)("img",{className:"",src:"/assets/contact/mail.png",loading:"lazy"})})}),(0,n.jsx)("div",{className:"px-[15%]",children:(0,n.jsx)("a",{className:"hover:text-green transition-all duration-500",href:"mailto:contact@kancoon.fr",children:"contact@kancoon.fr"})})]}),(0,n.jsxs)("div",{className:"flex flex-col hover:scale-105 space-y-4 hover:bg-dark-grey items-center justify-center w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl",children:[(0,n.jsx)("a",{href:"https://www.google.com/maps/place/Kancoon/@46.5190377,-1.7813082,15z/data=!4m2!3m1!1s0x0:0xae810b9969796b41?sa=X&ved=2ahUKEwjDgf3cxcDtAhUyxIUKHfn4AJoQ_BIwDHoECBYQBQ",target:"_blank",children:(0,n.jsx)("div",{className:"p-1 flex items-center justify-center rounded-full bg-green h-20 w-20",children:(0,n.jsx)("img",{className:"",src:"/assets/contact/kancoon.png",loading:"lazy"})})}),(0,n.jsx)("div",{className:"px-[15%] text-center",children:(0,n.jsx)("a",{className:"hover:text-green transition-all duration-500",href:"https://www.google.com/maps/place/Kancoon/@46.5190377,-1.7813082,15z/data=!4m2!3m1!1s0x0:0xae810b9969796b41?sa=X&ved=2ahUKEwjDgf3cxcDtAhUyxIUKHfn4AJoQ_BIwDHoECBYQBQ",target:"_blank",children:"19 rue Cl\xe9ment Ader Olonne sur Mer 85340 Les Sables d’Olonne"})})]})]})}function v(){return(0,n.jsx)("div",{className:"relative overflow-hidden pb-20 flex items-center justify-center left-0 top-0 h-[100%] w-[100%]",children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d351417.93941580283!2d-1.781432!3d46.518944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48045d46fb93c03d%3A0x258c68ff48c7bdd6!2s19%20Rue%20Cl%C3%A9ment%20Ader%2C%2085340%20Les%20Sables-d'Olonne%2C%20France!5e0!3m2!1sfr!2sus!4v1670965526063!5m2!1sfr!2sus",width:"1000",height:"525",loading:"lazy"})})}function w(){return(0,n.jsxs)("div",{className:"flex flex-wrap gap-32 px-4 py-20 items-center justify-center",children:[(0,n.jsx)("a",{className:"transition-all duration-500 px-[1%]",target:"_blank",href:"https://www.facebook.com/kancoonolonne",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler rounded-lg hover:scale-110 bg-facebook icon-tabler-brand-facebook transition-all duration-300",width:"72",height:"72",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ffffff",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"})]})}),(0,n.jsx)("a",{className:"transition-all duration-500 px-[1%]",target:"_blank",href:"https://www.instagram.com/kancoonstorespergolas/",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler rounded-lg hover:scale-110 bg-instagram icon-tabler-brand-facebook transition-all duration-300",width:"72",height:"72",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ffffff",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"4"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,n.jsx)("line",{x1:"16.5",y1:"7.5",x2:"16.5",y2:"7.501"})]})}),(0,n.jsx)("a",{className:"transition-all duration-500 px-[1%]",target:"_blank",href:"https://www.linkedin.com/company/kancoon/",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler rounded-lg hover:scale-110 bg-linkedin icon-tabler-brand-facebook transition-all duration-300",width:"72",height:"72",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ffffff",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),(0,n.jsx)("line",{x1:"8",y1:"11",x2:"8",y2:"16"}),(0,n.jsx)("line",{x1:"8",y1:"8",x2:"8",y2:"8.01"}),(0,n.jsx)("line",{x1:"12",y1:"16",x2:"12",y2:"11"}),(0,n.jsx)("path",{d:"M16 16v-3a2 2 0 0 0 -4 0"})]})}),(0,n.jsx)("a",{className:"transition-all duration-500 px-[1%]",target:"_blank",href:"https://www.youtube.com/channel/UCpjiJxmhMs5MzIO2xa8yJaA",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler rounded-lg hover:scale-110 bg-youtube icon-tabler-brand-youtube transition-all duration-300",width:"72",height:"72",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ffffff",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("rect",{x:"3",y:"5",width:"18",height:"14",rx:"4"}),(0,n.jsx)("path",{d:"M10 9l5 3l-5 3z"})]})})]})}function y(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Contactez-nous pour vos am\xe9nagements int\xe9rieurs et ext\xe9rieurs"}),(0,n.jsx)("meta",{name:"description",content:"Contactez-nous pour vos am\xe9nagements int\xe9rieurs et ext\xe9rieurs"}),(0,n.jsx)("link",{rel:"icon",href:"/FAVICON-transparent.png"}),(0,n.jsx)("script",{async:!0,defer:!0,"data-website-id":"128afe3d-c0f3-4471-a7e9-0ceba4174583",src:"https://stats.viking.click/umami.js"})]}),(0,n.jsx)(o.Z,{}),(0,n.jsxs)("main",{className:"pt-[95px] bg-general-grey",children:[(0,n.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-10 phone:space-y-0 mt-16",children:[(0,n.jsx)(b,{}),(0,n.jsx)(j,{})]}),(0,n.jsx)(w,{}),(0,n.jsx)(v,{})]}),(0,n.jsx)(l.Z,{}),(0,n.jsx)(i.t,{})]})}}},function(e){e.O(0,[584,802,357,502,852,774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);