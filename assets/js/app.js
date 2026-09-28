const sidebar=document.getElementById("sidebar"),overlay=document.getElementById("overlay"),openMenu=document.getElementById("openMenu"),closeMenu=document.getElementById("closeMenu");
function setMenu(open){sidebar.classList.toggle("open",open);overlay.classList.toggle("show",open)}
openMenu?.addEventListener("click",()=>setMenu(true));closeMenu?.addEventListener("click",()=>setMenu(false));overlay?.addEventListener("click",()=>setMenu(false));

const app=document.getElementById("lesson-app");
function renderAulas(){
 if(!app||typeof AULAS==="undefined") return;
 app.innerHTML=AULAS.map(a=>`<section id="${a.id}" class="page-section">
   <div class="lesson-header"><span class="kicker">AULA ${a.modulo}</span><h1>${a.titulo}</h1><p>${a.subtitulo}</p></div>
   <div class="content-grid">
     <article class="content-card"><span>🎯 OBJETIVOS</span><h2>Ao final desta aula</h2><ul>${a.objetivos.map(x=>`<li>${x}</li>`).join("")}</ul></article>
     <article class="content-card"><span>🧭 RACIOCÍNIO</span><h2>Como pensar</h2><p>Comece pela pergunta experimental, identifique a unidade que recebe o tratamento e só então escolha o modelo estatístico.</p><p><strong>Regra de ouro:</strong> o método de análise deve representar o planejamento e a forma como os dados foram gerados.</p></article>
   </div>
   <div class="lesson-body">${a.blocos.map((b,i)=>`<article class="lesson-block"><div class="lesson-block-number">${String(i+1).padStart(2,"0")}</div><div><h2>${b[0]}</h2>${b[1]}</div></article>`).join("")}</div>
   <article class="content-card exercise-card"><span>📝 FIXAÇÃO</span><h2>Exercícios</h2><ol>${a.exercicios.map(x=>`<li>${x}</li>`).join("")}</ol></article>
   <div class="lesson-nav"><a href="#inicio">← Trilha</a><a href="#inicio">Voltar ao início ↑</a></div>
 </section>`).join("");
}
renderAulas();

// Garante que a Aula 2 também seja encontrada mesmo após carregamento dinâmico.
if (!document.getElementById("estatistica-descritiva")) console.error("Aula 2 não foi renderizada.");

const sections=[...document.querySelectorAll(".page-section")], links=[...document.querySelectorAll("[data-section]")];
function showSection(id){
 const target=document.getElementById(id)||document.getElementById("inicio");
 sections.forEach(s=>s.classList.toggle("active-section",s===target));
 links.forEach(l=>l.classList.toggle("active",l.dataset.section===target.id));
 setMenu(false); window.scrollTo({top:0,behavior:"smooth"});
 if(window.MathJax?.typesetPromise) window.MathJax.typesetPromise([target]);
}
function route(){showSection(location.hash.replace("#","")||"inicio")}
window.addEventListener("hashchange",route);
links.forEach(link=>link.addEventListener("click",e=>{const id=link.dataset.section;if(id){e.preventDefault();history.pushState(null,"","#"+id);showSection(id)}}));
route();
document.querySelectorAll(".nav-group-title").forEach(btn=>btn.addEventListener("click",()=>btn.parentElement.classList.toggle("expanded")));
// Mantém Fundamentos aberto para que a Aula 2 fique visível no menu.
document.querySelector(".nav-group")?.classList.add("expanded");