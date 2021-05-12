(()=>{"use strict";const e=function(e){const t=document.querySelector(".main"),n=document.createElement("section"),a=document.createElement("h1");e.appendChild(n),n.appendChild(a),a.textContent="Pizza Fugazzi",t.classList.add("main--home"),n.classList.add("introduction"),a.classList.add("introduction__title")};!function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("header"),a=document.createElement("nav"),o=document.createElement("div"),d=["Home","Menu","Contact"],c=document.createElement("div"),i=document.createElement("footer"),s=document.createElement("p");e.appendChild(t),[n,a,c,i].forEach((e=>t.appendChild(e))),a.appendChild(o);for(let e=0;e<3;e++){const t=document.createElement("button");t.classList.add("nav__btn"),t.textContent=d[e],t.id=d[e].toLowerCase(),o.appendChild(t)}i.appendChild(s),s.textContent="Copyright Pizza Fugazzi 2021",t.classList.add("grid"),n.classList.add("header"),a.classList.add("nav"),o.classList.add("nav__btn-group"),c.classList.add("main"),i.classList.add("footer"),s.classList.add("footer__copyright")}();const t={homeBtn:document.querySelector("#home"),menuBtn:document.querySelector("#menu"),contactBtn:document.querySelector("#contact"),content:document.querySelector("#content"),tabContent:document.querySelector(".main")};e(t.tabContent),t.homeBtn.addEventListener("click",(function(){if(t.tabContent.hasChildNodes()){for(;t.tabContent.firstChild;)t.tabContent.removeChild(t.tabContent.lastChild);e(t.tabContent)}})),t.menuBtn.addEventListener("click",(function(){if(t.tabContent.hasChildNodes()){for(;t.tabContent.firstChild;)t.tabContent.removeChild(t.tabContent.lastChild);!function(e){const t=document.querySelector(".main"),n=document.createElement("section"),a=document.createElement("h2");document.createElement("div"),document.createElement("h3"),document.createElement("div"),e.appendChild(n);const o=[{menuEntry:"Margherita",description:"Fresh tomato, bocconcini, mozzarella, garlic & basil",price:"Large $25   Small $20"},{menuEntry:"Pepperoni",description:"Fresh tomato, cheese and pepperoni",price:"Large $26   Small $21"},{menuEntry:"Seafood",description:"Tomato, cheese. marinated prawns, squid, anchover, mussels, fish & parsley",price:"Large $25   Small $20"},{menuEntry:"Hawaiian",description:"Ham, cheese, and tomato with fresh pineapple",price:"Large $25   Small $20"}];for(let e=0;e<4;e++){let t=document.createElement("div"),a=document.createElement("h3"),d=document.createElement("div"),c=document.createElement("div");t.classList.add("menu__dish","menu__dish--"+o[e].menuEntry.toLowerCase()),a.classList.add("menu__name","menu__name--"+o[e].menuEntry.toLowerCase()),d.classList.add("menu__description","menu__description--"+o[e].menuEntry.toLowerCase()),c.classList.add("menu__price","menu__price--"+o[e].menuEntry.toLowerCase()),d.textContent=o[e].description,a.textContent=o[e].menuEntry,c.textContent=o[e].price,n.appendChild(t),t.appendChild(a),t.appendChild(d),t.appendChild(c)}a.textContent="Menu",t.classList.remove("main--home"),n.classList.add("menu"),a.classList.add("menu__title")}(t.tabContent)}})),t.contactBtn.addEventListener("click",(function(){if(t.tabContent.hasChildNodes()){for(;t.tabContent.firstChild;)t.tabContent.removeChild(t.tabContent.lastChild);!function(e){const t=document.querySelector(".main"),n=document.createElement("div"),a=document.createElement("section"),o=document.createElement("section"),d=document.createElement("h2"),c=document.createElement("h2"),i=document.createElement("div"),s=document.createElement("div"),r=document.createElement("ul");e.appendChild(n),n.appendChild(a),n.appendChild(o),a.appendChild(d),a.appendChild(i),a.appendChild(s),o.appendChild(c),o.appendChild(r),["Phone","Email","Address"].forEach((e=>{const t=document.createElement("li");t.classList.add("contact__list-item","contact__"+e.toLowerCase()),t.id=e.toLowerCase(),r.appendChild(t)})),d.textContent="Opening hours",c.textContent="Contact Us!",i.innerHTML="Monday to Saturday<br>12:30pm - 9:30pm",s.innerHTML="Sunday<br>Closed",document.querySelector(".contact__phone").textContent="08 8288 8828",document.querySelector(".contact__email").textContent="pizzatime@internode.com",document.querySelector(".contact__address").textContent="121 Central Street, New York, NY 10010, USA",t.classList.remove("main--home"),n.classList.add("contact"),a.classList.add("contact__hours"),o.classList.add("contact__details"),d.classList.add("contact__title-hours"),c.classList.add("contact__title-details"),i.classList.add("contact__weekdays"),s.classList.add("contact__weekends"),r.classList.add("contact__details-list")}(t.tabContent)}}))})();