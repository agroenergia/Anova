const COMPLEMENTOS = {
variabilidade: {
titulo:"Aprofundamento — Variabilidade e precisão",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Variabilidade total: de onde vem?</h2>
<p>Em um experimento agrícola, a diferença entre duas observações pode resultar de várias fontes. Uma forma útil de pensar é separar <strong>efeitos sistemáticos de interesse</strong>, fontes de variação que o delineamento consegue controlar e a parcela de variação que permanece no erro experimental.</p>
<div class="flow-box"><b>Variação observada</b><span>→</span><b>Tratamento</b><span>+</span><b>Ambiente</b><span>+</span><b>Erro residual</b></div>
<p>Se o solo apresenta um gradiente de fertilidade, por exemplo, bloquear a área pode fazer com que parte dessa heterogeneidade deixe de aparecer no erro residual. Isso aumenta a capacidade de detectar diferenças entre tratamentos.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Variância, desvio-padrão e erro-padrão</h2>
<p>A <strong>variância</strong> trabalha com desvios ao quadrado; o <strong>desvio-padrão</strong> retorna à unidade original; o <strong>erro-padrão</strong> descreve a incerteza associada a uma estimativa, como uma média.</p>
<div class="formula-box">s² = Σ(xᵢ − x̄)²/(n−1) &nbsp;&nbsp; | &nbsp;&nbsp; s = √s² &nbsp;&nbsp; | &nbsp;&nbsp; EP(x̄) = s/√n</div>
<p>Não confunda <strong>desvio-padrão</strong> com <strong>erro-padrão</strong>: aumentar n pode reduzir o erro-padrão da média sem necessariamente reduzir a variabilidade individual das parcelas.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Precisão experimental</h2>
<p>Um experimento preciso produz estimativas com menor incerteza. A precisão pode ser favorecida por maior número de repetições, unidades bem definidas, controle local, procedimentos padronizados e redução de fontes evitáveis de variação.</p>
<div class="warning-box"><strong>Cuidado:</strong> mais observações dentro da mesma parcela não substituem novas unidades experimentais independentes quando o objetivo é aumentar a repetição experimental.</div></div></div>`
},
planejamento: {
titulo:"Aprofundamento — Como desenhar um experimento",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Da pergunta à hipótese estatística</h2>
<p>Uma boa pergunta precisa ser convertida em uma comparação mensurável. Exemplo: <em>“A dose de nitrogênio modifica a produtividade do milho?”</em> A hipótese nula pode ser <strong>H₀: μ₁=μ₂=...=μₖ</strong>. A hipótese alternativa afirma que nem todas as médias são iguais.</p>
<p>Antes de coletar dados, defina qual diferença seria agronomicamente importante. Uma diferença pequena pode ser estatisticamente detectável em um experimento muito preciso, mas ter pouca utilidade prática.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Unidade experimental e tamanho amostral</h2>
<p>O número de plantas medidas não é necessariamente o número de repetições. Se o tratamento foi aplicado à parcela, a parcela é a unidade que precisa ser replicada.</p>
<table class="lesson-table"><thead><tr><th>Elemento</th><th>Pergunta</th></tr></thead><tbody><tr><td>Unidade experimental</td><td>Qual unidade recebe o tratamento?</td></tr><tr><td>Repetição</td><td>Quantas unidades independentes recebem cada tratamento?</td></tr><tr><td>Subamostra</td><td>Quantas observações são feitas dentro de cada unidade?</td></tr><tr><td>Resposta</td><td>Qual variável será usada para avaliar o efeito?</td></tr></tbody></table></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Aleatorização, controle e confundimento</h2>
<p>A aleatorização protege a comparação. O controle local aproveita informações conhecidas sobre a heterogeneidade. Já o confundimento ocorre quando duas fontes de variação ficam inseparáveis no desenho.</p>
<div class="example-box"><strong>Exemplo:</strong> se todas as parcelas com irrigação ficam na parte mais fértil da área e todas as parcelas sem irrigação ficam na parte menos fértil, fertilidade e irrigação ficam confundidas. A diferença observada não pode ser atribuída claramente a uma única causa.</div></div></div>`
},
delineamentos: {
titulo:"Aprofundamento — DIC, DBC e Quadrado Latino",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Comparação entre delineamentos</h2>
<table class="lesson-table"><thead><tr><th>Delineamento</th><th>Quando pensar nele?</th><th>Controle local</th></tr></thead><tbody><tr><td>DIC</td><td>Unidades relativamente homogêneas</td><td>Nenhum bloco estruturado</td></tr><tr><td>DBC</td><td>Uma fonte principal de heterogeneidade</td><td>Blocos</td></tr><tr><td>Quadrado Latino</td><td>Duas fontes direcionais de heterogeneidade</td><td>Linhas e colunas</td></tr></tbody></table>
<p>A escolha não é uma questão de preferência estética. Ela deve representar como as unidades estão organizadas e como o tratamento pode ser aleatorizado.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Modelo do DBC</h2>
<div class="formula-box">Yᵢⱼ = μ + τᵢ + βⱼ + εᵢⱼ</div>
<p><strong>μ</strong> é a média geral; <strong>τᵢ</strong> representa o efeito do tratamento; <strong>βⱼ</strong> o efeito do bloco; e <strong>εᵢⱼ</strong> o erro residual. O bloco não é um tratamento: ele é uma estrutura de controle local.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Erro e eficiência</h2>
<p>Se o bloco explica uma parte importante da heterogeneidade, a variação residual pode diminuir. Isso pode aumentar a relação entre sinal do tratamento e ruído residual e tornar a comparação mais informativa.</p></div></div>`
},
anova: {
titulo:"Aprofundamento — Construindo a ANOVA",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>A decomposição da variação</h2>
<div class="formula-box">SQ Total = SQ Tratamentos + SQ Erro</div>
<p>A ANOVA não “cria” diferenças. Ela organiza a variabilidade observada em componentes associados ao modelo. A pergunta é se a variação entre tratamentos é grande em relação à variação residual esperada.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Graus de liberdade e quadrados médios</h2>
<table class="lesson-table"><thead><tr><th>Fonte</th><th>GL</th><th>QM</th></tr></thead><tbody><tr><td>Tratamentos</td><td>k−1</td><td>SQTrat/(k−1)</td></tr><tr><td>Erro</td><td>N−k</td><td>SQE/(N−k)</td></tr><tr><td>Total</td><td>N−1</td><td>—</td></tr></tbody></table>
<p>O quadrado médio é uma estimativa de variância associada à fonte. A razão entre os quadrados médios de tratamento e erro produz a estatística F.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>O que o p-valor responde?</h2>
<p>O p-valor mede a compatibilidade dos dados com a hipótese nula sob o modelo e suas pressuposições. Ele não informa sozinho o tamanho ou a importância agronômica do efeito.</p>
<div class="warning-box"><strong>Não conclua:</strong> “p &lt; 0,05 significa que o tratamento é importante”. A interpretação precisa considerar magnitude, incerteza, contexto experimental e relevância agronômica.</div></div></div>`
},
pressupostos: {
titulo:"Aprofundamento — Diagnóstico de resíduos",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>O que é um bom gráfico de resíduos?</h2>
<p>Em um gráfico de resíduos versus valores ajustados, esperamos ausência de padrões sistemáticos. Um formato de funil sugere possível heterogeneidade de variâncias; uma curva pode indicar falta de linearidade ou estrutura inadequada.</p>
<div class="flow-box"><b>Dados</b><span>→</span><b>Modelo</b><span>→</span><b>Resíduos</b><span>→</span><b>Diagnóstico</b><span>→</span><b>Revisão</b></div></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Normalidade não é “os dados precisam parecer normais”</h2>
<p>Na ANOVA clássica, a suposição diz respeito principalmente aos erros do modelo. Por isso, analisar resíduos é mais informativo do que exigir que os dados brutos de cada tratamento tenham distribuição normal perfeita.</p>
<p>O gráfico Q-Q permite observar desvios sistemáticos da distribuição esperada. Testes formais devem ser interpretados considerando o tamanho da amostra e o restante do diagnóstico.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Independência começa no campo</h2>
<p>Nenhum teste estatístico consegue transformar unidades dependentes em independentes. Se parcelas vizinhas influenciam umas às outras, ou se há medições repetidas no tempo, a estrutura de dependência precisa ser incorporada ao modelo.</p></div></div>`
},
transformacao: {
titulo:"Aprofundamento — Escolhendo uma transformação",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Transformação como mudança de escala</h2>
<p>Transformar significa aplicar uma função à resposta antes do ajuste. Exemplos incluem <strong>ln(Y)</strong>, <strong>√Y</strong> e, em alguns contextos, transformações para proporções.</p>
<div class="comparison-grid"><div><span>LOG</span><b>ln(Y)</b><p>Útil para respostas positivas e assimétricas e relações multiplicativas.</p></div><div><span>RAIZ</span><b>√Y</b><p>Pode ser útil em algumas contagens ou respostas não negativas.</p></div></div></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Exemplo numérico</h2>
<p>Se uma resposta positiva varia aproximadamente de 10 a 1.000 e a dispersão cresce junto com a média, uma escala logarítmica pode reduzir a diferença de escala entre valores pequenos e grandes.</p>
<div class="formula-box">z = ln(Y) &nbsp;&nbsp; → &nbsp;&nbsp; modelo ajustado em z</div>
<p>Depois, a interpretação deve retornar à escala original quando necessário, explicando claramente como isso foi feito.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Transformar não é maquiar o resultado</h2>
<p>Uma transformação deve ser motivada pela estrutura dos dados ou pelo modelo. Escolher a transformação apenas depois de testar várias opções até obter significância aumenta o risco de conclusões espúrias.</p></div></div>`
},
contrastes: {
titulo:"Aprofundamento — Contrastes na prática",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Como construir um contraste</h2>
<p>Para quatro tratamentos A, B, C e D, o contraste que compara D com a média de A, B e C pode usar os coeficientes <strong>(−1, −1, −1, 3)</strong>. A soma é zero:</p>
<div class="formula-box">−1 −1 −1 + 3 = 0</div>
<p>O contraste estimado é <strong>L = −μA − μB − μC + 3μD</strong>. Dividindo por 3, obtemos a diferença entre μD e a média dos três primeiros tratamentos.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Ortogonalidade</h2>
<p>Dois contrastes com coeficientes <strong>c</strong> e <strong>d</strong> são ortogonais em um delineamento balanceado quando:</p>
<div class="formula-box">Σ cᵢdᵢ = 0</div>
<p>Exemplo: (1,−1,0,0) e (0,0,1,−1) são ortogonais porque o produto termo a termo soma zero.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Comparações múltiplas</h2>
<p>Se quatro médias forem comparadas todas contra todas, existem seis comparações par a par. O número de oportunidades para falso positivo cresce. Por isso, procedimentos como Tukey controlam o erro associado ao conjunto de comparações.</p></div></div>`
},
fatoriais: {
titulo:"Aprofundamento — Interação em experimentos fatoriais",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Quantas combinações existem?</h2>
<p>Se o fator A possui <strong>a</strong> níveis e o fator B possui <strong>b</strong> níveis, um fatorial completo possui <strong>a×b</strong> combinações.</p>
<div class="formula-box">3 níveis de cultivar × 4 doses = 12 combinações</div>
<p>Com r repetições por combinação, seriam 12r unidades experimentais em uma estrutura completamente replicada.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Como reconhecer interação?</h2>
<p>Imagine duas cultivares. A produtividade da cultivar 1 passa de 4 para 6 t ha⁻¹ com o aumento da dose, enquanto a cultivar 2 passa de 5 para 5,2. O efeito da dose não é o mesmo nas duas cultivares.</p>
<div class="warning-box"><strong>Regra prática:</strong> quando a interação é relevante, não interprete os efeitos principais como se fossem independentes da outra variável.</div></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Leitura de gráficos de interação</h2>
<p>Em um gráfico com dose no eixo X e produtividade no eixo Y, linhas aproximadamente paralelas sugerem efeitos semelhantes; linhas que se afastam, aproximam ou cruzam indicam que a resposta ao fator X depende do nível do outro fator.</p></div></div>`
},
parcelas: {
titulo:"Aprofundamento — A lógica das parcelas divididas",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Onde está a aleatorização?</h2>
<p>Em parcelas divididas existem pelo menos dois níveis de aleatorização. Primeiro, o fator da parcela principal é sorteado entre parcelas grandes. Depois, os níveis do fator de subparcela são sorteados dentro dessas parcelas.</p>
<div class="flow-box"><b>Bloco</b><span>→</span><b>Parcela principal A</b><span>→</span><b>Subparcelas B</b></div></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Por que um único erro é inadequado?</h2>
<p>As unidades que receberam A são maiores e foram submetidas a uma aleatorização diferente das subparcelas que receberam B. Portanto, a precisão para estimar A não é necessariamente igual à precisão para estimar B.</p>
<table class="lesson-table"><thead><tr><th>Fonte</th><th>Unidade associada</th></tr></thead><tbody><tr><td>A</td><td>Parcela principal</td></tr><tr><td>B</td><td>Subparcela</td></tr><tr><td>A×B</td><td>Estrutura de subparcela</td></tr></tbody></table></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Exemplo</h2>
<p>Se irrigação exige grandes faixas e cultivar é fácil de trocar dentro dessas faixas, irrigação pode ser A e cultivar B. O desenho estatístico deve refletir exatamente essa operação no campo.</p></div></div>`
},
regressao: {
titulo:"Aprofundamento — Regressão aplicada à Agronomia",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Interpretando os coeficientes</h2>
<div class="formula-box">ŷ = β₀ + β₁x</div>
<p>Se β₁ = 12, então, segundo o modelo, um aumento de uma unidade em X está associado a um aumento médio estimado de 12 unidades em Y. O significado das unidades depende da variável: kg ha⁻¹ de N, dias, °C etc.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Quando a resposta tem máximo?</h2>
<p>Em uma regressão quadrática:</p>
<div class="formula-box">ŷ = β₀ + β₁x + β₂x²</div>
<p>Se β₂ &lt; 0, a parábola tem concavidade para baixo e pode apresentar máximo em <strong>x* = −β₁/(2β₂)</strong>. O ponto calculado precisa estar dentro da região estudada e fazer sentido agronomicamente.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Não extrapole automaticamente</h2>
<p>Um modelo ajustado entre 0 e 180 kg ha⁻¹ de N não garante comportamento confiável em 300 kg ha⁻¹. A extrapolação ultrapassa a região onde os dados sustentam diretamente o ajuste.</p></div></div>`
},
conjunta: {
titulo:"Aprofundamento — Tratamento × ambiente",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Ambiente pode ser local, ano ou época</h2>
<p>Em ensaios agronômicos, ambiente pode representar combinações de local e ano, locais específicos, safras ou condições experimentais definidas. O ponto central é que as condições mudam e podem modificar a resposta dos tratamentos.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Modelo conceitual</h2>
<div class="formula-box">Y = μ + Tratamento + Ambiente + Tratamento×Ambiente + Erro</div>
<p>Se a interação tratamento×ambiente for relevante, a resposta média geral pode esconder comportamentos distintos. Nesse caso, gráficos por ambiente e análises de efeitos simples ajudam a compreender o padrão.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Estabilidade não significa mesma média</h2>
<p>Um tratamento pode ter média alta, mas variar muito entre ambientes. Outro pode ter média um pouco menor e responder de forma mais consistente. A análise conjunta permite estudar essa dimensão sem reduzir tudo a uma única média.</p></div></div>`
},
superficie: {
titulo:"Aprofundamento — Superfície de resposta",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Modelo de segunda ordem</h2>
<div class="formula-box">Y = β₀ + β₁X₁ + β₂X₂ + β₁₁X₁² + β₂₂X₂² + β₁₂X₁X₂ + ε</div>
<p>Os termos quadráticos permitem que a resposta apresente curvatura. O termo de interação mostra que o efeito de X₁ pode depender do nível de X₂.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Derivadas e ponto estacionário</h2>
<p>Para localizar um ponto estacionário, calculamos as derivadas parciais em relação aos fatores e igualamos a zero:</p>
<div class="formula-box">∂Y/∂X₁ = 0 &nbsp;&nbsp; e &nbsp;&nbsp; ∂Y/∂X₂ = 0</div>
<p>A solução precisa ser classificada como máximo, mínimo ou ponto de sela. Além disso, deve ser confrontada com a região experimental.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Curvas de nível</h2>
<p>As curvas de nível representam combinações de X₁ e X₂ que produzem valores semelhantes de Y. Elas podem ser mais úteis que uma superfície 3D para localizar visualmente regiões de interesse.</p></div></div>`
},
multivariada: {
titulo:"Aprofundamento — PCA e agrupamento",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Por que reduzir dimensionalidade?</h2>
<p>Quando muitas variáveis estão correlacionadas, o PCA pode resumir parte da informação em poucos componentes. Isso facilita visualização e exploração sem analisar cada variável isoladamente.</p>
<div class="flow-box"><b>Variáveis originais</b><span>→</span><b>PCA</b><span>→</span><b>Componentes</b><span>→</span><b>Visualização</b></div></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Autovalores, cargas e variância explicada</h2>
<p>Os autovalores estão associados à quantidade de variância representada pelos componentes. As <strong>cargas</strong> ajudam a interpretar quais variáveis contribuem para cada componente. Uma boa leitura deve combinar essas informações com o objetivo científico.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Distância e cluster</h2>
<p>O agrupamento depende de uma medida de distância e de um método de ligação ou particionamento. Antes de interpretar os grupos, verifique escala, padronização, sensibilidade ao método e estabilidade da solução.</p></div></div>`
},
computacional: {
titulo:"Aprofundamento — Fluxo completo em R e Python",
html:`
<div class="lesson-block"><div class="lesson-block-number">A</div><div><h2>Estrutura recomendada dos dados</h2>
<table class="lesson-table"><thead><tr><th>bloco</th><th>tratamento</th><th>dose</th><th>cultivar</th><th>produtividade</th></tr></thead><tbody><tr><td>1</td><td>T1</td><td>0</td><td>C1</td><td>3.800</td></tr><tr><td>1</td><td>T2</td><td>60</td><td>C1</td><td>4.450</td></tr><tr><td>2</td><td>T1</td><td>0</td><td>C1</td><td>3.920</td></tr></tbody></table>
<p>O formato “uma linha por unidade e uma coluna por variável” facilita filtros, gráficos, modelos e auditoria.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">B</div><div><h2>Fluxo computacional</h2>
<div class="steps-box"><div><b>1</b><span>Importar</span><small>CSV, XLSX ou banco</small></div><div><b>2</b><span>Validar</span><small>tipos, faltantes e unidades</small></div><div><b>3</b><span>Explorar</span><small>tabelas e gráficos</small></div><div><b>4</b><span>Modelar</span><small>modelo compatível</small></div><div><b>5</b><span>Diagnosticar</span><small>resíduos</small></div><div><b>6</b><span>Interpretar</span><small>efeito + incerteza</small></div></div></div>
<div class="lesson-block"><div class="lesson-block-number">C</div><div><h2>Exemplo em Python</h2>
<pre><code>import pandas as pd
import statsmodels.api as sm

dados = pd.read_csv("dados.csv")
X = sm.add_constant(dados["dose"])
modelo = sm.OLS(dados["produtividade"], X).fit()
print(modelo.summary())</code></pre>
<p>O código é apenas a etapa computacional. A validade da análise depende do delineamento, da unidade experimental, das pressuposições e da pergunta científica.</p></div></div>
<div class="lesson-block"><div class="lesson-block-number">D</div><div><h2>Reprodutibilidade</h2>
<p>Um projeto organizado deve conservar <strong>dados brutos → script → resultados → gráficos → relatório</strong>. Registre versões das bibliotecas e não sobrescreva o arquivo original dos dados.</p></div></div>`
}
}

const COURSE_PAGES=[
 ["aula1.html","01 · Fundamentos"],["aula2.html","02 · Estatística descritiva"],
 ["aula3.html","03 · Variabilidade"],["aula4.html","04 · Planejamento"],
 ["aula5.html","05 · Delineamentos"],["aula6.html","06 · ANOVA"],
 ["aula7.html","07 · Pressuposições"],["aula8.html","08 · Transformação"],
 ["aula9.html","09 · Contrastes"],["aula10.html","10 · Fatoriais"],
 ["aula11.html","11 · Parcelas divididas"],["aula12.html","12 · Regressão"],
 ["aula13.html","13 · Análise conjunta"],["aula14.html","14 · Superfície"],
 ["aula15.html","15 · Multivariada"],["aula16.html","16 · Computacional"]
];

document.addEventListener("DOMContentLoaded",()=>{
 const id=document.body.dataset.lesson;
 const root=document.getElementById("lesson-content");
 if(!root) return;

 if(COMPLEMENTOS[id]){
   const meta={"variabilidade":["03","Variabilidade, Erro Experimental e Precisão","como medir a dispersão dos dados e compreender precisão, erro experimental e repetição."],"planejamento":["04","Planejamento Experimental","como transformar uma pergunta agronômica em um experimento bem estruturado."],"delineamentos":["05","Delineamentos Experimentais","como escolher e interpretar DIC, DBC e Quadrado Latino."],"anova":["06","Análise de Variância — ANOVA","como decompor a variabilidade e testar efeitos de tratamentos."],"pressupostos":["07","Pressuposições da ANOVA","como diagnosticar resíduos, normalidade, variâncias e independência."],"transformacao":["08","Transformação de Dados","quando e por que transformar uma variável resposta."],"contrastes":["09","Contrastes e Comparações","como formular comparações planejadas e contrastes ortogonais."],"fatoriais":["10","Experimentos Fatoriais","como estudar fatores simultaneamente e interpretar interações."],"parcelas":["11","Experimentos em Parcelas Divididas","como trabalhar com duas escalas de aleatorização e erros experimentais."],"regressao":["12","Regressão Linear","como modelar relações entre variáveis e interpretar coeficientes."],"conjunta":["13","Análise Conjunta de Experimentos","como estudar tratamentos em diferentes ambientes."],"superficie":["14","Superfície de Resposta","como modelar e localizar regiões de resposta ótima."],"multivariada":["15","Introdução à Análise Multivariada","como analisar várias variáveis simultaneamente."],"computacional":["16","Análise Computacional com R e Python","como organizar dados, ajustar modelos, diagnosticar e reproduzir análises."]}[id];
   const index=COURSE_PAGES.findIndex(p=>p[0]===location.pathname.split("/").pop());
   const prev=index>0?COURSE_PAGES[index-1]:null;
   const next=index<COURSE_PAGES.length-1?COURSE_PAGES[index+1]:null;

   const exercises={
    variabilidade:["Explique a diferença entre variabilidade natural e erro experimental.","Por que aumentar subamostras não é o mesmo que aumentar repetições?","Mostre como o erro-padrão da média varia quando n aumenta."],
    planejamento:["Identifique a unidade experimental em um ensaio de doses de N.","Monte uma hipótese nula para quatro tratamentos.","Explique um exemplo de confundimento no campo."],
    delineamentos:["Quando usar DIC e quando usar DBC?","Escreva o modelo do DBC e identifique seus termos.","Explique como o bloqueamento pode reduzir o erro residual."],
    anova:["Explique SQ, GL e QM.","O que representa a estatística F?","Por que significância estatística não é sinônimo de importância agronômica?"],
    pressupostos:["Como interpretar um gráfico de resíduos versus ajustados?","Por que devemos analisar resíduos?","O que pode acontecer quando existe dependência entre observações?"],
    transformacao:["Dê um exemplo em que logaritmo possa ser útil.","Qual é a finalidade de transformar a resposta?","Por que não devemos escolher uma transformação apenas para obter p<0,05?"],
    contrastes:["Construa um contraste para comparar um tratamento com a média dos demais.","Verifique a ortogonalidade de dois contrastes.","Por que muitas comparações podem aumentar falsos positivos?"],
    fatoriais:["Quantas combinações existem em um fatorial 3×4?","Explique interação entre dois fatores.","Como linhas de um gráfico de interação ajudam na interpretação?"],
    parcelas:["Onde ocorre a primeira e a segunda aleatorização?","Por que existem erros associados a diferentes níveis?","Dê um exemplo agronômico de parcelas divididas."],
    regressao:["Interprete β1 em uma regressão linear.","Calcule o ponto de máximo de uma função quadrática dada.","Por que extrapolação pode ser perigosa?"],
    conjunta:["O que representa tratamento×ambiente?","Por que uma média geral pode esconder diferenças entre ambientes?","Diferencie produtividade média e estabilidade."],
    superficie:["Identifique os termos de primeira e segunda ordem.","Como localizar um ponto estacionário?","Qual a utilidade das curvas de nível?"],
    multivariada:["Para que serve o PCA?","O que representam as cargas dos componentes?","Por que padronização pode ser importante antes de uma análise multivariada?"],
    computacional:["Quais colunas mínimas você criaria para um ensaio de doses?","Descreva um fluxo reprodutível de análise.","Por que o código não substitui a definição correta da unidade experimental?"]
   }[id];

   document.title=`Aula ${meta[0]} — ${meta[1]} | Estatística Experimental | UFT`;
   root.innerHTML=`
   <section class="page-section" style="display:block;max-width:1180px;margin:auto">
    <div class="lesson-header">
      <span class="kicker">AULA ${meta[0]} · ESTATÍSTICA EXPERIMENTAL</span>
      <h1>${meta[1]}</h1><p>${meta[2]}</p>
    </div>
    <div class="content-grid">
      <article class="content-card"><span>🎯 OBJETIVOS</span><h2>Ao final desta aula</h2>
      <ul><li>Compreender os conceitos fundamentais do tema.</li><li>Relacionar teoria estatística e planejamento experimental.</li><li>Aplicar o conceito a situações agronômicas.</li><li>Interpretar resultados sem separar estatística do delineamento.</li></ul></article>
      <article class="content-card"><span>🧭 IDEIA CENTRAL</span><h2>Como pensar</h2>
      <p>${COMPLEMENTOS[id].titulo}</p><p><strong>Regra de ouro:</strong> a análise deve respeitar a forma como os dados foram produzidos.</p></article>
    </div>
    <div class="section-heading"><div><span class="kicker">CONTEÚDO DA AULA</span><h2>Teoria e aplicação</h2></div></div>
    ${COMPLEMENTOS[id].html}
    <article class="content-card exercise-card"><span>📝 FIXAÇÃO</span><h2>Exercícios</h2><ol>${exercises.map(x=>`<li>${x}</li>`).join("")}</ol></article>
    <div class="lesson-nav" aria-label="Navegação entre aulas">
      <a href="${prev?prev[0]:"index.html"}">${prev?"← "+prev[1]:"← Página inicial"}</a>
      <a href="index.html">☰ Menu do curso</a>
      <a href="${next?next[0]:"index.html"}">${next?next[1]+" →":"Voltar ao início →"}</a>
    </div>
   </section>`;
   if(window.MathJax?.typesetPromise) window.MathJax.typesetPromise([root]);
   return;
 }

 // Aulas 1 e 2 continuam usando o conteúdo original.
 const aula=typeof AULAS!=="undefined"?AULAS.find(a=>a.id===id):null;
 if(!aula){root.innerHTML='<div class="content-card"><h2>Aula não encontrada</h2></div>';return;}
 root.innerHTML=`<section class="page-section" style="display:block;max-width:1180px;margin:auto"><div class="lesson-header"><span class="kicker">AULA</span><h1>${aula.titulo}</h1><p>${aula.subtitulo}</p></div>${aula.blocos.map((b,i)=>`<article class="lesson-block"><div class="lesson-block-number">${i+1}</div><div><h2>${b[0]}</h2>${b[1]}</div></article>`).join("")}</section>`;
});