const AULAS = [
{
 id:"conceitos", modulo:"01 · FUNDAMENTOS", titulo:"Fundamentos da Estatística Experimental",
 subtitulo:"Da pergunta científica aos dados que podem ser analisados.",
 objetivos:["Distinguir população, amostra, unidade experimental e unidade observacional.","Identificar variáveis qualitativas e quantitativas e suas escalas.","Entender tratamento, fator, nível, repetição, erro e efeito experimental.","Relacionar estatística descritiva, inferência e experimentação agronômica."],
 blocos:[
 ["1. O que é Estatística Experimental", "<p>Estatística é o conjunto de métodos usados para obter informação a partir de dados. Na experimentação agronômica, ela permite separar diferenças sistemáticas produzidas pelos tratamentos da variação natural e do erro experimental.</p><p>A pergunta central não é apenas <strong>“qual foi a média?”</strong>, mas <strong>“a diferença observada é compatível com um efeito real do tratamento ou pode ser explicada pela variabilidade?”</strong></p>"],
 ["2. População, amostra e unidade experimental", "<p><strong>População</strong> é o conjunto sobre o qual queremos concluir. <strong>Amostra</strong> é a parte efetivamente observada. A <strong>unidade experimental</strong> é a menor unidade que recebe independentemente um tratamento.</p><p>Exemplo: em um experimento com quatro doses de N aplicadas a parcelas de milho, cada parcela que recebe uma dose é uma unidade experimental. Medir dez plantas dentro da parcela não transforma automaticamente essas dez plantas em dez repetições.</p>"],
 ["3. Variáveis e dados", "<p>Variáveis <strong>qualitativas</strong> representam categorias, como cultivar ou sistema de preparo. Variáveis <strong>quantitativas</strong> assumem valores numéricos, como produtividade (kg ha⁻¹), altura (cm), teor de N (%) e massa de grãos (g).</p><p>Uma variável resposta é aquilo que medimos para avaliar o efeito do tratamento. As variáveis explicativas são fatores ou covariáveis usados para explicar a resposta.</p>"],
 ["4. Efeito, erro e variabilidade", "<p>Uma observação pode ser pensada, de forma simplificada, como <strong>Y = efeito sistemático + erro aleatório</strong>. O objetivo do planejamento é aumentar a capacidade de detectar o primeiro e controlar o segundo.</p><p>A variabilidade pode vir do solo, clima, material biológico, manejo, instrumentos e diferenças não controladas entre unidades experimentais.</p>"],
 ["5. Exemplo resolvido", "<p>Suponha quatro doses de nitrogênio: 0, 60, 120 e 180 kg ha⁻¹, com cinco parcelas por dose. A dose é o fator; as quatro doses são seus níveis; a produtividade é a variável resposta; as cinco parcelas são repetições.</p><p>Se as médias forem 3.800, 4.500, 5.100 e 4.900 kg ha⁻¹, existe um padrão aparente, mas ainda não podemos afirmar que as doses diferem estatisticamente. Precisamos considerar a variabilidade dentro das doses e o modelo experimental.</p>"],
 ["6. Síntese", "<p>O raciocínio experimental começa pela pergunta, define a unidade experimental, escolhe os tratamentos e planeja a coleta. Só depois a análise estatística é escolhida. Um bom teste estatístico não corrige um experimento mal planejado.</p>"]
 ],
 exercicios:["Identifique a unidade experimental em um experimento com cinco cultivares distribuídas em 20 parcelas.","Classifique como qualitativa ou quantitativa: cultivar, produtividade, teor de água, sistema de irrigação.","Explique por que dez plantas medidas dentro de uma única parcela não são necessariamente dez repetições."]
},
{
 id:"estatistica-descritiva", modulo:"02 · FUNDAMENTOS", titulo:"Estatística Descritiva e Variabilidade", subtitulo:"Como organizar e resumir dados antes de fazer inferência.",
 objetivos:["Calcular e interpretar média, mediana, amplitude, variância e desvio-padrão.","Compreender quartis e coeficiente de variação.","Usar tabelas e gráficos para detectar padrões e problemas nos dados."],
 blocos:[
 ["1. Medidas de tendência central","<p>A <strong>média aritmética</strong> é \(\bar y=\frac{1}{n}\sum y_i\). Ela representa o centro dos dados, mas pode ser influenciada por valores extremos. A <strong>mediana</strong> é o valor central após ordenar as observações.</p>"],
 ["2. Medidas de dispersão","<p>A amplitude é \(máximo-mínimo\). A variância amostral é \(s^2=\frac{\sum(y_i-\bar y)^2}{n-1}\). O desvio-padrão é \(s=\sqrt{s^2}\). Quanto maior o desvio-padrão, maior a dispersão dos valores em torno da média.</p>"],
 ["3. Coeficiente de variação","<p>O <strong>CV</strong> é \(CV=100\times s/\bar y\). Ele expressa a dispersão como porcentagem da média e é muito usado em experimentação agrícola para comparar a precisão relativa de experimentos ou variáveis.</p><p>Exemplo: média de 5.000 kg ha⁻¹ e desvio-padrão de 250 kg ha⁻¹ dão CV = 5%. Não existe um único limite universal de CV para todas as culturas, variáveis e condições; a interpretação depende do contexto experimental.</p>"],
 ["4. Visualização","<p>Histograma ajuda a observar a distribuição; boxplot evidencia mediana, quartis e possíveis extremos; gráfico de dispersão mostra associação entre duas variáveis; gráfico de resíduos será essencial nas aulas de modelos.</p>"],
 ["5. Exemplo","<p>Dados de produtividade: 4.200, 4.400, 4.500, 4.700 e 4.200 kg ha⁻¹. A média é 4.400 kg ha⁻¹. O desvio-padrão resume o quanto as parcelas se afastam desse valor. Antes de comparar tratamentos, examine também os dados individualmente: erros de digitação podem parecer “outliers”.</p>"]
 ],
 exercicios:["Calcule média e mediana de 10, 12, 13, 15 e 20.","Explique o que significa CV = 8%.","Escolha um gráfico adequado para comparar a distribuição de produtividade entre quatro tratamentos."]
},
{
 id:"variabilidade", modulo:"02 · FUNDAMENTOS", titulo:"Variabilidade, Erro Experimental e Precisão", subtitulo:"Por que duas parcelas tratadas da mesma forma não produzem exatamente o mesmo resultado.",
 objetivos:["Separar variabilidade natural de erro experimental.","Diferenciar precisão de exatidão.","Compreender repetição e erro-padrão da média."],
 blocos:[
 ["1. Fontes de variação","<p>Mesmo sob o mesmo tratamento, parcelas podem diferir por fertilidade, umidade, posição, pragas, histórico de manejo e variações microambientais. A experimentação procura reduzir fontes controláveis e representar as demais no erro.</p>"],
 ["2. Precisão e exatidão","<p><strong>Precisão</strong> descreve a proximidade entre resultados repetidos. <strong>Exatidão</strong> relaciona-se à proximidade de um valor de referência. Um experimento pode ser muito preciso e ainda estar sistematicamente enviesado.</p>"],
 ["3. Erro-padrão","<p>Para uma média baseada em observações independentes com desvio-padrão s, o erro-padrão é \(EP=s/\sqrt n\). Aumentar o número de repetições tende a reduzir a incerteza da média, desde que as unidades sejam realmente independentes.</p>"],
 ["4. Repetição não é medição repetida","<p>Repetição significa aplicar independentemente o tratamento a várias unidades experimentais. Medições repetidas na mesma unidade podem aumentar a informação sobre aquela unidade, mas não criam automaticamente novas repetições experimentais.</p>"]
 ],
 exercicios:["Explique por que aumentar repetições tende a melhorar a precisão.","Dê dois exemplos de fontes controláveis de variação em um experimento agrícola.","Diferencie repetição de subamostragem."]
},
{
 id:"planejamento", modulo:"03 · PLANEJAMENTO", titulo:"Planejamento Experimental", subtitulo:"Como transformar uma pergunta científica em um experimento válido.",
 objetivos:["Definir hipótese, tratamentos, unidade experimental e variável resposta.","Planejar repetição, aleatorização e controle local.","Evitar pseudorrepetição, confundimento e viés."],
 blocos:[
 ["1. Pergunta e hipótese","<p>Comece com uma pergunta mensurável. Exemplo: “Doses crescentes de N alteram a produtividade do milho?”. A hipótese estatística normalmente envolve uma hipótese nula, como <strong>H₀: μ₁=μ₂=...=μₖ</strong>, contra uma alternativa de que pelo menos uma média difere.</p>"],
 ["2. Tratamentos e fatores","<p>Um <strong>fator</strong> é uma variável experimental manipulada. Seus valores são os <strong>níveis</strong>. Em um ensaio com doses de N, N é o fator e 0, 60, 120 e 180 kg ha⁻¹ são níveis.</p>"],
 ["3. Repetição","<p>Repetições permitem estimar a variabilidade experimental. O número adequado depende do objetivo, variabilidade esperada, tamanho de efeito relevante, precisão desejada e recursos. Quando possível, planeje o tamanho amostral antes da coleta.</p>"],
 ["4. Aleatorização","<p>A aleatorização distribui de forma não sistemática fatores não controlados entre os tratamentos. Ela reduz o risco de associar uma característica do ambiente a um tratamento por puro posicionamento.</p>"],
 ["5. Controle local","<p>Quando existe um gradiente conhecido, blocos podem agrupar unidades semelhantes. Por exemplo, se há um gradiente de fertilidade no sentido norte-sul, os blocos podem ser orientados de modo a controlar essa variação.</p>"],
 ["6. Confundimento e pseudorrepetição","<p>Se todos os tratamentos forem colocados em regiões diferentes do campo, tratamento e posição ficam confundidos. Se várias plantas de uma única parcela receberem o mesmo tratamento e forem tratadas como repetições independentes, ocorre pseudorrepetição.</p>"],
 ["7. Checklist","<p><strong>Pergunta → hipótese → fator(es) → níveis → unidade experimental → número de repetições → delineamento → aleatorização → variável resposta → protocolo de coleta → plano de análise.</strong></p>"]
 ],
 exercicios:["Monte o planejamento de um ensaio com quatro doses de N e cinco repetições.","Identifique um possível confundimento em um experimento sem aleatorização.","Explique por que o plano de análise deve ser pensado antes da coleta."]
},
{
 id:"delineamentos", modulo:"04 · DELINEAMENTOS", titulo:"Delineamentos Experimentais", subtitulo:"DIC, DBC e Quadrado Latino.",
 objetivos:["Reconhecer quando usar DIC, DBC e Quadrado Latino.","Entender a estrutura do modelo de cada delineamento.","Relacionar controle local e redução do erro."],
 blocos:[
 ["1. DIC — Delineamento Inteiramente Casualizado","<p>No DIC, os tratamentos são atribuídos aleatoriamente às unidades experimentais. É adequado quando as unidades são relativamente homogêneas. Um modelo simples é \(Y_{ij}=\mu+\tau_i+\varepsilon_{ij}\).</p>"],
 ["2. DBC — Delineamento em Blocos Casualizados","<p>No DBC, cada bloco contém os tratamentos e representa um conjunto de unidades semelhantes. O modelo pode ser escrito como \(Y_{ij}=\mu+\tau_i+\beta_j+\varepsilon_{ij}\). O bloco explica uma fonte conhecida de variação e pode reduzir o erro residual.</p>"],
 ["3. Quadrado Latino","<p>É usado quando existem duas fontes de heterogeneidade que precisam ser controladas, organizadas em linhas e colunas. Cada tratamento aparece uma vez em cada linha e uma vez em cada coluna.</p>"],
 ["4. Como escolher","<p>Se o ambiente é homogêneo, DIC pode ser suficiente. Se existe um gradiente ou agrupamento conhecido, DBC pode ser apropriado. Se há duas direções/fontes sistemáticas de variação e as condições do delineamento são atendidas, o Quadrado Latino pode ser considerado.</p>"],
 ["5. Exemplo agronômico","<p>Em uma área com gradiente de fertilidade, quatro cultivares são testadas em cinco blocos. Cada bloco recebe as quatro cultivares uma vez. A variação entre blocos é retirada do erro, aumentando a eficiência da comparação entre cultivares.</p>"]
 ],
 exercicios:["Desenhe um DBC para cinco tratamentos e quatro blocos.","Explique a diferença entre repetição e bloco.","Quando o Quadrado Latino é mais adequado que o DBC?"]
},
{
 id:"anova", modulo:"05 · ANOVA", titulo:"Análise de Variância — ANOVA", subtitulo:"Particionando a variação para testar efeitos de tratamentos.",
 objetivos:["Entender a lógica da ANOVA.","Interpretar SQ, GL, QM, F e p-valor.","Construir e interpretar uma tabela de ANOVA."],
 blocos:[
 ["1. Ideia central","<p>A ANOVA compara a variação entre médias de tratamentos com a variação existente dentro dos tratamentos. Para um fator em DIC, a variação total é particionada em <strong>tratamentos + erro</strong>.</p>"],
 ["2. Somas de quadrados","<p>A soma de quadrados total mede a variação em torno da média geral: \(SQ_T=\sum(y_{ij}-\bar y_{..})^2\). A soma de quadrados de tratamentos representa a parte associada às diferenças entre médias; o restante é o erro: \(SQ_E=SQ_T-SQ_{Trat}\).</p>"],
 ["3. Graus de liberdade","<p>Com k tratamentos e N observações: \(GL_{Trat}=k-1\), \(GL_E=N-k\) e \(GL_T=N-1\). Para cada fonte, \(QM=SQ/GL\).</p>"],
 ["4. Teste F","<p>A estatística é \(F=QM_{Trat}/QM_E\). Sob H₀, valores de F suficientemente grandes indicam que a variação entre médias é grande em relação à variação residual esperada.</p>"],
 ["5. Exemplo conceitual","<p>Considere quatro doses de N com cinco parcelas cada. Se o QM de tratamentos for 900.000 e o QM do erro 100.000, F=9. O p-valor é obtido pela distribuição F com os graus de liberdade correspondentes. A conclusão depende do nível de significância previamente adotado e do contexto.</p>"],
 ["6. Interpretação correta","<p>Se p for menor que α, rejeitamos H₀ de igualdade das médias. Isso não significa que todos os tratamentos diferem entre si, nem mede a importância agronômica do efeito. Depois, é preciso examinar estimativas, intervalos, comparações ou contrastes e a magnitude do efeito.</p>"],
 ["7. Tabela típica","<p><strong>Fonte | GL | SQ | QM | F | p</strong><br>Tratamentos | k−1 | SQTrat | QMTrat | F | p<br>Erro | N−k | SQE | QME | — | —<br>Total | N−1 | SQT | — | — | —</p>"]
 ],
 exercicios:["Explique por que a ANOVA usa uma razão entre quadrados médios.","Se SQTrat=300 e GLTrat=3, calcule QMTrat.","Com QMTrat=40 e QME=5, calcule F.","Explique o que uma ANOVA significativa não permite concluir sozinha."]
},
{
 id:"pressupostos", modulo:"06 · PRESSUPOSIÇÕES", titulo:"Pressuposições da ANOVA", subtitulo:"Independência, normalidade e homogeneidade: como diagnosticar o modelo.",
 objetivos:["Entender por que as pressuposições importam.","Avaliar resíduos e variâncias.","Conhecer alternativas quando o modelo não descreve adequadamente os dados."],
 blocos:[
 ["1. Resíduos","<p>Resíduo é a diferença entre o valor observado e o valor ajustado pelo modelo: \(e_i=y_i-\hat y_i\). Diagnósticos devem ser feitos principalmente sobre resíduos, e não apenas sobre os dados brutos.</p>"],
 ["2. Independência","<p>É uma propriedade fortemente ligada ao planejamento. Aleatorização e definição correta da unidade experimental são fundamentais. Dados temporais ou espaciais podem apresentar dependência e exigem modelos específicos.</p>"],
 ["3. Normalidade","<p>Em ANOVA clássica, a normalidade é uma suposição sobre a distribuição dos erros. Pode ser investigada por gráfico Q-Q e testes formais, mas testes de normalidade isolados não substituem diagnóstico gráfico e conhecimento do experimento.</p>"],
 ["4. Homogeneidade","<p>As variâncias dos erros devem ser aproximadamente semelhantes entre grupos. Resíduos versus ajustados e gráficos por tratamento ajudam a detectar funil ou dispersão desigual. Testes como Levene podem complementar o diagnóstico.</p>"],
 ["5. Transformação","<p>Quando a escala da resposta produz variância dependente da média ou distribuição inadequada, uma transformação pode melhorar o modelo. Logaritmo é comum para respostas positivas e assimétricas; raiz quadrada pode ser útil para contagens. A escolha deve ter justificativa estatística e científica.</p>"],
 ["6. O que fazer diante de problema","<p>Primeiro verifique erro de entrada e estrutura do experimento. Depois avalie resíduos, transformação, variâncias heterogêneas ou modelos alternativos. Não se deve simplesmente remover observações porque são inconvenientes.</p>"]
 ],
 exercicios:["Qual pressuposição está relacionada ao planejamento?","O que um gráfico de resíduos versus ajustados pode revelar?","Por que um teste de normalidade não deve ser usado isoladamente?"]
},
{
 id:"transformacao", modulo:"06 · PRESSUPOSIÇÕES", titulo:"Transformação de Dados", subtitulo:"Mudando a escala da resposta para representar melhor a estrutura do erro.",
 objetivos:["Entender o objetivo de uma transformação.","Conhecer log, raiz quadrada e transformações para proporções.","Interpretar resultados na escala transformada e original."],
 blocos:[
 ["1. Por que transformar?","<p>Uma transformação pode estabilizar variâncias, aproximar a distribuição dos resíduos da normalidade ou tornar a relação entre resposta e preditor mais adequada. Ela não deve ser aplicada apenas para “fazer o p-valor ficar significativo”.</p>"],
 ["2. Logaritmo","<p>Para respostas positivas, uma transformação \(z=\log(y)\) pode reduzir assimetria e estabilizar variância. Se a base for e, usamos ln; a base escolhida altera a escala, não a essência da transformação.</p>"],
 ["3. Raiz quadrada","<p>Para contagens ou variáveis não negativas, \(z=\sqrt y\) pode ser útil. Em dados de contagem modernos, porém, modelos específicos como Poisson ou binomial negativa podem ser mais adequados.</p>"],
 ["4. Proporções","<p>Proporções próximas de 0 ou 1 podem apresentar variância não constante. Transformações históricas como arco-seno da raiz quadrada existem, mas não são uma solução universal; modelos binomiais ou abordagens apropriadas à natureza da resposta devem ser considerados.</p>"],
 ["5. Interpretação","<p>Faça a análise na escala transformada quando justificado, mas apresente resultados em escala original quando isso facilitar a interpretação agronômica, deixando clara a transformação utilizada.</p>"]
 ],
 exercicios:["Quando o logaritmo pode ser apropriado?","Por que transformar não deve ser usado para buscar significância?","Dê um exemplo em que um modelo de contagem seja mais natural que uma ANOVA transformada."]
},
{
 id:"contrastes", modulo:"07 · CONTRASTES", titulo:"Contrastes e Comparações Múltiplas", subtitulo:"Perguntas específicas sobre tratamentos e controle do erro de comparação.",
 objetivos:["Construir contrastes lineares.","Entender contrastes ortogonais.","Diferenciar contraste planejado de comparação pós-ANOVA.","Conhecer Tukey, Duncan e Scott-Knott de forma crítica."],
 blocos:[
 ["1. Contraste","<p>Um contraste é uma combinação linear de médias \(L=\sum c_i\mu_i\), em que \(\sum c_i=0\). Exemplo: comparar a média de três doses altas com a dose controle: \(L=(-3)\mu_0+\mu_{60}+\mu_{120}+\mu_{180}\).</p>"],
 ["2. Contrastes ortogonais","<p>Dois contrastes são ortogonais, em delineamentos balanceados com estrutura adequada, quando \(\sum c_i d_i=0\). Contrastes ortogonais particionam a informação de maneira independente.</p>"],
 ["3. Comparações múltiplas","<p>Quando queremos comparar muitas médias, fazer vários testes sem controle aumenta o risco de falso positivo. Métodos de comparação múltipla ajustam esse problema. O <strong>Tukey</strong> é amplamente usado para comparar todas as médias par a par.</p>"],
 ["4. Outros métodos","<p>Duncan e Scott-Knott são encontrados em trabalhos agronômicos, mas possuem propriedades e objetivos diferentes. A escolha deve ser explicitada e coerente com a pergunta, e não baseada apenas em tradição ou no agrupamento mais conveniente.</p>"],
 ["5. Importância agronômica","<p>Diferença estatística não é sinônimo de relevância agronômica. Sempre que possível, apresente diferença estimada, intervalo de confiança, tamanho do efeito e implicação prática.</p>"]
 ],
 exercicios:["Monte um contraste para comparar controle contra a média de três tratamentos.","Verifique se (1,-1,0,0) e (0,0,1,-1) são ortogonais.","Explique por que múltiplas comparações exigem cuidado."]
},
{
 id:"fatoriais", modulo:"08 · FATORIAIS", titulo:"Experimentos Fatoriais", subtitulo:"Estudando fatores simultaneamente e descobrindo interações.",
 objetivos:["Distinguir fator, nível e combinação de tratamentos.","Interpretar efeitos principais e interação.","Evitar interpretações erradas quando existe interação."],
 blocos:[
 ["1. Estrutura","<p>Um fatorial 2×3 possui dois fatores: o primeiro com 2 níveis e o segundo com 3. Há 6 combinações de tratamentos. Em vez de estudar cada fator isoladamente, o fatorial permite avaliar efeitos principais e interação.</p>"],
 ["2. Efeito principal","<p>O efeito principal de A compara as médias de A, agregando os níveis de B. O mesmo vale para B. Isso é útil quando a resposta de um fator é relativamente consistente nos níveis do outro.</p>"],
 ["3. Interação","<p>Existe interação quando o efeito de um fator depende do nível do outro. Graficamente, linhas não paralelas são um alerta visual. Quando a interação é importante, interpretar apenas os efeitos principais pode ser enganoso.</p>"],
 ["4. Exemplo agronômico","<p>Fator A = cultivar (2 níveis); fator B = dose de N (3 níveis). Se a cultivar A responder muito à dose e a cultivar B pouco responder, o efeito da dose depende da cultivar: há interação.</p>"],
 ["5. Interpretação","<p>Com interação, examine efeitos simples: comparar doses dentro de cada cultivar ou cultivares dentro de cada dose, usando comparações apropriadas. A pergunta científica deve orientar quais comparações são relevantes.</p>"]
 ],
 exercicios:["Quantas combinações existem em um fatorial 3×4?","Explique interação com suas próprias palavras.","Dê um exemplo agrícola em que interação seja esperada."]
},
{
 id:"parcelas", modulo:"09 · PARCELAS DIVIDIDAS", titulo:"Experimentos em Parcelas Divididas", subtitulo:"Quando fatores possuem diferentes unidades de aleatorização.",
 objetivos:["Identificar parcela principal e subparcela.","Entender por que existem dois erros experimentais.","Interpretar modelos de parcelas divididas."],
 blocos:[
 ["1. Por que usar parcelas divididas?","<p>Quando um fator é difícil ou caro de aplicar em pequenas unidades, ele pode ser aplicado à parcela principal, enquanto outro fator é aplicado às subparcelas. Exemplo: irrigação em parcelas grandes e cultivar em subparcelas.</p>"],
 ["2. Estrutura","<p>Imagine 3 níveis de irrigação × 4 cultivares em 4 blocos. Cada bloco possui parcelas de irrigação; dentro de cada parcela existem quatro subparcelas de cultivar.</p>"],
 ["3. Dois erros","<p>O fator aplicado à parcela principal é testado contra um erro associado à parcela principal. O fator da subparcela e a interação normalmente usam o erro de subparcela. Usar um único erro indistintamente pode produzir inferência incorreta.</p>"],
 ["4. Modelo conceitual","<p>O modelo contém média geral, efeitos de bloco, fator A, erro da parcela, fator B, interação A×B e erro da subparcela. A forma exata depende do delineamento e da estrutura de aleatorização.</p>"],
 ["5. Exemplo","<p>Se irrigação exige grandes faixas e cultivar pode ser distribuída dentro dessas faixas, a estrutura de parcelas divididas representa o processo real de aplicação e aleatorização.</p>"]
 ],
 exercicios:["Qual fator deve ocupar a parcela principal quando sua aplicação é difícil de aleatorizar em unidades pequenas?","Por que há dois erros?","Explique o que muda na interpretação se A×B for significativa."]
},
{
 id:"regressao", modulo:"10 · REGRESSÃO", titulo:"Modelos de Regressão Linear", subtitulo:"Modelando respostas quantitativas em função de variáveis explicativas.",
 objetivos:["Distinguir correlação de regressão.","Ajustar e interpretar regressão linear simples.","Interpretar coeficientes, R² e resíduos.","Reconhecer limites de extrapolação."],
 blocos:[
 ["1. Modelo","<p>Na regressão linear simples: \(Y=\beta_0+\beta_1X+\varepsilon\). \(\beta_0\) é o intercepto e \(\beta_1\) é a mudança média esperada em Y para uma unidade adicional de X, sob o modelo.</p>"],
 ["2. Exemplo agrícola","<p>Considere produtividade em função da dose de N. Se \(\hat Y=3.200+8,5X\), o coeficiente 8,5 indica aumento estimado de 8,5 kg ha⁻¹ por kg ha⁻¹ adicional de N, dentro da faixa estudada e sob as condições do experimento.</p>"],
 ["3. Correlação não é regressão","<p>Correlação descreve associação entre duas variáveis; regressão especifica uma variável resposta e uma ou mais explicativas. Uma associação forte não prova causalidade.</p>"],
 ["4. R²","<p>O coeficiente de determinação indica a proporção da variabilidade da resposta explicada pelo modelo na amostra, conforme a definição do modelo. R² alto não garante que o modelo seja biologicamente adequado.</p>"],
 ["5. Diagnóstico","<p>Examine resíduos versus ajustados, Q-Q, pontos influentes e padrão da relação. Linearidade, independência e homogeneidade dos resíduos precisam ser avaliadas.</p>"],
 ["6. Regressão polinomial","<p>Para respostas com máximo ou mínimo, pode-se usar \(Y=\beta_0+\beta_1X+\beta_2X^2+\varepsilon\). O ponto crítico, quando \(\beta_2\neq0\), é \(X^*=-\beta_1/(2\beta_2)\). Esse cálculo deve permanecer dentro da faixa experimental e ser interpretado agronomicamente.</p>"]
 ],
 exercicios:["Interprete \(\beta_1=12\) em uma regressão produtividade × dose.","Por que R² alto não garante causalidade?","Calcule o ponto crítico para β₁=20 e β₂=-0,5."]
},
{
 id:"conjunta", modulo:"11 · ANÁLISE CONJUNTA", titulo:"Análise Conjunta de Experimentos", subtitulo:"Como analisar experimentos repetidos em ambientes, anos ou locais.",
 objetivos:["Entender ambiente como fonte de variação.","Avaliar interação tratamento × ambiente.","Distinguir consistência de resposta de resposta específica."],
 blocos:[
 ["1. Por que combinar experimentos?","<p>Ensaios podem ser conduzidos em diferentes locais, anos ou épocas para avaliar estabilidade e generalização. A análise conjunta considera esses ambientes simultaneamente.</p>"],
 ["2. Estrutura","<p>Um modelo conceitual pode incluir tratamento, ambiente e interação tratamento×ambiente. Em ambientes com condições distintas, a interação mostra se a resposta dos tratamentos muda de um ambiente para outro.</p>"],
 ["3. Interação","<p>Se uma cultivar apresenta alto rendimento em um local e baixo em outro, enquanto outra apresenta comportamento inverso, há evidência de interação. Isso não é necessariamente “erro”; pode ser informação biológica importante.</p>"],
 ["4. Planejamento","<p>Para combinar ensaios, os experimentos precisam ter estruturas compatíveis e critérios claros de inclusão. Variâncias e estruturas de erro devem ser avaliadas, especialmente quando número de repetições ou condições diferem entre ambientes.</p>"],
 ["5. Interpretação","<p>Uma média geral pode esconder respostas específicas. Quando a interação é relevante, apresente resultados por ambiente, por tratamento e a interação, em vez de resumir tudo em uma única média.</p>"]
 ],
 exercicios:["Quais fontes podem ser chamadas de ambiente?","O que significa tratamento × ambiente?","Por que uma média geral pode ser insuficiente quando há interação forte?"]
},
{
 id:"superficie", modulo:"12 · SUPERFÍCIE", titulo:"Superfície de Resposta", subtitulo:"Modelando sistemas com múltiplos fatores quantitativos e buscando condições ótimas.",
 objetivos:["Compreender modelos de primeira e segunda ordem.","Interpretar termos lineares, quadráticos e de interação.","Usar superfície e curvas de nível para interpretar respostas."],
 blocos:[
 ["1. Ideia","<p>Superfície de resposta estuda como uma resposta muda em função de fatores quantitativos. Em duas variáveis, o modelo quadrático típico é \(Y=\beta_0+\beta_1X_1+\beta_2X_2+\beta_{11}X_1^2+\beta_{22}X_2^2+\beta_{12}X_1X_2+\varepsilon\).</p>"],
 ["2. Interpretação","<p>Termos lineares descrevem tendência; termos quadráticos permitem curvatura; o termo X₁X₂ representa interação entre fatores. A superfície 3D e as curvas de nível ajudam a visualizar a resposta.</p>"],
 ["3. Ponto estacionário","<p>O ponto estacionário é obtido resolvendo as derivadas parciais iguais a zero. A classificação como máximo, mínimo ou sela depende da matriz de curvatura/Hessiana.</p>"],
 ["4. Exemplo","<p>Considere produtividade em função de N e água. O modelo pode indicar uma região de combinação de doses que maximiza produtividade, mas a recomendação precisa respeitar a faixa experimental e custos, riscos e objetivos agronômicos.</p>"],
 ["5. Cuidado","<p>Não extrapole a superfície muito além da região observada. Um ótimo matemático fora da faixa experimental não é uma recomendação experimental validada.</p>"]
 ],
 exercicios:["Identifique no modelo quadrático quais termos representam curvatura.","O que significa X₁X₂?","Por que não se deve extrapolar livremente a superfície?"]
},
{
 id:"multivariada", modulo:"13 · MULTIVARIADA", titulo:"Introdução à Análise Multivariada", subtitulo:"Quando várias características precisam ser consideradas simultaneamente.",
 objetivos:["Entender a diferença entre análise univariada e multivariada.","Conhecer PCA e análise de agrupamento.","Interpretar distância, variância e componentes."],
 blocos:[
 ["1. Por que multivariada?","<p>Um experimento agrícola pode medir produtividade, altura, biomassa, teor de N, índice de área foliar e vários atributos do solo. Analisar cada variável isoladamente pode ocultar relações entre elas.</p>"],
 ["2. Padronização","<p>Variáveis em escalas muito diferentes podem dominar medidas de distância. A padronização frequentemente transforma cada variável em média 0 e desvio-padrão 1 antes de métodos baseados em escala, quando isso fizer sentido.</p>"],
 ["3. PCA","<p>A <strong>Análise de Componentes Principais</strong> transforma variáveis correlacionadas em componentes não correlacionados. O primeiro componente captura a maior parcela possível da variância, o segundo a maior parcela restante, e assim por diante.</p>"],
 ["4. Biplot","<p>Em um biplot de PCA, a direção dos vetores ajuda a interpretar associação entre variáveis e a posição das observações mostra padrões relativos. A interpretação deve considerar cargas, escala e porcentagem de variância explicada.</p>"],
 ["5. Agrupamento","<p>Métodos de cluster formam grupos de observações semelhantes segundo uma medida de distância e um algoritmo. O número de grupos precisa ser justificado; o agrupamento é uma ferramenta exploratória, não uma prova automática de categorias naturais.</p>"],
 ["6. Aplicação","<p>Uma análise pode agrupar genótipos segundo vários atributos agronômicos e depois investigar quais características distinguem os grupos. O desenho experimental e a estrutura de dependência continuam sendo importantes.</p>"]
 ],
 exercicios:["Quando padronizar variáveis antes de PCA?","O que representa a variância explicada por um componente?","Por que um cluster não deve ser interpretado automaticamente como uma categoria biológica real?"]
},
{
 id:"computacional", modulo:"14 · COMPUTACIONAL", titulo:"Análise Computacional com R e Python", subtitulo:"Transformando dados experimentais em análises reproduzíveis.",
 objetivos:["Organizar dados em formato adequado.","Conhecer o fluxo de análise em R e Python.","Registrar scripts, versões, gráficos e resultados de forma reproduzível."],
 blocos:[
 ["1. Dados em formato organizado","<p>Prefira uma estrutura em que cada linha represente uma observação/unidade e cada coluna uma variável. Exemplo: bloco, tratamento, dose, cultivar, produtividade e outras respostas.</p>"],
 ["2. Fluxo reprodutível","<p><strong>Importar → verificar → explorar → visualizar → ajustar modelo → diagnosticar → comparar → interpretar → exportar.</strong> Evite editar resultados manualmente em planilhas depois da análise.</p>"],
 ["3. R","<p>Em R, pacotes como <code>tidyverse</code> ajudam na manipulação e visualização; <code>stats</code> fornece funções clássicas; outros pacotes podem implementar modelos e comparações. O princípio é registrar no script todos os passos necessários para reproduzir o resultado.</p>"],
 ["4. Python","<p>Em Python, <code>pandas</code> é usado para dados, <code>numpy</code> para computação numérica, <code>matplotlib</code> para gráficos e <code>statsmodels</code>/<code>scipy</code> para diversos procedimentos estatísticos. A escolha da biblioteca deve seguir o modelo necessário.</p>"],
 ["5. Exemplo de R","<pre><code>modelo &lt;- aov(produtividade ~ tratamento, data = dados)
summary(modelo)
TukeyHSD(modelo)
plot(modelo)</code></pre><p>O código só faz sentido depois de confirmar que o delineamento e a estrutura de dados estão corretos.</p>"],
 ["6. Reprodutibilidade","<p>Guarde dados brutos, dicionário de variáveis, script, versões de pacotes e critérios de análise. Um resultado científico deve poder ser refeito a partir dos arquivos originais.</p>"]
 ],
 exercicios:["Desenhe uma tabela de dados para um DBC com quatro tratamentos e cinco blocos.","Liste as etapas de uma análise reproduzível.","Por que o código não corrige um delineamento incorreto?"]
}
];