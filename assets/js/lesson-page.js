document.addEventListener("DOMContentLoaded",()=>{
const id=document.body.dataset.lesson;
const aula=(typeof AULAS!=="undefined")?AULAS.find(a=>a.id===id):null;
const root=document.getElementById("lesson-content");
if(!aula){root.innerHTML='<div class="content-card"><h2>Aula não encontrada</h2><p>O conteúdo desta aula ainda não foi cadastrado.</p></div>';return;}
document.title=aula.titulo+" | Estatística Experimental | UFT";
root.innerHTML=`
<section class="page-section" style="display:block;max-width:1180px;margin:auto">
<div class="lesson-header"><span class="kicker">AULA ${aula.modulo}</span><h1>${aula.titulo}</h1><p>${aula.subtitulo}</p></div>
<div class="content-grid">
<article class="content-card"><span>🎯 OBJETIVOS</span><h2>Ao final desta aula</h2><ul>${aula.objetivos.map(x=>`<li>${x}</li>`).join("")}</ul></article>
<article class="content-card"><span>🧭 IDEIA CENTRAL</span><h2>Como pensar</h2><p>Comece pela pergunta experimental, identifique a unidade que recebe o tratamento e só então escolha o modelo estatístico.</p><p><strong>Regra de ouro:</strong> o método de análise deve representar o planejamento e a forma como os dados foram gerados.</p></article>
</div>
<div class="lesson-body">${aula.blocos.map((b,i)=>`<article class="lesson-block"><div class="lesson-block-number">${String(i+1).padStart(2,"0")}</div><div><h2>${b[0]}</h2>${b[1]}</div></article>`).join("")}</div>
<article class="content-card exercise-card"><span>📝 FIXAÇÃO</span><h2>Exercícios</h2><ol>${aula.exercicios.map(x=>`<li>${x}</li>`).join("")}</ol></article>
<div class="lesson-nav"><a href="index.html">← Página inicial</a><a href="index.html#inicio">Trilha completa ↑</a></div>
</section>`;
if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([root]);
});