document.addEventListener("DOMContentLoaded",()=>{
 const sidebar=document.getElementById("sidebar"),overlay=document.getElementById("overlay");
 const main=document.querySelector("main");
 if(!sidebar||!main)return;
 const topbar=document.createElement("header");
 topbar.className="topbar";
 topbar.innerHTML='<button class="menu-button" id="openMenu" aria-label="Abrir menu">☰</button><div class="breadcrumb">UFT / Agronomia Digital / Estatística Experimental</div><span class="semester">2026/2</span>';
 main.parentNode.insertBefore(sidebar,main);
 main.parentNode.insertBefore(overlay,main);
 main.insertBefore(topbar,main.firstChild);
 main.classList.add("course-main");
 const close=document.getElementById("closeMenu"),open=document.getElementById("openMenu");
 const setMenu=o=>{sidebar.classList.toggle("open",o);overlay.classList.toggle("show",o)};
 open?.addEventListener("click",()=>setMenu(true));close?.addEventListener("click",()=>setMenu(false));overlay?.addEventListener("click",()=>setMenu(false));
 sidebar.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
 const page=location.pathname.split("/").pop()||"index.html";
 sidebar.querySelectorAll(".nav-link").forEach(a=>{const href=a.getAttribute("href");if(href===page)a.classList.add("active")});
});