document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <div class="brand-mark">Σ</div>
        <div><strong>Estatística<br>Experimental</strong><span>UFT • 2026/2</span></div>
      </div>
      <button class="close-menu" id="closeMenu" aria-label="Fechar menu">×</button>
      <nav class="nav" aria-label="Navegação do curso">
        <a class="nav-link" href="index.html">⌂ <span>Início</span></a>
        <a class="nav-link" href="aula1.html">📘 <span>01 · Fundamentos</span></a>
        <a class="nav-link" href="aula2.html">📊 <span>02 · Estatística descritiva</span></a>
        <a class="nav-link" href="aula3.html">〰 <span>03 · Variabilidade</span></a>
        <a class="nav-link" href="aula4.html">🧪 <span>04 · Planejamento</span></a>
        <a class="nav-link" href="aula5.html">🌱 <span>05 · Delineamentos</span></a>
        <a class="nav-link" href="aula6.html">📊 <span>06 · ANOVA</span></a>
        <a class="nav-link" href="aula7.html">🔬 <span>07 · Pressuposições</span></a>
        <a class="nav-link" href="aula8.html">↔ <span>08 · Transformação</span></a>
        <a class="nav-link" href="aula9.html">⚖️ <span>09 · Contrastes</span></a>
        <a class="nav-link" href="aula10.html">🧩 <span>10 · Fatoriais</span></a>
        <a class="nav-link" href="aula11.html">🌾 <span>11 · Parcelas divididas</span></a>
        <a class="nav-link" href="aula12.html">📈 <span>12 · Regressão</span></a>
        <a class="nav-link" href="aula13.html">🌐 <span>13 · Análise conjunta</span></a>
        <a class="nav-link" href="aula14.html">📐 <span>14 · Superfície</span></a>
        <a class="nav-link" href="aula15.html">🧬 <span>15 · Multivariada</span></a>
        <a class="nav-link" href="aula16.html">💻 <span>16 · Computacional</span></a>
      </nav>
      <div class="sidebar-footer">
        <span>Mestrado em Agronomia Digital</span>
        <span>Universidade Federal do Tocantins</span>
      </div>
    </aside>
    <div class="overlay" id="overlay"></div>`;

  document.body.insertAdjacentHTML("afterbegin", navHTML);

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const main = document.querySelector("main");
  if (!sidebar || !main) return;

  const topbar = document.createElement("header");
  topbar.className = "topbar";
  topbar.innerHTML = `
    <button class="menu-button" id="openMenu" aria-label="Abrir menu">☰</button>
    <div class="breadcrumb">UFT / Agronomia Digital / Estatística Experimental</div>
    <span class="semester">2026/2</span>`;
  main.insertBefore(topbar, main.firstChild);
  main.classList.add("course-main");

  const page = location.pathname.split("/").pop() || "index.html";
  sidebar.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === page) link.classList.add("active");
  });

  const pages = [
    ["aula1.html", "Aula 1: Fundamentos da Estatística Experimental"],
    ["aula2.html", "Aula 2: Estatística descritiva"],
    ["aula3.html", "Aula 3: Variabilidade"],
    ["aula4.html", "Aula 4: Planejamento Experimental"],
    ["aula5.html", "Aula 5: Delineamentos Experimentais"],
    ["aula6.html", "Aula 6: Análise de Variância — ANOVA"],
    ["aula7.html", "Aula 7: Pressuposições da ANOVA"],
    ["aula8.html", "Aula 8: Transformação de Dados"],
    ["aula9.html", "Aula 9: Contrastes"],
    ["aula10.html", "Aula 10: Experimentos Fatoriais"],
    ["aula11.html", "Aula 11: Parcelas Divididas"],
    ["aula12.html", "Aula 12: Regressão Linear"],
    ["aula13.html", "Aula 13: Análise Conjunta"],
    ["aula14.html", "Aula 14: Superfície de Resposta"],
    ["aula15.html", "Aula 15: Análise Multivariada"],
    ["aula16.html", "Aula 16: Análise Computacional com R e Python"]
  ];

  const currentIndex = pages.findIndex(p => p[0] === page);
  if (currentIndex >= 0) {
    const previous = currentIndex > 0 ? pages[currentIndex - 1] : null;
    const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;
    let lessonNav = main.querySelector(".lesson-nav");

    if (!lessonNav) {
      lessonNav = document.createElement("div");
      lessonNav.className = "lesson-nav";
      const section = main.querySelector("section");
      if (section) section.appendChild(lessonNav);
      else main.appendChild(lessonNav);
    }

    lessonNav.innerHTML = `
      <a class="lesson-prev" href="${previous ? previous[0] : "index.html"}">${previous ? "← " + previous[1] : "← Página inicial"}</a>
      <a class="lesson-home" href="index.html">☰ Menu do curso</a>
      <a class="lesson-next" href="${next ? next[0] : "index.html"}">${next ? next[1] + " →" : "Voltar ao início →"}</a>`;
  }

  const close = document.getElementById("closeMenu");
  const open = document.getElementById("openMenu");
  const setMenu = openState => {
    sidebar.classList.toggle("open", openState);
    overlay?.classList.toggle("show", openState);
  };

  open?.addEventListener("click", () => setMenu(true));
  close?.addEventListener("click", () => setMenu(false));
  overlay?.addEventListener("click", () => setMenu(false));
  sidebar.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
});