(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{6344:function(e,t,s){"use strict";s.d(t,{g:function(){return u}});var n=s(7294),a=s(3524);function l(e,t,s){(0,n.useEffect)(()=>(window.addEventListener(e,t,s),()=>window.removeEventListener(e,t,s)),[e,t])}let r=e=>e<.5?2*e*e:-1+(4-2*e)*e,i=({axis:e,target:t,parent:s,alignment:n,offset:a,isList:l})=>{if(!t||!s&&"undefined"==typeof document)return 0;let r=!!s,i=s||document.body,o=i.getBoundingClientRect(),c=t.getBoundingClientRect(),u=e=>c[e]-o[e];if("y"===e){let d=u("top");if(0===d)return 0;if("start"===n){let g=d-a,f=g<=c.height*(l?0:1)||!l;return f?g:0}let p=r?o.height:window.innerHeight;if("end"===n){let m=d+a-p+c.height,x=m>=-c.height*(l?0:1)||!l;return x?m:0}return"center"===n?d-p/2+c.height/2:0}if("x"===e){let h=u("left");if(0===h)return 0;if("start"===n){let b=h-a,j=b<=c.width||!l;return j?b:0}let w=r?o.width:window.innerWidth;if("end"===n){let y=h+a-w+c.width,v=y>=-c.width||!l;return v?y:0}if("center"===n)return h-w/2+c.width/2}return 0},o=({axis:e,parent:t})=>{if(!t&&"undefined"==typeof document)return 0;let s="y"===e?"scrollTop":"scrollLeft";if(t)return t[s];let{body:n,documentElement:a}=document;return n[s]+a[s]},c=({axis:e,parent:t,distance:s})=>{if(!t&&"undefined"==typeof document)return;let n="y"===e?"scrollTop":"scrollLeft";if(t)t[n]=s;else{let{body:a,documentElement:l}=document;a[n]=s,l[n]=s}};function u({duration:e=1250,axis:t="y",onScrollFinish:s,easing:u=r,offset:d=0,cancelable:g=!0,isList:f=!1}={}){let p=(0,n.useRef)(0),m=(0,n.useRef)(0),x=(0,n.useRef)(!1),h=(0,n.useRef)(null),b=(0,n.useRef)(null),j=(0,a.J)(),w=()=>{p.current&&cancelAnimationFrame(p.current)},y=(0,n.useCallback)(({alignment:n="start"}={})=>{var a;x.current=!1,p.current&&w();let l=null!=(a=o({parent:h.current,axis:t}))?a:0,r=i({parent:h.current,target:b.current,axis:t,alignment:n,offset:d,isList:f})-(h.current?0:l);!function n(){0===m.current&&(m.current=performance.now());let a=performance.now(),i=a-m.current,o=j||0===e?1:i/e,d=l+r*u(o);c({parent:h.current,axis:t,distance:d}),!x.current&&o<1?p.current=requestAnimationFrame(n):("function"==typeof s&&s(),m.current=0,p.current=0,w())}()},[t,e,u,f,d,s,j]),v=()=>{g&&(x.current=!0)};return l("wheel",v,{passive:!0}),l("touchmove",v,{passive:!0}),(0,n.useEffect)(()=>w,[]),{scrollableRef:h,targetRef:b,scrollIntoView:y,cancel:w}}},8810:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pergolas",function(){return s(3243)}])},1235:function(e,t,s){"use strict";s.d(t,{N:function(){return o}});var n=s(5893),a=s(9090),l=s(2870),r=s(7294),i=s(9656);function o(e){let{items:t}=e,s=t.map(e=>(0,n.jsxs)(a.l.Slide,{children:[(0,n.jsx)(l.E,{src:e.image,height:"576px",width:"full"}),(0,n.jsx)("h1",{className:"text-white py-4 font-bold text-center",children:e.legende})]})),o=(0,r.useRef)((0,i.Z)({delay:2e3}));return(0,r.useEffect)(()=>{let e=document.querySelectorAll(".js-show-on-scroll"),t=function(e){e.forEach(function(e){let t=e.target.dataset.animateType;e.isIntersecting&&e.target.classList.add(t)})},s=new IntersectionObserver(t);e.forEach(function(e){s.observe(e)})},[]),(0,n.jsx)(a.l,{"data-animate-type":"motion-safe:animate-fadeIn",className:"js-show-on-scroll h-full flex transition-all duration-1000",classNames:{indicators:"mb-16",indicator:"bg-white",control:"hidden phone:flex bg-white",slide:"relative flex flex-col"},slideSize:"100%",mx:"auto",withIndicators:!0,plugins:[o.current],loop:!0,onMouseEnter:o.current.stop,onMouseLeave:o.current.reset,children:s})}},4604:function(e,t,s){"use strict";s.d(t,{t:function(){return l}});var n=s(5893),a=s(7294);function l(){return(0,a.useEffect)(()=>{let e=document.querySelectorAll(".js-show-on-scroll"),t=function(e){e.forEach(function(e){let t=e.target.dataset.animateType;e.isIntersecting&&e.target.classList.add(t)})},s=new IntersectionObserver(t);e.forEach(function(e){s.observe(e)})},[]),(0,n.jsxs)("div",{"data-animate-type":"motion-safe:animate-fadeIn",className:"js-show-on-scroll bg-grey-realisation text-white text-realisation-title-size text-center pt-realisation-top pb-realisation-bottom",children:["Nos R\xe9alisations",(0,n.jsx)("div",{className:"text-realisation-corps-size",children:"Les Sables d'Olonne, Saint Gilles Croix de Vie, La Roche sur Yon"})]})}},734:function(e,t,s){"use strict";s.d(t,{z:function(){return l}});var n=s(5893),a=s(7294);function l(e){return(0,a.useEffect)(()=>{let e=document.querySelectorAll(".js-show-on-scroll"),t=function(e){e.forEach(function(e){let t=e.target.dataset.animateType;e.isIntersecting&&e.target.classList.add(t)})},s=new IntersectionObserver(t);e.forEach(function(e){s.observe(e)})},[]),(0,n.jsx)("div",{"data-animate-type":"motion-safe:animate-fadeInRight",className:"js-show-on-scroll bp:w-1/2 w-full relative pt-[56.25%] bp:pt-[28.125%] overflow-hidden ",children:(0,n.jsx)("iframe",{className:"absolute w-full h-full top-0 left-0 bottom-0 right-0",id:"inlineFrameExample",title:"Inline Frame Example",width:"100%",height:"auto",src:e.source})})}},3243:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(5893),a=s(9008),l=s.n(a),r=s(7531),i=s(2026),o=s(1007),c=s(4312),u=s(6303),d=s(5941),g=s(5100),f=s(9619),p=s(734),m=s(7294),x=s(3990);function h(){(0,m.useEffect)(()=>{let e=document.querySelectorAll(".js-show-on-scroll"),t=function(e){e.forEach(function(e){let t=e.target.dataset.animateType;e.isIntersecting&&e.target.classList.add(t)})},s=new IntersectionObserver(t);e.forEach(function(e){s.observe(e)})},[]);let e=u.q3[0],t=u.q3[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.t,{computer:c.fo.computer,phone:c.fo.phone,alt:c.fo.alt}),(0,n.jsxs)("div",{className:"flex flex-col bp:flex-row bp:h-case-size",children:[(0,n.jsxs)("div",{"data-animate-type":"motion-safe:animate-fadeInLeft",className:"js-show-on-scroll flex flex-row bg-white w-full bp:w-1/2 text-title-color ",children:[(0,n.jsxs)("div",{className:"flex flex-row bg-white h-grey-band pl-[40px]",children:[(0,n.jsx)("div",{className:"bg-general-grey w-grey-band h-grey-band"}),(0,n.jsx)("div",{className:"bg-white pl-[20px]",children:(0,n.jsx)("div",{className:"bg-green w-green-band h-green-band"})})]}),(0,n.jsx)("div",{className:"text-title-size w-full pr-[13%] bp:pr-[0%] py-[15%] bp:py-[0%] flex items-center justify-center",children:"Exemple d'installation d'une pergola bioclimatique"})]}),(0,n.jsx)(p.z,{source:d.s7.source})]}),(0,n.jsx)(f.$,{left:e.left,title:e.title,images:e.images,core:e.core}),(0,n.jsxs)("div",{className:"flex flex-col bp:flex-row bp:h-case-size",children:[(0,n.jsxs)("div",{"data-animate-type":"motion-safe:animate-fadeInLeft",className:"js-show-on-scroll flex flex-row bg-white w-full bp:w-1/2 text-title-color ",children:[(0,n.jsxs)("div",{className:"flex flex-row bg-white h-grey-band pl-[40px]",children:[(0,n.jsx)("div",{className:"bg-general-grey w-grey-band h-grey-band"}),(0,n.jsx)("div",{className:"bg-white pl-[20px]",children:(0,n.jsx)("div",{className:"bg-green w-green-band h-green-band"})})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center text-title-size w-full pr-[13%] bp:pr-[15%] py-[15%] bp:py-[0%] ",children:[(0,n.jsxs)("div",{className:"flex flex-row",children:["Mission \xa0",(0,n.jsxs)("div",{className:" z-1 h-1/2",children:[(0,n.jsx)(x.sQZ,{className:"absolute text-[#FF0000] mt-1 bp:mt-2 z-2 opacity-80"}),"Im"]}),"Possible : ",(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"flex items-center justify-center",children:"Pergola sur les toits"})]})]}),(0,n.jsx)(p.z,{source:d.O0.source})]}),(0,n.jsx)(f.$,{left:t.left,title:t.title,images:t.images,core:t.core})]})}var b=s(8849),j=s(4604),w=s(1235);function y(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.t,{}),(0,n.jsx)(w.N,{items:b.b1})]})}function v(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Pergolas par KANCOON aux Sables d'Olonne et en Vend\xe9e"}),(0,n.jsx)("meta",{name:"description",content:"Pergolas par KANCOON aux Sables d'Olonne et en Vend\xe9e"}),(0,n.jsx)("link",{rel:"icon",href:"/FAVICON-transparent.png"}),(0,n.jsx)("script",{async:!0,defer:!0,"data-website-id":"128afe3d-c0f3-4471-a7e9-0ceba4174583",src:"https://stats.viking.click/umami.js"})]}),(0,n.jsx)(i.Z,{}),(0,n.jsxs)("main",{className:"pt-[95px] bg-dark-grey",children:[(0,n.jsx)(h,{}),(0,n.jsx)(y,{})]}),(0,n.jsx)(r.Z,{}),(0,n.jsx)(o.t,{})]})}},8849:function(e,t,s){"use strict";s.d(t,{Gr:function(){return l},HT:function(){return i},NT:function(){return r},b1:function(){return n},bW:function(){return a}});let n=[{image:"/assets/pergolas/installation/installed_pergola_1.jpg",legende:"Pergola Bioclimatique"},{image:"/assets/pergolas/installation/installed_pergola_2.jpg",legende:"Pergola Bioclimatique - Les Achards"},{image:"/assets/pergolas/installation/installed_pergola_3.jpg",legende:"Pergola Bioclimatique - Les Sables d'Olonne"},{image:"/assets/pergolas/installation/installed_pergola_4.jpg",legende:"Pergola Bioclimatique"},{image:"/assets/pergolas/installation/installed_pergola_5.jpg",legende:"Pergola Bioclimatique"},{image:"/assets/pergolas/installation/installed_pergola_7.jpg",legende:"Pergola Toile - Les Sables d'Olonne"},{image:"/assets/pergolas/installation/installed_pergola_8.jpg",legende:"Pergola Bioclimatique - St Jean de Monts"},{image:"/assets/pergolas/installation/installed_pergola_9.jpg",legende:"Pergola Toile - Les Sables d'Olonne"},{image:"/assets/pergolas/installation/installed_pergola_10.jpg",legende:"Pergola Bioclimatique - Les Sables d'Olonne"},{image:"/assets/pergolas/installation/installed_pergola_11.jpg",legende:"Pergola Bioclimatique - St Gilles Croix de Vie"},{image:"/assets/pergolas/installation/installed_pergola_12.jpg",legende:"Pergola Bioclimatique - La Roche Sur Yon"},{image:"/assets/pergolas/installation/installed_pergola_13.jpg",legende:"Pergola Bioclimatique - Les Sables d'Olonne"},{image:"/assets/pergolas/installation/installed_pergola_14.jpg",legende:"Pergola Bioclimatique - Soullans"},{image:"/assets/pergolas/installation/installed_pergola_15.jpg",legende:"Pergola Bioclimatique - Soullans"}],a=[{image:"assets/stores-int/installation/store_int1.jpg",legende:"Stores \xe0 Enroulement"},{image:"assets/stores-int/installation/store_int2.jpg",legende:"Stores Californiens"},{image:"assets/stores-int/installation/store_int3.jpg",legende:"Stores \xe0 Enroulement"},{image:"assets/stores-int/installation/store_int4.jpg",legende:"Stores Ombre et Lumi\xe8re"},{image:"assets/stores-int/installation/store_int5.jpg",legende:"Stores Duette"},{image:"assets/stores-int/installation/store_int6.jpg",legende:"Store Toiture de V\xe9randa"},{image:"assets/stores-int/installation/store_int7.jpg",legende:"Store Pliss\xe9"}],l=[{image:"assets/stores-ext/installation/store_ext1.jpg",legende:"Store banne - Les Sables d'Olonne - La Chaume"},{image:"assets/stores-ext/installation/store_ext2.jpg",legende:"Store banne - Olonne sur Mer"},{image:"assets/stores-ext/installation/store_ext3.jpg",legende:"Store banne professionnel - La Cotriade - Les Sables d'Olonne"},{image:"assets/stores-ext/installation/store_ext4.jpg",legende:"Store banne - Olonne sur Mer"},{image:"assets/stores-ext/installation/store_ext5.jpg",legende:"Store double pente - Le Bistrot de Lila - Les Sables d'Olonne"},{image:"assets/stores-ext/installation/store_ext6.jpg",legende:"Store ext\xe9rieur - Les Sables d'Olonne"}],r=[{image:"assets/parasols/installation/parasol1.jpg",legende:"Parasols professionnels et stores bannes pos\xe9s par Kancoon - Saint Gilles Croix de Vie"},{image:"assets/parasols/installation/parasol2.jpg",legende:"Pilours - Saint Gilles Croix de Vie"}],i=[{image:"/assets/terrasses/installation/terrasse1.jpg",legende:"Terrases composite - Ch\xe2teau d'Olonne"},{image:"/assets/terrasses/installation/terrasse2.jpg",legende:"Terrasse aux Sables d'Olonne"},{image:"/assets/terrasses/installation/terrasse3.jpg",legende:"Terrasse r\xe9alis\xe9e par KANCOON aux Sables d'Olonne - sp\xe9cialiste de la protection solaire : pergolas, stores, terrasses"}]},5941:function(e,t,s){"use strict";s.d(t,{Cz:function(){return r},H5:function(){return n},O0:function(){return l},s7:function(){return a}});let n={source:"https://www.youtube.com/embed/kuhz8VYtwF8?autoplay=1"},a={source:"https://www.youtube.com/embed/_6l9bFXVIBg?autoplay=1"},l={source:"https://www.youtube.com/embed/AztLYxlZUW4"},r={source:"https://www.youtube.com/embed/a_hSuy8W1XY?autoplay=1"}},8357:function(e,t,s){"use strict";s.d(t,{w_:function(){return o}});var n=s(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),r=function(){return(r=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]]);return s};function o(e){return function(t){return n.createElement(c,r({attr:r({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return n.createElement(t.tag,r({key:s},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var s,a=e.attr,l=e.size,o=e.title,c=i(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),n.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:s,style:r(r({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(a)}}},function(e){e.O(0,[584,609,802,481,404,852,173,774,888,179],function(){return e(e.s=8810)}),_N_E=e.O()}]);