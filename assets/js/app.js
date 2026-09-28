const sidebar=document.getElementById("sidebar"),overlay=document.getElementById("overlay"),openMenu=document.getElementById("openMenu"),closeMenu=document.getElementById("closeMenu");function setMenu(open){sidebar.classList.toggle("open",open);overlay.classList.toggle("show",open)}openMenu?.addEventListener("click",()=>setMenu(true));closeMenu?.addEventListener("click",()=>setMenu(false));overlay?.addEventListener("click",()=>setMenu(false));

const sections=[...document.querySelectorAll(".page-section")];const links=[...document.querySelectorAll("[data-section]")];
function showSection(id){const target=document.getElementById(id)||document.getElementById("inicio");sections.forEach(s=>s.classList.toggle("active-section",s===target));links.forEach(l=>l.classList.toggle("active",l.dataset.section===target.id));setMenu(false);window.scrollTo({top:0,behavior:"smooth"});}
function route(){const id=location.hash.replace("#","")||"inicio";showSection(id)}
window.addEventListener("hashchange",route);links.forEach(link=>link.addEventListener("click",e=>{const id=link.dataset.section;if(id){e.preventDefault();history.pushState(null,"","#"+id);showSection(id)}}));route();

document.querySelectorAll(".nav-group-title").forEach(btn=>btn.addEventListener("click",()=>btn.parentElement.classList.toggle("expanded")));