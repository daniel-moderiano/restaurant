(()=>{"use strict";const t=function(t){const e=document.createElement("div"),n=document.createElement("section"),a=document.createElement("section"),d=document.createElement("h2"),o=document.createElement("h2"),c=document.createElement("div"),i=document.createElement("div"),s=document.createElement("ul");t.appendChild(e),e.appendChild(n),e.appendChild(a),n.appendChild(d),n.appendChild(c),n.appendChild(i),a.appendChild(o),a.appendChild(s),["Phone","Email","Address"].forEach((t=>{const e=document.createElement("li");e.classList.add("contact__list-item","contact__"+t.toLowerCase()),e.id=t.toLowerCase(),s.appendChild(e)})),d.textContent="Opening hours",o.textContent="Contact Us!",c.innerHTML="Monday to Saturday<br />12:30pm - 9:30pm",i.innerHTML="Sunday<br />Closed",document.querySelector(".contact__phone").textContent="08 8288 8828",document.querySelector(".contact__email").textContent="pizzatime@internode.com",document.querySelector(".contact__address").textContent="121 Central Street, New York, NY 10010, USA",e.classList.add("contact"),n.classList.add("contact__hours"),a.classList.add("contact__details"),d.classList.add("contact__title-hours"),o.classList.add("contact__title-details"),c.classList.add("contact__weekdays"),i.classList.add("contact__weekends"),s.classList.add("contact__details-list")};!function(){const t=document.querySelector("#content"),e=document.createElement("div"),n=document.createElement("header"),a=document.createElement("nav"),d=document.createElement("div"),o=["Home","Menu","Contact"],c=document.createElement("div"),i=document.createElement("footer"),s=document.createElement("p");t.appendChild(e),[n,a,c,i].forEach((t=>e.appendChild(t))),a.appendChild(d);for(let t=0;t<3;t++){const e=document.createElement("button");e.classList.add("nav__btn"),e.textContent=o[t],e.id=o[t].toLowerCase(),d.appendChild(e)}i.appendChild(s),n.textContent="Pizza Fugazzi",s.textContent="Copyright Pizza Fugazzi 2021",e.classList.add("grid"),n.classList.add("header"),a.classList.add("nav"),d.classList.add("nav__btn-group"),c.classList.add("main"),i.classList.add("footer"),s.classList.add("footer__copyright")}();const e={homeBtn:document.querySelector("#home"),menuBtn:document.querySelector("#menu"),contactBtn:document.querySelector("#contact"),content:document.querySelector("#content"),tabContent:document.querySelector(".main")};t(e.tabContent),e.homeBtn.addEventListener("click",(function(){if(e.tabContent.hasChildNodes()){for(;e.tabContent.firstChild;)e.tabContent.removeChild(e.tabContent.lastChild);!function(t){const e=document.createElement("section"),n=document.createElement("h2"),a=document.createElement("article"),d=document.createElement("aside"),o=document.createElement("img");t.appendChild(e),t.appendChild(d),e.appendChild(n),e.appendChild(a),d.appendChild(o),n.textContent="The best pizza in New York",a.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos mollitia facere, laudantium illo eligendi nemo earum nulla exercitationem magni quam obcaecati corporis iusto officia reprehenderit quia, itaque molestiae atque ipsam!",e.classList.add("introduction"),n.classList.add("introduction__title"),a.classList.add("introduction__text"),d.classList.add("image-container"),o.classList.add("image"),o.src="../src/pizza1.jpg",o.alt="Delicious pizza"}(e.tabContent)}})),e.menuBtn.addEventListener("click",(function(){if(e.tabContent.hasChildNodes()){for(;e.tabContent.firstChild;)e.tabContent.removeChild(e.tabContent.lastChild);!function(t){const e=document.createElement("section"),n=document.createElement("h2"),a=document.createElement("article"),d=document.createElement("aside"),o=document.createElement("img");t.appendChild(e),t.appendChild(d),e.appendChild(n),e.appendChild(a),d.appendChild(o),n.textContent="Browse our dishes",a.textContent="Lorem ipsum",e.classList.add("introduction"),n.classList.add("introduction__title"),a.classList.add("introduction__text"),d.classList.add("image-container"),o.classList.add("image"),o.src="../src/pizza.jpg",o.alt="Delicious pizza"}(e.tabContent)}})),e.contactBtn.addEventListener("click",(function(){if(e.tabContent.hasChildNodes()){for(;e.tabContent.firstChild;)e.tabContent.removeChild(e.tabContent.lastChild);t(e.tabContent)}}))})();